"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const allProjects = [
  {
    id: 1,
    category: "Scaffolding",
    title: "City Center Scaffolding",
    description: "Multi-story scaffold solution in urban CBD.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    slug: "city-center-scaffolding",
  },
  {
    id: 2,
    category: "Cleaning",
    title: "Residential Site Cleaning",
    description: "Post-build cleanup for high-end duplex property.",
    image:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=80",
    slug: "residential-cleaning",
  },
  {
    id: 3,
    category: "Scaffolding",
    title: "Bridge Maintenance Scaffold",
    description: "Temporary access scaffolding over water.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    slug: "bridge-scaffold",
  },
  {
    id: 4,
    category: "Cleaning",
    title: "Industrial Plant Cleaning",
    description: "Deep cleaning service for large industrial plant.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    slug: "industrial-plant-cleaning",
  },
  {
    id: 5,
    category: "Other",
    title: "High-Rise Scaffold Rental",
    description: "Custom scaffold for 18-story building project.",
    image:
      "https://images.unsplash.com/photo-1534119414535-6b2a81e0f031?auto=format&fit=crop&w=800&q=80",
    slug: "highrise-scaffold",
  },
  {
    id: 6,
    category: "Other",
    title: "Construction Debris Removal",
    description: "Full-site waste clearing after demolition.",
    image:
      "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=800&q=80",
    slug: "debris-removal",
  },
];

const categories = ["All", "Scaffolding", "Cleaning", "Other"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <main className="pt-28 min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="h-72 bg-gray-100 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Our Projects
        </motion.h1>
        <p className="mt-4 max-w-3xl text-gray-700">
          Browse through our scaffolding and cleaning projects.
        </p>
      </section>

      {/* Main content with sidebar + projects */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex gap-12">
        {/* Sidebar */}
        <aside className="hidden lg:block w-48 sticky top-32 h-max bg-black p-6 rounded-lg shadow-md">
          <h4 className="font-semibold text-gray-200 mb-6 text-lg">
            Categories
          </h4>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className={`w-full text-left px-4 py-2 rounded-lg font-medium transition
                    ${
                      selectedCategory === cat
                        ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Projects Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                layout
                transition={{ duration: 0.3 }}
                className="bg-black rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 flex-grow">
                    {project.description}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-4 inline-block text-sm bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition text-center"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16 px-6 mt-12 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 max-w-xl text-center md:text-left">
            <h2 className="text-4xl font-extrabold mb-3">
              Ready to Start Your Project?
            </h2>
            <p>Contact us today and let’s build something amazing together.</p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
