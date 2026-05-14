"use client";
import { useState } from "react";
import LogoImg from "@/assets/Wanderlast.png";
import Link from "next/link";
import { LuUserRound } from "react-icons/lu";
import { Button } from "@heroui/react";
import Image from "next/image";

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
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/destinations">Destinations</Link>
              </li>
              <li>
                <Link href="/my-bookings">My Bookings</Link>
              </li>
              <li>
                <Link href="/add-destination">Add Destination</Link>
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
                <Link href={"/profile"} className="flex gap-1 items-center">
                  <LuUserRound /> Profile
                </Link>
              </li>
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
              <li>
                <Link href={"/sign-up"}>SignUp</Link>
              </li>
            </ul>
          </div>
        </header>
        {isMenuOpen && (
          <div className="border-t border-separator lg:hidden">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <Link href="/" className="block py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="block py-2">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/my-bookings" className="block py-2">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link href="/add-destination" className="block py-2">
                  Add Destination
                </Link>
              </li>
              <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                <Link href={"/profile"} className="flex gap-1 items-center">
                  <LuUserRound /> Profile
                </Link>

                <Link href={"/login"}>Login</Link>

                <Link href={"/sign-up"}>SignUp</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
