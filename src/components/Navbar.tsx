import Image from 'next/image';
import getNavLinks, { INavLink } from '../data/navLinks';
import Link from './ui-components/Link';

interface IProps {}

const navLinks = getNavLinks();

const ToNavLinkConverter = ({ href, label }: INavLink) => {
  return <Link key={href} href={href} label={label} />;
};

const Navbar = (): JSX.Element => {
  return (
    <nav className="flex h-20 py-2">
      <div className="relative flex-1">
        <Image
          src="/logo.png"
          alt="Crypto G-Hub Logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center">
        {navLinks.map(ToNavLinkConverter)}
      </div>
    </nav>
  );
};

export default Navbar;
