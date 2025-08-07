"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 pt-16 px-">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Centered Logo & Tagline */}
        <div className="md:w-1/4 flex flex-col items-center md:items-start space-y-6">
          <h3 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent select-none cursor-default">
            Trebo Resources
          </h3>
          <p className="text-gray-400 text-center md:text-left">
            Delivering reliable scaffolding and site cleaning solutions with
            excellence.
          </p>
          <div className="flex space-x-6 text-gray-400">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-purple-500 transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-pink-500 transition"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="md:w-1/4 grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="hover:text-gradient transition"
                >
                  Scaffold Hiring
                </Link>
              </li>
              <li>
                <Link
                  href="/services#cleaning"
                  className="hover:text-gradient transition"
                >
                  Site Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services#safety"
                  className="hover:text-gradient transition"
                >
                  Health & Safety
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-gradient transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gradient transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gradient transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-gradient transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gradient transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/4">
          <h4 className="text-xl font-semibold mb-5">Contact</h4>
          <p>
            Phone:{" "}
            <a href="tel:+263771234567" className="hover:text-blue-400">
              +263 77 123 4567
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@yourcompany.co.zw"
              className="hover:text-blue-400"
            >
              info@trebo-resources.com
            </a>
          </p>
          <p className="mt-4">
            39 Aldergill Road Heelands, Milton Keynes MK13 7PT, UK
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center h-14 mt-16 mb-0 w-full bg-blue-950">
        <p className="text-center text-green-100 text-sm mt-8">
          Developed by
          <a
            className="text-sm font-semibold justify-center ml-1"
            href="https://www.tinasoftnexus.co.zw"
            target="_blank"
            rel="noopener noreferrer"
          >
            TinaSoft Nexus
          </a>
        </p>
      </div>

      <style jsx>{`
        .hover\\:text-gradient:hover {
          background-image: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </footer>
  );
}
