import { type FC } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { menuItems } from '@/constants/menu-items';

const NavMenuMobile: FC = () => {
  return (
    <motion.div
      animate={{ x: '0%' }}
      exit={{ opacity: 1 }}
      initial={{ x: '100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="flex flex-col gap-2 items-center w-screen"
    >
      {menuItems.map((p, _i) => (
        <ul
          key={_i}
          className="border-2 border-rose-500 align-middle content-center"
        >
          <Link href={p.path} target={p.path.includes('https') ? '_blank' : ''}>
            {p.title}
          </Link>
        </ul>
      ))}
    </motion.div>
  );
};

export default NavMenuMobile;
