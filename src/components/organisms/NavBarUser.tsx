import React, { useState } from "react";
import Image from "next/image";
import burger from "./../../assets/burger.svg";
import burgerCancel from "./../../assets/burger-cancel.svg";
import home from "./../../assets/home.svg";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

function NavBarUser({}: Props) {
  const [isSideBarVisible, setIsSidebarVisible] = useState(false);
  const router = useRouter();

  return (
    <div className="w-screen h-[10%] sticky top-0 flex items-center justify-between px-5 text-xl bg-[#43BF9C] z-10">
      {isSideBarVisible ? (
        <Image
          className="flex text-4xl text-black items-center cursor-pointer z-10"
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

        fixed top-[10%] h-[75%] left-0 w-[45vw] rounded-br-full bg-[#43BF9C] p-10  text-black z-10 ${
          isSideBarVisible ? "translate-x-0 " : "translate-x-[-100%]"
        }`}>
        {isSideBarVisible && (
          <div className="bg-[#43BF9C] w-[45vw] h-[100%] fixed rounded-br-full left-0 z-10 flex flex-col duration-300 ">
            <Link
              className="px-[1em] py-[1em] uppercase font-extrabold"
              onClick={() => setIsSidebarVisible(!isSideBarVisible)}
              href="/">
              Home
            </Link>
            <Link
              className="px-[1em] py-[1em] uppercase font-extrabold"
              onClick={() => setIsSidebarVisible(!isSideBarVisible)}
              href="/calendar/my-reservations">
              My Reservations
            </Link>
            <Link
              className="px-[1em] py-[1em] uppercase font-extrabold"
              onClick={() => setIsSidebarVisible(!isSideBarVisible)}
              href="/cars">
              Cars
            </Link>
            <Link
              className="px-[1em] py-[1em] uppercase font-extrabold"
              onClick={() => setIsSidebarVisible(!isSideBarVisible)}
              href="/cars/new-car">
              New car
            </Link>
            <Link
              className="px-[1em] py-[1em] uppercase font-extrabold"
              onClick={() => setIsSidebarVisible(!isSideBarVisible)}
              href="/availability">
              Availability
            </Link>
          </div>
        )}
      </div>
      <h1 className="uppercase font-extrabold">Carvolution</h1>
      <Image
        src={home}
        alt="car-home"
        width={50}
        height={50}
        onClick={() => router.push("/signin")}
      />
    </div>
  );
}

export default NavBarUser;
