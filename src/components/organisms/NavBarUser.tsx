import React from "react";
import Image from "next/image";
import burger from "./../../assets/burger.svg";
import home from "./../../assets/home.svg";

type Props = {};

function NavBarUser({}: Props) {
  return (
    <div className="w-screen h-[10%] flex items-center justify-between p-5 text-xl bg-slate-50">
      <Image src={burger} alt="car-home" width={50} height={50} />
      <Image src={home} alt="car-home" width={50} height={50} />
    </div>
  );
}

export default NavBarUser;
