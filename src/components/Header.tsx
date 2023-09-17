import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { menuItems } from '@/constants/menu-items';
import Link from 'next/link';

const Header = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(currentScrollY > prevScrollY);
      setPrevScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`bg-gray-800 text-white py-4 ${isScrollingDown ? 'fixed top-0 w-full' : ''
        } transition-all duration-300`}
    >
      <div className="w-full max-w-screen-xl flex justify-between items-center mx-auto px-4">
        <div className="relative w-12 h-12">
          <Image
            src={'/logo-square.jpg'}
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {isMobileMenuOpen ? (
          <button
            onClick={closeMobileMenu}
            className="lg:hidden text-3xl text-white hover:text-gray-400 focus:outline-none absolute top-4 right-4 z-50"
          >
            ✕
          </button>
        ) : (
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-3xl text-white hover:text-gray-400 focus:outline-none"
          >
            ☰
          </button>
        )}
        <nav
          className={`${isMobileMenuOpen
              ? 'translate-y-0'
              : '-translate-y-full lg:translate-y-0 lg:flex lg:space-x-6'
            } absolute lg:static top-0 left-0 w-full lg:w-auto h-screen lg:h-auto bg-gray-800 text-white transition-transform duration-300`}
        >
          <ul className="lg:flex lg:space-x-6 lg:mt-0 mt-4 flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0">
            {
              menuItems.map((d, _i) => (
                <Link key={_i} href={d.path}>
                  {d.title}
                </Link>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// {
//   menuItems.map((d, _i) => (
//     <Link key={_i} href={d.path}>
//       {d.title}
//     </Link>
//   ))
// }
