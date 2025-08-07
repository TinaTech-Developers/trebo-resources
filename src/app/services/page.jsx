"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    id: "scaffold",
    title: "Scaffold Hiring",
    description:
      "Premium, safety-certified scaffolding solutions designed to suit projects of all sizes.",
    image: "Scaffolding.png",
  },
  {
    id: "cleaning",
    title: "Site Cleaning",
    description:
      "Comprehensive construction site cleaning to maintain safe, tidy working environments.",
    image: "post-construction-cleaning-services.jpg",
  },
  {
    id: "safety",
    title: "Health & Safety Compliance",
    description:
      "Ensure your site meets regulatory requirements with our expert safety support.",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "maintenance",
    title: "Site Maintenance",
    description:
      "Ongoing support to maintain safe, efficient working conditions throughout your project lifecycle.",
    image: "sitemantanance.jpg",
  },
  {
    id: "structures",
    title: "Temporary Structures",
    description:
      "Reliable temporary scaffold-based structures for events, roofing, and on-site requirements.",
    image: "temporary.jpg",
  },
  {
    id: "waste",
    title: "Waste Removal",
    description:
      "Fast and professional removal of construction debris and waste materials.",
    image: "Skip-full-of-construction-waste-bricks.webp",
  },
  // {
  //   id: "equipment",
  //   title: "Equipment Rental",
  //   description:
  //     "Hire high-quality construction equipment to support your on-site operations.",
  //   image:
  //     "https://images.unsplash.com/photo-1556012018-929360d6a822?auto=format&fit=crop&w=800&q=80",
  // },
];

export default function ServicesPage() {
  return (
    <main className="pt-28 ">
      {/* Top Hero */}
      <section className="text-center py-36 px-6 bg-gray-100 h-96">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent  inline-block"
        >
          Our Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-gray-700">
          Explore our full range of professional construction site solutions.
        </p>
      </section>

      <section className="py-20 px-6 flex gap-12 max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 sticky top-36 h-max">
          <h4 className="font-semibold mb-4">Services Navigation</h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <div className="flex-1 space-y-24">
          {services.map((service) => (
            <div key={service.id} id={service.id} className="scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row gap-10 items-center"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full md:w-1/2 h-72 object-cover rounded-lg shadow-lg"
                />
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent  inline-block">
                    {service.title}
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16 px-6 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-white">
          <div className="mb-6 md:mb-0 max-w-xl text-center md:text-left">
            <h2 className="text-4xl font-extrabold mb-4">
              Need a Custom Quote?
            </h2>
            <p>
              Talk to our team today and get tailored services for your
              construction project.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
