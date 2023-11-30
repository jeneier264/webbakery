"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useEffect, useState } from "react";

const Nav = () => {
  const { data: session } = useSession();
  const [toggle, setToggle] = useState(false);
  const [path, setPath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  useEffect(() => {
    switch (pathname) {
      case "/bakeware":
        setPath('bakeware')
        break;
      case "/products":
        setPath('products')
        break;
      case  "/feed":
        setPath('feed')
        break;
      case "/profile":
        setPath('login')
        break;
      case "/login":
        setPath('login')
        break;
      default:
        setPath('')
        break;
    }
  }, [pathname]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="navDesktop">
        <div className="flex flex-row items-center gap-6 w-[100px] ">
          <p className="relative group">
            <Link href="/bakeware" className='navlinks'>
              bakeware
            </Link>
            <span className={path==='bakeware' ? 'underlinedLink w-full' : "underlinedLink transition-all group-hover:w-full"}></span>
          </p>
          <p className="relative group">
            <Link href="/products" className='navlinks'>
              products
            </Link>
            <span className={path==='products' ? 'underlinedLink w-full' : "underlinedLink transition-all group-hover:w-full"}></span>
          </p>
        </div>
        <Link href="/" className='font-reem text-contrast2 cursor-pointer'>
          BAKE IT
        </Link>
        <div className="flex flex-row items-center gap-6 w-[100px] ">
          <p className="relative group">
            <Link href="/feed" className="navlinks">
              feed
            </Link>
            <span className={path==='feed' ? 'underlinedLink w-full' : "underlinedLink transition-all group-hover:w-full"}></span>
          </p>
          <p className="relative group">
            {session?.user ? (
              <Link href="/profile" className='navlinks'>
                {session.user.name.split(" ")[0]}
              </Link>
            ) : (
              <Link href="/login" className='navlinks'>
                log in
              </Link>
            )}
            <span className={path==='login' ? 'underlinedLink w-full' : "underlinedLink transition-all group-hover:w-full"}></span>
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
              <Link
                href="/bakeware"
                className="navlinks"
                onClick={() => setToggle(!toggle)}
              >
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
