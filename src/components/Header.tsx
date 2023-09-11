import Image from 'next/image';
import { type FC } from 'react';
import { motion } from 'framer-motion';
import { useScreenSize } from '@/hooks/use-screen-size';
import tailwindConfig from '../../tailwind.config';
import { type PxToNumberArgs, pxToNumber } from '@/utils/helpers';
import NavMenuMobile from '@/components/nav-menu-mobile';
import NavMenuNonMobile from '@/components/nav-menu-non-mobile';

const Header: FC = () => {
  const { width } = useScreenSize();
  const sm = pxToNumber(tailwindConfig.theme.screens.sm as PxToNumberArgs);

  return (
    <div className="flex justify-center md:justify-between">
      <motion.div
        animate={{ x: '0%' }}
        exit={{ opacity: 1 }}
        initial={{ x: '-100%' }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="md:pl-60"
      >
        <Image src={'/logo-square.jpg'} width={100} height={100} alt="" />
      </motion.div>
      {width < sm ? <NavMenuMobile /> : <NavMenuNonMobile />}
    </div>
  );
};

export default Header;
