"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/images/logo.png";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <>
      <header className="h-24 fixed top-0 left-0 right-0 bg-white flex items-center px-72 border-b border-gray-100">
        <nav className="flex items-center justify-between w-full">
          {/* Logo with name */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="logo"
              className="w-12 h-12 md:w-16 md:h-16"
            />
            <h1 className="font-bold text-xl md:text-3xl text-blue-900 tracking-wider">
              AKESHYA
            </h1>
          </Link>

          {/* Navigation button links */}
          <ul className="hidden lg:flex items-center gap-8">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/services">Services</NavLink>
            </li>
            <li className="cursor-pointer text-white bg-blue-900 hover:bg-sky-600 rounded-full px-5 py-2 translate-all duration-200">
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
