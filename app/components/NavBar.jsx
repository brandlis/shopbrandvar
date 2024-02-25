"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { routes } from "../common";
import Logo from "../assets/logo.png";
import { HiShoppingCart } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <nav
      className={` fixed top-0 left-0 right-0 z-10 shadow-md ${
        open ? "" : "backdrop-blur-md"
      }`}
    >
      <div className=" flex justify-between items-center max-w-6xl m-auto text-700 text-xl font-semibold z-10">
        <div className="hidden phone:flex w-full p-4">
          <ul className="flex items-center space-x-4 justify-between w-full">
            <li className="border p-1 border-300 rounded-lg hover:bg-900 ">
              <Link href={routes.initial} className=" hover:text-200">
                Home
              </Link>
            </li>
            <Link href={routes.initial} className="m-1">
              <Image src={Logo} width={40} height={40} alt="logoimage" />
            </Link>
            <li className="border p-1 border-300 rounded-lg hover:bg-900 ">
              <Link href={routes.shop}>
                <HiShoppingCart className=" text-2xl hover:text-200" />
              </Link>
            </li>
          </ul>
        </div>
        <div className=" phone:hidden flex justify-between items-center w-full h-full m-1 px-6 py-4">
          <Link href={routes.initial} className="m-1">
            <Image src={Logo} width={40} height={40} alt="logoimage" />
          </Link>
          <button onClick={handleMenuToggle}>
            {open ? (
              <IoMdClose className="text-3xl z-20 absolute top-[30px] right-[27px] border p-1 rounded-md" />
            ) : (
              <HiMenu className="text-3xl border p-1 rounded-md" />
            )}
          </button>
          {open && (
            <div className="fixed bg-gray-800 bg-200 z-10 inset-0">
              <div className="absolute top-24 right-0 bg-white w-full h-full p-4">
                <ul className="flex flex-col space-y-4">
                  <li>
                    <Link href={routes.initial} className="text-2xl">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href={routes.shop} className="text-2xl">
                      Shop
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
