"use client";

import Image from "next/image";
import { Sidebar } from "./sidebar";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="fixed z-10 w-full text-white backdrop-blur-sm">
      <motion.nav
        initial={{
          y: -65,
        }}
        whileInView={{
          y: 0,
          transition: {
            delay: 0.2,
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
        className="container flex w-full items-center justify-between py-5"
      >
        <div className="relative h-12 w-10">
          <Image
            src="/logo.png"
            alt=""
            fill
            priority
            className="h-auto w-auto"
            sizes="(max-width: 768px) 48px, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* Menu for small devices */}

        <Sidebar />

        {/* Menu for large devices */}
        <ul className="hidden gap-10 lg:flex">
          <li className="cursor-pointer hover:text-[#2475EE]">Train</li>
          <li className="cursor-pointer hover:text-[#2475EE]">Food</li>
          <li className="cursor-pointer hover:text-[#2475EE]">Ask Disha</li>
          <li className="cursor-pointer hover:text-[#2475EE]">Rooms</li>
          <li className="cursor-pointer hover:text-[#2475EE]">
            Other Services
          </li>
          <li className="cursor-pointer hover:text-[#2475EE]">Contact us</li>
          <li className="cursor-pointer hover:text-[#2475EE]">More</li>
        </ul>
        <div className="hidden gap-4 lg:flex">
          <button>Register</button>
          <Button className="bg-[#2475EE] hover:bg-[#2475EE]/70">Login</Button>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
