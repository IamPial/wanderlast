"use client";
import { useState } from "react";
import LogoImg from "@/assets/Wanderlast.png";
import Link from "next/link";
import { LuUserRound } from "react-icons/lu";
import { Button } from "@heroui/react";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 z-40  border-b border-separator bg-background/70 backdrop-blur-lg">
      <nav className="container mx-auto px-2 md:px-0">
        <header className=" flex h-16  items-center">
          <div className="flex items-center">
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="grid items-center w-full grid-cols-3 ">
            <ul className="hidden items-center gap-4 lg:w-3xl lg:flex font-semibold text-slate-800">
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/destinations">Destinations</NavLink>
              </li>
              <li>
                <NavLink href="/my-bookings">My Bookings</NavLink>
              </li>
              <li>
                <NavLink href="/add-destination">Add Destination</NavLink>
              </li>
            </ul>
            <div className="flex items-center gap-3">
              <Image
                src={LogoImg}
                alt={"wanderlast"}
                height={200}
                width={200}
                className="mx-5 lg:mx-30 "
              />
            </div>
            <ul className="hidden items-center gap-4 lg:flex font-semibold text-slate-800 justify-end">
              <li>
                <NavLink href={"/profile"}>
                  <p className="flex gap-1 items-center">
                    <LuUserRound /> Profile
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink href={"/login"}>Login</NavLink>
              </li>
              <li>
                <NavLink href={"/sign-up"}>SignUp</NavLink>
              </li>
            </ul>
          </div>
        </header>
        {isMenuOpen && (
          <div className="border-t border-separator lg:hidden">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <NavLink href="/" className="block py-2">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink href="/destinations" className="block py-2">
                  Destinations
                </NavLink>
              </li>
              <li>
                <NavLink href="/my-bookings" className="block py-2">
                  My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink href="/add-destination" className="block py-2">
                  Add Destination
                </NavLink>
              </li>
              <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                <NavLink href={"/profile"}>
                  <p className="flex gap-1 items-center">
                    <LuUserRound /> Profile
                  </p>
                </NavLink>

                <NavLink href={"/login"}>Login</NavLink>

                <NavLink href={"/sign-up"}>SignUp</NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
