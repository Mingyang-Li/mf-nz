import Image from 'next/image';
import Link from 'next/link';
import { type FC } from 'react';
import { motion } from 'framer-motion';

interface IPage {
  title: string;
  path: string;
}
const pages: IPage[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Membership Info',
    path: 'https://www.modelflyingnz.org/membersinfo.html',
  },
  {
    title: 'Clubs',
    path: 'https://www.modelflyingnz.org/clubs.html',
  },
];

const Header: FC = () => {
  return (
    <div className="flex justify-between">
      <motion.div
        animate={{ x: '0%' }}
        exit={{ opacity: 1 }}
        initial={{ x: '-100%' }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="md:pl-60"
      >
        <Image src={'/logo-square.jpg'} width={100} height={100} alt="" />
      </motion.div>
      <motion.div
        animate={{ x: '0%' }}
        exit={{ opacity: 1 }}
        initial={{ x: '100%' }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="flex gap-5 md:pr-60"
      >
        {pages.map((p, _i) => (
          <ul
            key={_i}
            className="border-2 border-rose-500 align-middle content-center"
          >
            <Link
              href={p.path}
              target={p.path.includes('https') ? '_blank' : ''}
            >
              {p.title}
            </Link>
          </ul>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
