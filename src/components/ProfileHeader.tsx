import type { Profile } from "@/data/profile";

type ProfileHeaderProps = {
  profile: Profile;
};

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  const { name, bio, imageUrl } = profile;

  return (
    <header className="flex flex-col items-center text-center">
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          // 흰 테두리 + 아래로 부드럽게 퍼지는 그림자로 사진이 살짝 떠 있는 느낌을 줍니다.
          className="h-28 w-28 rounded-full object-cover ring-4 ring-white/80 shadow-[0_14px_32px_-12px_rgba(150,90,50,0.5)] sm:h-32 sm:w-32"
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          role="img"
          className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#f6c7a1] to-[#e39a72] text-5xl font-semibold text-white ring-4 ring-white/80 shadow-[0_14px_32px_-12px_rgba(150,90,50,0.5)] sm:h-32 sm:w-32"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-[1.6rem] font-bold tracking-[-0.02em] sm:text-3xl">{name}</h1>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted sm:text-base">
        {bio}
      </p>
    </header>
  );
}
