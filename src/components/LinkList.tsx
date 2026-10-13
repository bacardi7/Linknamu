"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type LinkListProps = {
  links: LinkItem[];
};

// 링크 카드 목록과 클릭 수를 함께 관리합니다.
// 클릭 수는 브라우저에서 바뀌어야 하므로 "use client"(브라우저에서 실행되는 컴포넌트)로 만듭니다.
export default function LinkList({ links }: LinkListProps) {
  // { 링크 id: 클릭 수 } 모양입니다. 처음에는 비어 있어서 모든 카드가 0회로 보입니다.
  const [counts, setCounts] = useState<Record<string, number>>({});

  // 페이지가 열리면 모든 링크의 클릭 수를 한 번에 가져와 실제 값으로 바꿉니다.
  useEffect(() => {
    let ignore = false;

    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: Record<string, number> | null) => {
        if (!ignore && data) setCounts(data);
      })
      .catch(() => {
        // 불러오지 못해도 화면은 0회로 그대로 두고 링크는 정상적으로 열리게 합니다.
      });

    return () => {
      ignore = true;
    };
  }, []);

  function handleClick(id: string) {
    // 서버 응답을 기다리지 않고 화면의 숫자를 먼저 1 올려서 바로 반응하는 느낌을 줍니다.
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    // keepalive: 링크로 페이지가 넘어가더라도 요청이 끝까지 전송되도록 합니다.
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <ul className="mt-12 flex w-full flex-col gap-4 sm:mt-14 sm:gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            clickCount={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
