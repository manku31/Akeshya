"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";

import akeshyaLogo from "@/public/images/logo.png";
import NavLink from "./features/NavLink";
import MobileNavbar from "./MobileNavBar";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      {!toggle ? (
        <header className="fixed top-0 right-0 left-0 h-24 px-3 flex items-center md:px-20 z-50 border-b border-gray-100 bg-white">
          <nav className="flex items-center justify-between w-full lg:px-56">
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                src={akeshyaLogo}
                alt="Akeshya logo"
                className="md:h-16 md:w-16 h-12 w-12"
              />
              <h1 className=" md:text-3xl font-bold text-xl text-blue-900 tracking-wider">
                AKESHYA
              </h1>
            </Link>

            <div>
              <GiHamburgerMenu
                size={25}
                onClick={toggleHandler}
                className="lg:hidden cursor-pointer"
              />
            </div>

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

              <li className="text-white bg-blue-900 hover:bg-sky-600 rounded-full px-5 py-2  translate-all duration-200">
                <Link href="/contact">Contact us</Link>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        <MobileNavbar toggleHandler={toggleHandler} />
      )}
    </>
  );
}
