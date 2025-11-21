"use client";

import Link from "next/link";
import { isDemoMode } from "@/helpers/utils/utils";
import { useRouter } from "next/navigation";
import ApiService from "@/helpers/api/Index";
import { useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  role?: string;
};

type HeaderProps = {
  user?: User | null;
};

const Header = ({ user }: HeaderProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const Logout = async () => {
    try {
      if (isDemoMode()) {
        router.push("/");
        return;
      }
      await ApiService.Logout();
      router.push("/");
    } catch {
      router.push("/");
    }
  };

  const username =
    user?.email?.split("@")[0] ?? (isDemoMode() ? "DemoUser" : "User");

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] px-4 md:px-8 py-4 md:py-6 flex justify-between items-center bg-transparent">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/40 text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-white text-lg font-medium">
          <Link href="/dashboard" className="hover:text-pink-300 transition">
            Home
          </Link>
          <Link href="/contact" className="hover:text-pink-300 transition">
            Contact
          </Link>
          <Link href="/about" className="hover:text-pink-300 transition">
            About
          </Link>
        </nav>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 md:gap-6">
        <span className="hidden md:block text-white/80">Hi, {username}</span>

        <button
          onClick={Logout}
          className="px-4 md:px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full hover:bg-white/30 transition"
        >
          Logout
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md py-4 px-6 flex flex-col gap-4 text-white text-lg md:hidden">
          <Link
            href="/dashboard"
            onClick={() => setOpen(false)}
            className="hover:text-pink-300"
          >
            Home
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="hover:text-pink-300"
          >
            Contact
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="hover:text-pink-300"
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
