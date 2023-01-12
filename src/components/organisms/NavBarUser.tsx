import React, { useState } from "react";
import Image from "next/image";
import burger from "./../../assets/burger.svg";
import burgerCancel from "./../../assets/burger-cancel.svg";
import home from "./../../assets/home.svg";
import Link from "next/link";

type Props = {};

function NavBarUser({}: Props) {
  const [isSideBarVisible, setIsSidebarVisible] = useState(false);

  return (
    <div className="w-screen h-[10%] fixed top-0 flex items-center justify-between p-5 text-xl bg-[#43BF9C]">
      {isSideBarVisible ? (
        <Image
          className="flex text-4xl text-black items-center cursor-pointer z-50"
          src={burgerCancel}
          alt="car-burger-cancel"
          width={55}
          height={55}
          onClick={() => setIsSidebarVisible(!isSideBarVisible)}
        />
      ) : (
        <Image
          src={burger}
          alt="car-burger"
          width={50}
          height={50}
          onClick={() => setIsSidebarVisible(!isSideBarVisible)}
        />
      )}
      <div
        className={`ease-in-out duration-300
         top-[10%] left-0 w-[40vw] bg-[#43BF9C]  p-10 pl-20 text-black fixed h-full z-40 ${
           isSideBarVisible ? "translate-x-0 " : "translate-x-[-100%]"
         }`}>
        {isSideBarVisible && (
          <div className="bg-[#43BF9C] w-[40vw] h-[100%] fixed top-[10%] left-0 z-10 flex flex-col duration-300">
            <Link
              className="px-[1em] py-[1em]"
              onClick={() => setIsSidebarVisible(!isSideBarVisible)}
              href="/">
              Home
            </Link>
            <Link
              className="px-[1em] py-[1em]"
              onClick={() => setIsSidebarVisible(!isSideBarVisible)}
              href="/cars">
              Cars
            </Link>
            <Link
              className="px-[1em] py-[1em]"
              onClick={() => setIsSidebarVisible(!isSideBarVisible)}
              href="/cars/new-car">
              New car
            </Link>
            <Link
              className="px-[1em] py-[1em]"
              onClick={() => setIsSidebarVisible(!isSideBarVisible)}
              href="/availability">
              Availability
            </Link>
          </div>
        )}
      </div>
      <Image src={home} alt="car-home" width={50} height={50} />
    </div>
  );
}

export default NavBarUser;
