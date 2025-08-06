"use client";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Link from "next/link";

export default function ContactInfoSection() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-14"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-gray-700"
          >
            <FiPhone size={40} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-lg">+263 77 123 4567</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-gray-700"
          >
            <FiMail size={40} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-lg">info@yourcompany.co.zw</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-gray-700"
          >
            <FiMapPin size={40} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-lg max-w-xs">
              123 Main Street, Harare, Zimbabwe
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12"
        >
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Request a Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
