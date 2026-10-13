// 화면에 보여 줄 프로필과 링크 정보입니다.
// 지금은 보여 주기용 임시(dummy) 값이니, 이 파일만 고치면 화면 내용이 바뀝니다.

export type LinkItem = {
  // 클릭 수를 저장할 때 쓰는 고유한 이름입니다. 한 번 정하면 바꾸지 마세요(바꾸면 클릭 수가 0부터 다시 셉니다).
  id: string;
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
  name: "홍개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "https://placehold.co/150x150/orange/white",
};

export const links: LinkItem[] = [
  // 대괄호 [ ] 부분은 아직 정해지지 않은 자리표시자입니다. 실제 값으로 바꿔 주세요.
  { id: "github", label: "😊 깃허브", url: "https://github.com/[내 아이디]" },
  { id: "blog", label: "🤷‍♀️ 블로그", url: "https://[내 블로그 주소]" },
  { id: "email", label: "✌️ 이메일", url: "mailto:[내 이메일]" },
];
