"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple front-end validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    setStatus(null);

    // TODO: handle API call to send form data

    setStatus({
      type: "success",
      message: "Thank you! We will get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact Us
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (optional)"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message *"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {status && (
            <p
              className={`mt-4 text-center ${
                status.type === "error" ? "text-red-600" : "text-green-600"
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            className="mt-8 w-full bg-blue-600 text-white font-semibold py-4 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
