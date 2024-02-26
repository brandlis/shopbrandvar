"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi";

import { routes } from "../common";
import Logo from "../assets/logo.png";
import { productsAddCartSelector } from "../common/store/selector";
import { useAppSelector } from "../common/store/hooks";

function NavBar() {
  const productsInCart = useAppSelector(productsAddCartSelector);
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <nav
      className={` fixed top-0 left-0 right-0 z-10 shadow-md ${
        open ? "" : "bg-gradient-to-t from-600 to-800"
      }`}
    >
      <div className=" flex justify-between items-center max-w-6xl m-auto text-100 text-xl font-semibold z-10">
        <div className="hidden phone:flex w-full p-2">
          <ul className="flex items-center space-x-4 justify-between w-full">
            <li className="border p-2 border-400 rounded-lg hover:bg-950 ">
              <Link href={routes.initial} className="">
                Home
              </Link>
            </li>
            <Link href={routes.initial}>
              <Image src={Logo} width={80} height={80} alt="logoimage" />
            </Link>
            <div className="flex items-center">
              <li className="border p-2 border-400 rounded-lg hover:bg-950 mr-4">
                <Link href={routes.shop} className="flex flex-grow-0 ">
                  <HiShoppingCart className=" text-2xl" />
                </Link>
              </li>
              {productsInCart.length === 0 ? "" : productsInCart.length}
            </div>
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
            <div className="fixed bg-gray-800 bg-gradient-to-tr from-700 to-400 z-10 inset-0">
              <div className="absolute top-24 right-0 w-full h-full p-4">
                <ul className="flex flex-col space-y-4">
                  <li>
                    <Link href={routes.initial} className="text-3xl">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href={routes.shop} className="text-3xl">
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
