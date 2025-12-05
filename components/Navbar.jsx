"use client";

import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="w-full bg-white shadow-sm p-4 flex justify-between items-center">
      
      <div className="flex flex-col leading-tight">
        
        <Link href="/" className="text-2xl font-bold text-orange-500 tracking-tight">
          Zesty
        </Link>

        <span className="text-xs text-gray-500 italic">
          Skip the Wait, Start the Plate
        </span>

      </div>

      <div className="flex items-center gap-6">
        <Link className="hover:text-orange-500" href="/">Home</Link>
        <Link className="hover:text-orange-500" href="/menu">Menu</Link>

        {user ? (
          <button
            onClick={logout}
            className="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          >
            Login
          </Link>
        )}
      </div>

    </nav>
  );
}
