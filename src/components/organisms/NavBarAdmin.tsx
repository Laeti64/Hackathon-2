import React from "react";
import Link from "next/link";
type Props = {};

function NavBarAdmin({}: Props) {
  return (
    <div className="w-screen h-[10%] flex items-center p-5 text-xl bg-slate-50">
      <ul className="w-[60%] justify-around flex ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cars">Cars</Link>
        </li>
        <li>
          <Link href="/cars/new-car">New car</Link>
        </li>
        <li>
          <Link href="/availability">Availability</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBarAdmin;
