"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const logingIn=()=>{

  }

  return (
    <div className=" flex flex-col gap-8 text-center items-center  align-middle min-h-screen justify-center ">
      <h1>Login</h1>
      <div className="flex flex-col text-left  gap-3">
        <label htmlFor="email">Email</label>
        <input
          className="p-2 outline-none rounded-lg text-black focus:border-gray-200"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          className="p-2 outline-none rounded-lg text-black focus:border-gray-200"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button onClick={logingIn} className="p-2 m-3 bg-gray-500 border-1 focus:outline-none focus:border-blue rounded-lg">Submit Sign Up</button>
        <Link href='/signup' className="text-center font-light text-xm">Sign Up here</Link>
      </div>
    </div>
  );
}
