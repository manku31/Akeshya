"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={href}
        className={
          pathname === href
            ? "text-blue-900"
            : "hover:text-blue-900 translate-all duration-300"
        }
      >
        {children}
      </Link>
    </>
  );
}
