"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "John Smith",
    position: "Project Manager",
    company: "BuildCo",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "The scaffolding services were excellent—safe, reliable, and the team was very professional.",
  },
  {
    name: "Sara Lee",
    position: "Site Supervisor",
    company: "ConstructPro",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "Their cleaning services kept our site spotless and safe. Highly recommended!",
  },
  {
    name: "Michael Brown",
    position: "Engineer",
    company: "Skyline Projects",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
    message:
      "Professional, affordable, and efficient. Exactly what every construction site needs.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-14 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight inline-block">
          What Our Clients Say
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 mx-4"
            >
              <p className="text-gray-700 italic mb-6">
                &quot;{testimonials[index].message}&quot;
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[index].photo}
                  alt={testimonials[index].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-600"
                />
                <div className="text-left">
                  <p className="font-semibold text-lg">
                    {testimonials[index].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[index].position} -{" "}
                    {testimonials[index].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            aria-label="Previous Testimonial"
            className="flex items-center justify-center absolute top-1/2 left-0 -translate-y-1/2 w-10  bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
          >
            &#8592;
          </button>
          <button
            onClick={nextTestimonial}
            aria-label="Next Testimonial"
            className="flex items-center justify-center w-10 absolute top-1/2 right-0 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
