"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Reliable Service",
  "Certified Safety Standards",
  "Experienced Team",
  "Competitive Pricing",
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2"
        >
          <img
            src="/whyus1.jpg"
            alt="Construction workers"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight inline-block">
            Why Choose Us
          </h2>
          <p className="text-gray-200 mb-8 leading-relaxed">
            We pride ourselves on offering professional, reliable, and
            affordable scaffolding and cleaning services to the construction
            industry.
          </p>

          {/* Feature list */}
          <ul className="space-y-4">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-lg">
                <span className="text-blue-600 mt-1">
                  <FaCheckCircle size={22} />
                </span>
                <span className="text-gray-400">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
