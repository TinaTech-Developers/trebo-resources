"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const floatingShapes = [
  { size: 80, left: "10%", top: "20%", delay: 0 },
  { size: 120, left: "70%", top: "10%", delay: 1 },
  { size: 60, left: "50%", top: "75%", delay: 2 },
];

const slides = [
  {
    image:
      "working-construction-harare-construction-worker-working-building-harare-cbd-zimbabwe-156635588.webp",
    headline: "Scaffold Hiring & Construction Site Cleaning",
    subtitle:
      "Safe, reliable, and professional services tailored to your construction needs.",
  },
  {
    image: "scaffold-closeup.jpg",
    headline: "Quality Scaffold Rentals For Every Project",
    subtitle:
      "Flexible, affordable scaffold hire solutions for all construction sites.",
  },
  {
    image: "post-construction-cleaning-services.jpg",
    headline: "Expert Site Cleaning Services You Can Trust",
    subtitle:
      "Keep your site safe and tidy with our professional cleaning teams.",
  },
];

export default function HeroSection() {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: { repeat: Infinity, duration: 30, ease: "linear" },
    });
  }, [controls]);

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
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/80 to-black/90" />
      </div>

      {/* Floating shapes */}
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

      {/* Rotating logo icon with flashing light */}
      <div className="relative my-10" style={{ width: 80, height: 80 }}>
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-300 blur-2xl "
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          animate={controls}
          className="relative z-10"
          style={{ width: 80, height: 80 }}
          aria-hidden="true"
        >
          <img
            src="/logo.png"
            alt="Company Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      {/* Slide text */}
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

      {/* CTA buttons */}
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
