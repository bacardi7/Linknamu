// 화면에 보여 줄 프로필과 링크 정보입니다.
// 지금은 보여 주기용 임시(dummy) 값이니, 이 파일만 고치면 화면 내용이 바뀝니다.

export type LinkItem = {
  label: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  // 사진 주소입니다. 비워 두면 이름 첫 글자로 만든 원형 이미지가 대신 보입니다.
  imageUrl?: string;
};

export const profile: Profile = {
  name: "홍길동",
  bio: "인류 최강 바이브코더",
  imageUrl: "",
};

export const links: LinkItem[] = [
  { label: "GitHub", url: "https://github.com/" },
  { label: "LinkedIn", url: "https://www.linkedin.com/" },
  { label: "Blog", url: "https://example.com/" },
];
