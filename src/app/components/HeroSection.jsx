"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const floatingShapes = [
  { size: 80, left: "10%", top: "20%", delay: 0 },
  { size: 120, left: "70%", top: "10%", delay: 1 },
  { size: 60, left: "50%", top: "75%", delay: 2 },
];

// Background images + corresponding text sets
const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1920&q=80",
    headline: "Scaffold Hiring & Construction Site Cleaning",
    subtitle:
      "Safe, reliable, and professional services tailored to your construction needs.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80",
    headline: "Quality Scaffold Rentals For Every Project",
    subtitle:
      "Flexible, affordable scaffold hire solutions for all construction sites.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1920&q=80",
    headline: "Expert Site Cleaning Services You Can Trust",
    subtitle:
      "Keep your site safe and tidy with our professional cleaning teams.",
  },
];

export default function HeroSection() {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate SVG icon continuously
  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: { repeat: Infinity, duration: 30, ease: "linear" },
    });
  }, [controls]);

  // Cycle slides every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-6 text-center">
      {/* Background images carousel */}
      <div className="absolute inset-0 -z-20">
        {slides.map(({ image }, i) => (
          <motion.img
            key={i}
            src={image}
            alt={`Background ${i + 1}`}
            className="w-full h-full object-cover absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === currentIndex ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
        ))}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/80 to-black/90" />
      </div>

      {/* Floating animated shapes */}
      {floatingShapes.map(({ size, left, top, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{
            delay,
            duration: 2,
            yoyo: Infinity,
            yoyoEase: "easeInOut",
          }}
          className="absolute rounded-full bg-blue-600 blur-xl "
          style={{ width: size, height: size, left, top }}
        />
      ))}

      {/* Rotating scaffold SVG icon */}
      <motion.div
        animate={controls}
        className="mb-8"
        style={{ width: 120, height: 120 }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full stroke-blue-400"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="12" y="12" width="40" height="40" rx="2" ry="2" />
          <line x1="12" y1="12" x2="52" y2="52" />
          <line x1="52" y1="12" x2="12" y2="52" />
          <line x1="32" y1="12" x2="32" y2="52" />
          <line x1="12" y1="32" x2="52" y2="32" />
        </svg>
      </motion.div>

      {/* Text content (fade & slide animation synced with slides) */}
      {slides.map(({ headline, subtitle }, i) =>
        i === currentIndex ? (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              {headline}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        ) : null
      )}

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-10 flex flex-col sm:flex-row gap-6 justify-center"
      >
        <Link
          href="/contact"
          className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow-lg"
        >
          Get a Quote
        </Link>
        <Link
          href="/services"
          className="px-8 py-4 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition font-semibold shadow-lg"
        >
          Our Services
        </Link>
      </motion.div>
    </section>
  );
}
