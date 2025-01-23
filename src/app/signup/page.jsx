"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisable, setButtonDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/user/signup", user);
      console.log("Signup success", response.data);
      toast.success("Signup successful!");
      router.push("/login");
    } catch (error) {
      console.log("Signup failed", error);
      toast.error(
        error?.response?.data?.error || "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const { email, password, username } = user;
    setButtonDisable(!(email && password && username));
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-6">
        {loading ? "Processing..." : "Sign Up"}
      </h1>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline focus:border-gray-600 text-black"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline focus:border-gray-600 text-black"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Username"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline focus:border-gray-600 text-black"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />
      <button
        onClick={onSignup}
        className={`p-2 border border-gray-300 rounded-lg mb-4 ${
          buttonDisable || loading
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        disabled={buttonDisable || loading}
      >
        {buttonDisable ? "Fill All Fields" : loading ? "Signing Up..." : "Sign Up"}
      </button>
      <Link href="/login" className="text-blue-500 hover:underline">
        Already have an account? Login here
      </Link>
    </div>
  );
}
