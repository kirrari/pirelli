'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineMail, AiOutlineSearch } from 'react-icons/ai';

export const TOP_HEADER_HEIGHT = 84;
const TOP_OFFSET = 148;

const Header: React.FC = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <header className="w-full flex flex-col items-center md:bg-black md:border-b-2 md:border-white">
      <div
        className={`w-4/5 h-[${TOP_HEADER_HEIGHT}px] flex items-center justify-between`}
      >
        <Link href="/">
          <Image
            width={142}
            height={37}
            alt="Pirelli Logo"
            src="/images/logo.png"
          />
        </Link>
        <div className="flex items-center gap-4">
          <AiOutlineSearch
            size={37}
            className="cursor-pointer text-white hover:text-light transition"
          />
          <Link href="/mail">
            <AiOutlineMail
              size={37}
              className="text-white hover:text-light transition"
            />
          </Link>
        </div>
      </div>
      <div
        className={`hidden md:flex justify-center w-full h-[64px] z-50 bg-black text-[20px]
        ${showBackground ? 'fixed' : 'absolute top-[84px] bg-opacity-90'}`}
      >
        <div className="w-4/5 h-full flex justify-between items-center">
          <div
            className={`flex items-center ${
              showBackground ? 'gap-8' : 'gap-4'
            }`}
          >
            <Image
              width={142}
              height={37}
              alt="Pirelli Logo"
              src="/images/logo.png"
              className={`${showBackground ? 'block' : 'hidden'}`}
            />
            <Link
              href="/stories"
              className="text-white hover:text-light transition"
            >
              Stories
            </Link>
            <Link
              href="/products"
              className="text-white hover:text-light transition"
            >
              Products
            </Link>
          </div>
          <div
            className={`flex items-center ${
              showBackground ? 'gap-8' : 'gap-4'
            }`}
          >
            <Link
              href="/about"
              className="text-white hover:text-light transition"
            >
              About
            </Link>
            <Link
              href="/careers"
              className="text-white hover:text-light transition"
            >
              Careers
            </Link>
            <AiOutlineSearch
              size={37}
              className={`cursor-pointer text-white hover:text-light transition 
              ${showBackground ? 'block' : 'hidden'}`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
