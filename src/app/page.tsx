import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center px-6 py-16 sm:px-8 sm:py-24">
      <main className="flex w-full max-w-md flex-col items-center">
        <ProfileHeader profile={profile} />
        <ul className="mt-12 flex w-full flex-col gap-4 sm:mt-14 sm:gap-5">
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
