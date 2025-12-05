"use client";

import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const validEmail = "admin@gmail.com";
    const validPass = "12345";
    const userName = "James";

    if (email === validEmail && password === validPass) {
      login({ name: userName, email });
      router.push("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <form
        onSubmit={handleLogin}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border border-orange-200 space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-orange-600">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 text-sm">Login to continue</p>

        {error && (
          <p className="text-red-500 bg-red-100 p-2 rounded text-center text-sm">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-orange-200 focus:ring-2 focus:ring-orange-400 rounded-lg outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-orange-200 focus:ring-2 focus:ring-orange-400 rounded-lg outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg font-medium transition"
        >
          Login
        </button>

        <p className="text-center text-gray-500 text-sm hover:text-orange-500 cursor-pointer transition">
          Forgot Password?
        </p>
      </form>
    </div>
  );
}
