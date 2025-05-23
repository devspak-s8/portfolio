import Link from 'next/link';
import { FC, JSX } from 'react';

type NavLink = {
  href: string;
  label: string;
};

type SocialLink = {
  href: string;
  icon: JSX.Element;
  label: string;
};

interface NavbarProps {
  brandName: string;
  links: NavLink[];
  socialLinks: SocialLink[];
}

const Navbar: FC<NavbarProps> = ({ brandName, links, socialLinks }) => {
  return (
    <nav className="container mx-auto flex items-center justify-center py-6">
      <div className="bg-zinc-900 rounded-full px-6 py-2 flex items-center justify-between w-full max-w-md">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-purple-400">
            {brandName}
          </Link>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-purple-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          {socialLinks.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              aria-label={social.label}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
