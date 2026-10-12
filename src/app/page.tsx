import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-4 py-12 sm:py-20 dark:bg-black">
      <main className="flex w-full max-w-md flex-col items-center">
        <ProfileHeader profile={profile} />
        <ul className="mt-10 flex w-full flex-col gap-4">
          {links.map((link) => (
            <li key={link.label}>
              <LinkCard link={link} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
