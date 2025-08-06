"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[200] px-2 w-[95%] md:w-[90%]"
      >
        <div className="bg-gradient-to-r from-white/80 to-black/50 backdrop-blur-lg rounded-full flex items-center justify-between px-6 md:px-10 py-3 shadow-lg">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
          </Link>

          <div className="hidden md:flex gap-10 text-white font-medium">
            {["Home", "Services", "Projects", "About", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition"
                >
                  {item}
                </Link>
              )
            )}
          </div>

          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[150] flex flex-col items-center justify-center space-y-8 text-xl text-white"
          >
            {["Home", "Services", "Projects", "About", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  className="hover:text-blue-400 transition"
                >
                  {item}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
