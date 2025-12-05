"use client";

import "./globals.css";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../context/AuthContext";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function LayoutContent({ children }) {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user && <Navbar />}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {children}
      </main>
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <AuthProvider>
          <LayoutContent>{children}</LayoutContent>
        </AuthProvider>
      </body>
    </html>
  );
}
