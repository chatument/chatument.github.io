import Image from 'next/image';
import Link from 'next/link';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto container flex pl-8 pr-8 pt-8"
        aria-label="Global"
      >
        <div className="flex">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </nav>
    </header>
  );
};
