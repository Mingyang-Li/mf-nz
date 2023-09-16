import Image from 'next/image';
import { type FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScreenSize } from '@/hooks/use-screen-size';
import tailwindConfig from '../../tailwind.config';
import { type PxToNumberArgs, pxToNumber } from '@/utils/helpers';
// import NavMenuMobile from '@/components/nav-menu-mobile';
import NavMenuNonMobile from '@/components/nav-menu-non-mobile';
import NavMenuMobileGpt from '@/components/nav-menu-mobile-gpt';

const Header: FC = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  // const { width } = useScreenSize();
  // const sm = pxToNumber(tailwindConfig.theme.screens.sm as PxToNumberArgs);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScrollingDown(currentScrollY > prevScrollY);
    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`bg-gray-800 text-white py-4 flex justify-between items-center transition-all duration-300 ${
        isScrollingDown ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="ml-4">
        {/* Your logo image */}
        <Image
          src={'/logo-square.jpg'}
          alt="Logo"
          className="w-12 h-12"
          width={100}
          height={100}
        />
      </div>
      <NavMenuMobileGpt />
    </header>
  );
};

export default Header;
