"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16 px-6">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-6 md:mb-0 max-w-xl text-center md:text-left">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-white to-white bg-clip-text text-transparent leading-tight">
            Ready to Elevate Your Construction Site?
          </h2>
          <p className="mt-4 text-lg">
            Contact us today for a free quote on scaffolding and cleaning
            services.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition"
          aria-label="Request a Quote"
        >
          Request a Quote
        </Link>
      </motion.div>
    </section>
  );
}
