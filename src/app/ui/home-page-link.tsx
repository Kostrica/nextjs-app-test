import { HomeIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

export default function HomePageLink() {
  const LinkIcon = HomeIcon;

  return (
    <Link
      href="/"
      className="flex h-[48px] grow items-center justify-center gap-2 border border-solid border-black rounded-md bg-gray-50 p-3 mb-2 text-sm font-medium hover:bg-neutral-200 md:flex-none md:justify-start md:p-2 md:px-3"
    >
      <LinkIcon className="w-6" />
      <p className="hidden md:block">Back to Home Page</p>
      {/* <div className="w-32 text-white md:w-40">
        <AcmeLogo />
      </div> */}
    </Link>
  );
};
