"use client";

import Link from "next/link";
import { FaKey, FaUser } from "react-icons/fa";
import { FaArrowRightFromBracket, FaBellConcierge } from "react-icons/fa6";

const ProfileDropdown = () => {

  const handleSignOut = () => {
    //
  };

  const dropDownProfileLinks = [
    {
      title: "Edit profile",
      icon: <FaUser />,
      link: "/",
    },
    {
      title: "My booking",
      icon: <FaBellConcierge />,
      link: "/",
    },
    {
      title: "Change password",
      icon: <FaKey />,
      link: "/",
    },
    {
      title: "Log out",
      icon: <FaArrowRightFromBracket />,
      link: "/",
      onClick: handleSignOut,
    },
  ];
  
  return (
    <div className="flex justify-center mr-4">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost m-1 text-black text-base">
          <div className="bg-primary p-2 rounded-full">
            <FaUser />
          </div>
          User
        </div>
        <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-white">
          {
            dropDownProfileLinks.map((item, index) => (
              <li key={index} className="flex flex-cols-2 text-black">
                <Link href={item.link}>
                  <div className="p-2 rounded-full">
                    {item.icon}
                  </div>
                  {item.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default ProfileDropdown;