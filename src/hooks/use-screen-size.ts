/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, useEffect } from 'react';

export const useScreenSize = () => {
  let initDimensions = {
    width: 0,
    height: 0,
  }
  if (typeof window !== "undefined") {
    initDimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }
  const [screenSize, setScreenSize] = useState(initDimensions);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};
