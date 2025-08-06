"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Scaffold Hiring",
    description:
      "Premium, safety-certified scaffolding solutions designed to suit projects of all sizes.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Site Cleaning Services",
    description:
      "Comprehensive construction site cleaning to maintain safe, tidy working environments.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Health & Safety Compliance",
    description:
      "Ensure your site meets regulatory requirements with our expert safety support.",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=80",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="flex flex-col max-w-7xl mx-auto items-center justify-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl text-center font-bold  mb-14 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight inline-block"
        >
          Our Services
        </motion.h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="w-full h-28 mb-6 rounded-lg overflow-hidden shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight inline-block">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
