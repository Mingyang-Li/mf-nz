import Image from 'next/image';
import { type FC, useState, useEffect } from 'react';
import NavMenuMobileGpt from '@/components/nav-menu-mobile-gpt';

const Header: FC = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(currentScrollY > prevScrollY);
      setPrevScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header className={`bg-gray-800 text-white py-4 flex justify-between items-center transition-all duration-300 ${isScrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}>
      <div className="ml-4">
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
