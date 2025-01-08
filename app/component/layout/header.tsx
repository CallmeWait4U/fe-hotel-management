"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProfileDropdown from "./profileDropdown";

const Header = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [registerPopup, setRegisterPopup] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  const navbarLinks = [
    {
      route: "/",
      label: "About",
    },
    {
      route: "/rooms",
      label: "Rooms",
    },
    {
      route: "/services",
      label: "Services",
    },
    {
      route: "/promotions",
      label: "Promotion",
    },
  ];

  return (
    <div className="navbar bg-stone-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-0 shadow">
            {navbarLinks.map((item, index) => (
              <Link href={item.route} className="flex items-center text-black hover:text-slate-500 hover:bg-gray-300 p-2" key={index}>
                <p className="p-2 w-full">{item.label}</p>
              </Link>
            ))}
          </ul>
        </div>
        <Link href="/" className="flex justify-center">
          <div className="flex items-center select-none">
            <Image src="/logo.png" width={"8"} height={"8"} alt="Logo hotel" className="w-12 h-12 m-2" />
            <p className="font-inter body-bold text-black">The Cozy Nook</p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4 m-4 justify-center">
          {navbarLinks.map((item, index) => (
            <li key={index}>
              <button className="btn btn-ghost">
                <Link href={item.route} className="flex items-center p-0 text-black text-lg hover:text-slate-500" key={index}>
                  <p className="mx-4 my-2">{item.label}</p>
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="navbar-end">
        {/* If signed in show user information */}
        {isSignedIn ? (
          <ProfileDropdown />
        ) : (
          <div className="flex justify-center items-center md:flex gap-5 flex-shrink-0">
            <Link
              href={"/signin"}
              className="py-2 px-4 rounded-md bg-gradient-to-r from-orange-200
                to to-orange-500 text-black hover:text-slate-500"
              onClick={() => setLoginPopup(true)}
            >
                    Sign In
            </Link>
            <Link href={"signup"} className="p-2 border-2 border-orange-600 rounded-md text-black hover:text-slate-500 mr-4" onClick={() => setRegisterPopup(true)}>
                    Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header;