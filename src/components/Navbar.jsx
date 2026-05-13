import Logo from "@/assets/Wanderlast.png";
import Image from "next/image";
import Link from "next/link";
import { LuUserRound } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className=" border-b border-separator bg-background/70 backdrop-blur-lg">
      <nav className="sticky top-0 z-40 w-full container mx-auto">
        <header className="flex my-4 items-center justify-between ">
          <ul className="flex items-center gap-4 font-semibold text-slate-800">
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
              <Link href="/admin">Admin</Link>
            </li>
          </ul>
          <div>
            <Image
              className="mx-auto "
              src={Logo}
              alt="Wanderlast"
              width={200}
              height={150}
            />
          </div>
          <ul className="flex items-center gap-4 font-semibold text-slate-800">
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
        </header>
      </nav>
    </div>
  );
};
export default Navbar;
