"use client";
import { motion } from "framer-motion";

export default function AboutUsPage() {
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
          About Us
        </motion.h1>
        <p className="mt-4 max-w-3xl text-gray-700">
          With a passion for quality, safety, and innovation, we deliver
          exceptional services tailored to meet the needs of every client. Our
          company has grown into a trusted name in the industry.
        </p>
      </section>

      {/* Who We Are */}
      <section className="grid md:grid-cols-2 gap-14 items-center mb-28 md:mt-36 px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent  inline-block">
            Who We Are
          </h2>
          <p className=" leading-loose text-gray-200">
            We are a UK-based construction and services company with a focus on
            excellence. From scaffolding and site safety to professional
            cleaning and facility management, we combine expertise with
            dedication to client satisfaction.
          </p>
        </motion.div>
        <motion.img
          src="/logo.png"
          alt="About us"
          className="rounded-2xl w-full shadow-xl h-96 object-contain p-4 bg-gray-200"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-10 mb-28 px-4 md:px-10">
        <div className="bg-white p-8 shadow-lg rounded-xl border-t-4 border-blue-500">
          <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent  inline-block">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To deliver top-tier services that exceed expectations in quality,
            safety, and professionalism — while fostering strong relationships
            with our clients and partners.
          </p>
        </div>
        <div className="bg-white p-8 shadow-lg rounded-xl border-t-4 border-purple-500">
          <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent  inline-block">
            Our Vision
          </h3>
          <p className="text-gray-600">
            To be a leading service provider in UK and beyond — known for
            integrity, innovation, and impact in every project we touch.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-28 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent  inline-block">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            [
              "Integrity",
              "We uphold the highest standards in everything we do.",
            ],
            ["Excellence", "We aim to deliver quality, every time."],
            ["Safety", "We prioritize the safety of our teams and clients."],
            ["Innovation", "We embrace smart, efficient solutions."],
            ["Respect", "We value our clients, teams, and communities."],
            [
              "Sustainability",
              "We operate with care for people and the planet.",
            ],
          ].map(([title, desc], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {title}
              </h4>
              <p className="text-gray-600 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Optional Team Section */}
      {/* Add if needed */}

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16 px-8  text-center w-full shadow-xl mb-20"
      >
        <h3 className="text-3xl font-bold mb-4">Ready to Work With Us?</h3>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Whether you're planning a large-scale project or need reliable service
          support, we’re here to make it happen. Let’s build something great
          together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition"
        >
          Contact Us Today
        </a>
      </motion.section>
    </main>
  );
}
