"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#181A1C]">
      <div className="container mt-32 space-y-10 pb-10 pt-10 md:pt-20">
        <div className="flex flex-wrap justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="relative h-16 w-14">
              <Image
                src={"/logo.png"}
                alt="logo"
                fill
                priority
                sizes="(max-width: 768px) 48px, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <span className="text-sm text-white">IRCTC</span>
          </div>
          <ul className="flex items-center gap-3">
            <li className="flex size-10 items-center justify-center rounded-full border-2 border-slate-700">
              <Facebook fill="#fff" stroke="#fff" strokeWidth={0} size={20} />
            </li>
            <li className="flex size-10 items-center justify-center rounded-full border-2 border-slate-700">
              <Instagram fill="#fff" stroke="#000" size={20} />
            </li>
            <li className="flex size-10 items-center justify-center rounded-full border-2 border-slate-700">
              <Linkedin fill="#fff" stroke="#fff" strokeWidth={0} size={20} />
            </li>
            <li className="flex size-10 items-center justify-center rounded-full border-2 border-slate-700">
              <Twitter fill="#fff" stroke="#fff" strokeWidth={0} size={20} />
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-7">
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.2,
                duration: 0.3,
              },
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="space-y-5"
          >
            <span className="font-medium text-[#2475EE]">Company</span>
            <ul className="space-y-2 text-sm text-[#ADADAD]">
              <li>Updates</li>
              <li>Career</li>
              <li>Capabilities</li>
              <li>Products</li>
              <li>Contact us</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.25,
                duration: 0.3,
              },
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="space-y-5"
          >
            <span className="font-medium text-[#2475EE]">Company</span>
            <ul className="space-y-2 text-sm text-[#ADADAD]">
              <li>Updates</li>
              <li>Career</li>
              <li>Capabilities</li>
              <li>Products</li>
              <li>Capabilities</li>
              <li>Updates</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.3,
              },
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="space-y-5"
          >
            <span className="font-medium text-[#2475EE]">Company</span>
            <ul className="space-y-2 text-sm text-[#ADADAD]">
              <li>Updates</li>
              <li>Career</li>
              <li>Capabilities</li>
              <li>Products</li>
              <li>Career</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.35,
                duration: 0.3,
              },
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="space-y-5"
          >
            <span className="font-medium text-[#2475EE]">Company</span>
            <ul className="space-y-2 text-sm text-[#ADADAD]">
              <li>Updates</li>
              <li>Career</li>
              <li>Capabilities</li>
              <li>Products</li>
              <li>Career</li>
              <li>Contact us</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.4,
                duration: 0.3,
              },
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="space-y-5"
          >
            <span className="font-medium text-[#2475EE]">Company</span>
            <ul className="space-y-2 text-sm text-[#ADADAD]">
              <li>Updates</li>
              <li>Career</li>
              <li>Capabilities</li>
              <li>Products</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.45,
                duration: 0.3,
              },
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="space-y-5"
          >
            <span className="font-medium text-[#2475EE]">Company</span>
            <ul className="space-y-2 text-sm text-[#ADADAD]">
              <li>Updates</li>
              <li>Career</li>
              <li>Capabilities</li>
              <li>Products</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.3,
              },
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="space-y-5"
          >
            <span className="font-medium text-[#2475EE]">Company</span>
            <ul className="space-y-2 text-sm text-[#ADADAD]">
              <li>Updates</li>
              <li>Career</li>
              <li>Capabilities</li>
              <li>Products</li>
              <li>Career</li>
            </ul>
          </motion.div>
        </div>
        <hr />
        <div className="flex flex-wrap justify-between gap-2 text-[#ADADAD] md:gap-0">
          <h5>All rights reserved @{new Date().getFullYear()}, IRCTC</h5>
          <span>
            Developed by{" "}
            <Link
              href="https://prajilk.github.io"
              target="_blank"
              className="font-semibold text-[#2475EE] underline"
            >
              Prajil K
            </Link>
          </span>
          <span>Terms & Conditions | Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
