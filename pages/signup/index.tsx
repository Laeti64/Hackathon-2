import { User } from "@prisma/client";
import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function Signup() {
  const [newUser, setNewUser] = useState<Partial<User>>({
    firstname: "",
    lastname: "",
    email: "",
    birthday: "",
    adresse: "",
    BP: "",
    noPermis: "",
    password: "",
  });
  const router = useRouter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.post("/api/auth/signup", newUser);
    router.push("/signin");
  };

  return (
    <div className=" fixed top-[10%] w-full h-full  bg-gradient-to-b from-emerald-50 to-slate-50">
      <form className="flex flex-col w-full m-auto align-middle mt-10">
        <h1 className="from-neutral-500 font-serif ml-12 mb-5">
          Your personal informations
        </h1>
        <input
          onChange={(e) => handleChange(e)}
          value={newUser.firstname}
          className="form"
          type="text"
          name="firstname"
          placeholder="Firstname"
        />
        <input
          onChange={(e) => handleChange(e)}
          className="form"
          type="text"
          name="lastname"
          placeholder="Lastname"
        />
        <input
          onChange={(e) => setNewUser({ ...newUser, birthday: e.target.value })}
          className="form"
          type="date"
          name="birthday"
        />
        <input
          onChange={(e) => handleChange(e)}
          className="form"
          type="text"
          name="adresse"
          placeholder="Address"
        />
        <input
          onChange={(e) => handleChange(e)}
          className="form"
          type="text"
          name="BP"
          placeholder="Postal code"
        />
        <input
          onChange={(e) => handleChange(e)}
          className="form"
          type="text"
          name="town"
          placeholder="Town"
        />
        <input
          onChange={(e) => handleChange(e)}
          className="form"
          type="text"
          name="noPermis"
          placeholder="Driver license number"
        />
        <h1 className="from-neutral-500 font-serif ml-12 mt-5 mb-5">
          Your credentials
        </h1>
        <input
          onChange={(e) => handleChange(e)}
          className="form"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => handleChange(e)}
          className="form"
          type="password"
          name="password"
          placeholder="Password"
        />

        <button
          type="button"
          onClick={handleSubmit}

          className="border border-gray-500 flex w-40 h-8 m-auto mt-3 p-2   bg-gradient-to-r from-[#43BF9C] via-green-300 to-[#43BF9C] rounded-md justify-center">

          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
