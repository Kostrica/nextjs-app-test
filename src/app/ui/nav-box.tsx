'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
  {
    id: 'game',
    name: 'Go to Tic-Tac-Toe game',
    href: '/tic-tac-toe',
    icon: ArrowRightIcon
  },
  {
    id: 'dashboard',
    name: 'Go to Dashboard',
    href: '/dashboard',
    icon: ArrowRightIcon
  }
];

export default function NavBox() {
  return (
    <ul className="lg:py-6">
      {links.map(link => {
        const LinkIcon = link.icon;
        return (
          <li
            key={link.id}
            className="mb-3"
          >
            <Link
              href={link.href}
            >
              <motion.div
                className="flex h-[48px] items-center justify-end gap-2 border border-solid border-black rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-neutral-200 md:flex-none md:p-2 md:px-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <p>{link.name}</p>
                <LinkIcon className="w-6" />
              </motion.div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
