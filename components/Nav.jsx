"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";

const navLinks1 = ["bakeware", "products"];
const navLinks2 = ["feed", "account"];

const Nav = () => {
  const { data: session } = useSession();
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="navDesktop">
        <div className="flex flex-row items-center gap-6 w-[100px] ">
          <p className="relative group">
            <Link href="/bakeware" className="navlinks">
              bakeware
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] rounded-full bg-contrast2 transition-all group-hover:w-full"></span>
          </p>
          <p className="relative group">
            <Link href="/products" className="navlinks">
              products
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] rounded-full bg-contrast2 transition-all group-hover:w-full"></span>
          </p>
        </div>
        <Link href="/" className="font-reem text-contrast2 cursor-pointer">
          BAKE IT
        </Link>
        <div className="flex flex-row items-center gap-6 w-[100px] ">
          <p className="relative group">
            <Link href="/feed" className="navlinks">
              feed
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] rounded-full bg-contrast2 transition-all group-hover:w-full"></span>
          </p>
          <p className="relative group">
            {session?.user ? (
              <Link href="/profile" className="navlinks">
                {session.user.name.split(" ")[0]}
              </Link>
            ) : (
              <Link href="/login" className="navlinks">
                log in
              </Link>
            )}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] rounded-full bg-contrast2 transition-all group-hover:w-full"></span>
          </p>
        </div>
      </nav>
      {/* Mobile Navigation */}
      <nav className="navMobile">
        <div className="w-full flex flex-row items-center justify-between p-4">
          <Link href="/" className="font-reem text-contrast2 cursor-pointer">
            BAKE IT
          </Link>
          <button onClick={() => setToggle(!toggle)}>
            <MenuRoundedIcon />
          </button>
          {toggle && (
            <div className="dropdownNav">
              <Link href="/bakeware" className="navlinks">
                bakeware
              </Link>
              <Link href="/products" className="navlinks">
                products
              </Link>
              <Link href="/feed" className="navlinks">
                feed
              </Link>
              {session?.user ? (
                <Link href="/profile" className="navlinks">
                  {session.user.name.split(" ")[0]}
                </Link>
              ) : (
                <Link href="/login" className="navlinks">
                  log in
                </Link>
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
