import NavLink from "./NavLink";
import Link from "next/link";

import { RxCross2 } from "react-icons/rx";

type toggleHandlerProps = {
  toggleHandler: () => void;
};

export default function MobileNavbar({ toggleHandler }: toggleHandlerProps) {
  return (
    <>
      <header className="bg-black fixed top-0 right-0 left-0 h-full pt-16 p-6 z-50">
        <RxCross2
          size={25}
          onClick={toggleHandler}
          className="cursor-pointer text-white absolute right-6 top-6"
        />
        <nav className="bg-white h-full p-4 rounded-lg z-50">
          <ul className="flex flex-col gap-4">
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
    </>
  );
}
