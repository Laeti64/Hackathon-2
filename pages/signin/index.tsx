import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../../src/context/UserContext";

export default function Signin() {
  const { signIn } = useAuth();
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const router = useRouter();
  const handleSubmit = () => {
    signIn(credentials);
    router.push("/");
  };
  return (
    <div className="flex mt-20 items-center  flex-col text-primary_font h-full  w-full bg-emerald-50">
      <div>
        <h1 className="flex justify-center mb-2 text-2xl">Login</h1>
      </div>
      <form className="flex space-y-5 flex-col justify-center">
        <div>
          <input
            className="form"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email..."
            autoComplete="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input
            className="form"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password..."
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <h6 className="flex justify-center text-xs">
            Need an account ?
            <ul>
              <li>
                <Link href="/signup">SIGN UP</Link>
              </li>
            </ul>
          </h6>
        </div>
      </form>
      <div>
        <button
          className="border border-gray-500 flex w-40 h-8 m-auto my-2   bg-gradient-to-r from-[#43BF9C] via-green-300 to-[#43BF9C] rounded-md justify-center"
          type="submit"
          onClick={handleSubmit}
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
}
