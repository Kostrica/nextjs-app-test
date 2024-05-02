import Image from 'next/image';

import Header from '@/app/ui/header';
import NavBox from './ui/nav-box';
import NextContent from './ui/next-content';


export default function HomePage() {
  return (
    <div className="flex min-h-screen h-screen flex-col items-center justify-between py-12 px-3 md:p-12">
      <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 from-zinc-200 backdrop-blur-2xl bg-gradient-to-b pt-3 pb-36 lg:static lg:w-auto lg:py-0 lg:border-none lg:bg-none">
        <Header title="Welcome to my Nest.js app!" />
      </div>
      <main className="flex h-full flex-col items-center justify-between lg:py-6">
        <div className="sticky top-14 lg:static">
          <NavBox />
        </div>
        <div className="flex items-center justify-center p-6 pt-12 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/next.svg"
            width={900}
            height={185}
            // className="hidden mb:block"
            // className="block md:hidden"
            alt="Next.js Logo"
          />
        </div>
        <NextContent />
      </main>
    </div>
  );
}
