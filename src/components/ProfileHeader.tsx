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
          className="h-32 w-32 rounded-full border border-zinc-200 object-cover sm:h-40 sm:w-40 dark:border-zinc-700"
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          role="img"
          className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 text-5xl font-bold text-white sm:h-40 sm:w-40 sm:text-6xl"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-2xl font-bold sm:text-3xl">{name}</h1>
      <p className="mt-2 text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
        {bio}
      </p>
    </header>
  );
}
