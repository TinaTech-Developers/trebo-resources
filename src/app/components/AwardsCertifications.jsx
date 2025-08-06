"use client";
import { motion } from "framer-motion";
import { FaAward, FaCertificate, FaMedal, FaTrophy } from "react-icons/fa";

const awards = [
  {
    icon: <FaAward size={36} className="text-blue-600" />,
    title: "Best Safety Practice 2023",
    description:
      "Awarded for outstanding commitment to construction safety standards.",
  },
  {
    icon: <FaCertificate size={36} className="text-blue-600" />,
    title: "Certified Scaffold Installer",
    description:
      "Our team is fully certified by the National Scaffold Association.",
  },
  {
    icon: <FaMedal size={36} className="text-blue-600" />,
    title: "Quality Excellence Award",
    description: "Recognized for delivering top quality services consistently.",
  },
  {
    icon: <FaTrophy size={36} className="text-blue-600" />,
    title: "Industry Leadership 2024",
    description:
      "Honored for leading innovations in scaffold hiring and site cleaning.",
  },
];

export default function AwardsCertifications() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-14 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight inline-block"
        >
          Awards & Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {awards.map(({ icon, title, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
            >
              <div className="mb-6">{icon}</div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight inline-block">
                {title}
              </h3>
              <p className="text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
