"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle submission
    setSubmitted(true);
  };

  return (
    <main className="flex flex-col items-center justify-center  pt-28 min-h-screen bg-gray-950">
      {/* Header */}
      <section className="h-72 bg-gray-100 flex flex-col w-full justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Contact Us
        </motion.h1>
        <p className="mt-4 max-w-3xl text-gray-700">
          Have questions? Want a custom quote? We're here to help!
        </p>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl  bg-white rounded-2xl shadow-xl my-10 md:my-20 flex flex-col md:flex-row overflow-hidden mx-4 md:mx-0"
      >
        {/* Left info panel */}
        <div className="md:w-1/2 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 text-white p-14 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold mb-6">Get in Touch</h2>
          <p className="mb-10 text-lg opacity-90">
            We’re here to answer your questions and help with your construction
            projects.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl" />
              <p>39 Aldergill Road Heelands, Milton Keynes MK13 7PT, UK</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-2xl" />
              <p>+263 77 123 4567</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl" />
              <p>info@trebo-resources.com</p>
            </div>
          </div>
        </div>

        {/* Right form panel */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 p-10 bg-white"
          noValidate
        >
          <div className="space-y-6">
            {[
              { label: "Full Name", name: "name", type: "text" },
              { label: "Email Address", name: "email", type: "email" },
              { label: "Subject", name: "subject", type: "text" },
            ].map(({ label, name, type }) => (
              <div key={name} className="relative">
                <input
                  type={type}
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full border-b-2 border-gray-300 focus:border-gradient-to-r focus:border-blue-500 focus:outline-none py-2 text-gray-800"
                />
                <label
                  htmlFor={name}
                  className="absolute left-0 -top-5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-blue-600 peer-focus:text-sm cursor-text"
                >
                  {label}
                </label>
              </div>
            ))}
            <div className="relative">
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 text-gray-800 resize-none"
              />
              <label
                htmlFor="message"
                className="absolute left-0 -top-5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-blue-600 peer-focus:text-sm cursor-text"
              >
                Message
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="mt-10 w-full py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
          {submitted && (
            <p className="mt-4 text-green-600 text-center font-semibold">
              Thank you for reaching out. We'll be in touch soon!
            </p>
          )}
        </form>
      </motion.div>
    </main>
  );
}
