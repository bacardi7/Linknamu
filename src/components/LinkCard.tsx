import type { LinkItem } from "@/data/profile";

type LinkCardProps = {
  link: LinkItem;
  clickCount: number;
  onClick?: () => void;
};

export default function LinkCard({ link, clickCount, onClick }: LinkCardProps) {
  // mailto: 링크는 새 탭 대신 메일 프로그램을 바로 열도록 target 을 붙이지 않습니다.
  const isMail = link.url.startsWith("mailto:");

  return (
    <a
      href={link.url}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      onClick={onClick}
      // 글래스모피즘: 반투명한 흰 배경 + 뒤쪽 흐림(backdrop-blur) + 밝은 테두리로 "젖빛 유리" 느낌을 냅니다.
      className="relative block w-full rounded-2xl border border-white/70 bg-white/45 px-16 py-[1.125rem] text-center text-[0.95rem] font-medium tracking-[-0.01em] text-foreground shadow-[0_8px_24px_-12px_rgba(150,90,50,0.25),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-px hover:bg-white/60 hover:shadow-[0_12px_28px_-12px_rgba(150,90,50,0.32),inset_0_1px_0_rgba(255,255,255,0.9)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9a27c] active:translate-y-0 sm:text-base"
    >
      {link.label}
      {/* 클릭 수: 카드 오른쪽 끝에 작은 글자로 표시합니다. 가운데 정렬된 제목에는 영향을 주지 않도록 absolute 로 띄웁니다. */}
      <span className="absolute top-1/2 right-5 -translate-y-1/2 text-xs font-normal text-muted tabular-nums">
        {clickCount}회
      </span>
    </a>
  );
}
