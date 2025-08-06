"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    // TODO: Add API call to subscribe user here

    setStatus({ type: "success", message: "Thanks for subscribing!" });
    setEmail("");
  };

  return (
    <section className="bg-gray-100 py-16 px-6">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Stay Updated
        </h2>
        <p className="text-gray-700 mb-8">
          Subscribe to our newsletter for latest updates and offers.
        </p>

        <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow rounded-l-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 rounded-r-md font-semibold hover:brightness-110 transition"
          >
            Subscribe
          </button>
        </form>

        {status && (
          <p
            className={`mt-4 ${
              status.type === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </motion.div>
    </section>
  );
}
