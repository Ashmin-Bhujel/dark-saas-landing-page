import Insta from "@/assets/icons/insta";
import Tiktok from "@/assets/icons/tiktok";
import XSocial from "@/assets/icons/x-social";
import Youtube from "@/assets/icons/youtube";
import Link from "next/link";
import { ReactNode } from "react";

interface FooterNavLink {
  icon: ReactNode;
  href: string;
}

const footerNavLinks: FooterNavLink[] = [
  {
    icon: <XSocial />,
    href: "/",
  },
  {
    icon: <Insta />,
    href: "/",
  },
  {
    icon: <Tiktok />,
    href: "/",
  },
  {
    icon: <Youtube />,
    href: "/",
  },
];

function FooterNavLink({ icon, href }: FooterNavLink) {
  return (
    <Link
      href={href}
      className="transition-colors duration-200 hover:text-white"
    >
      {icon}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/20 bg-black px-4 py-5 text-white/60">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Footer content */}
        <p>&copy; 2025 Dark SaaS, Inc. All rights reserved</p>

        {/* Footer navlinks */}
        <nav>
          <ul className="flex items-center gap-2.5">
            {footerNavLinks.map((footerNavLink, id) => (
              <li key={`${id} - ${footerNavLink.href}`}>
                <FooterNavLink
                  href={footerNavLink.href}
                  icon={footerNavLink.icon}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
