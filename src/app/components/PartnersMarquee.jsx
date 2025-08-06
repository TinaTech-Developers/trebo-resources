"use client";
import { motion } from "framer-motion";

const partners = [
  { name: "BuildCorp", logo: "/partners/buildcorp.png" },
  { name: "ConstructX", logo: "/partners/constructx.png" },
  { name: "SafeScaffold", logo: "/partners/safescaffold.png" },
  { name: "CleanSite", logo: "/partners/cleansite.png" },
  { name: "ProBuild", logo: "/partners/probuild.png" },
  { name: "SiteMasters", logo: "/partners/sitemasters.png" },
];

// Duplicate logos array to create continuous scroll effect
const marqueePartners = [...partners, ...partners];

export default function PartnersMarquee() {
  return (
    <section className="bg-gray-900 py-10">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto overflow-hidden relative">
        <h2 className=" text-3xl  font-bold mb-6  bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight inline-block">
          Our Trusted Partners
        </h2>

        <div
          className="flex animate-marquee gap-12 whitespace-nowrap"
          onMouseEnter={(e) =>
            (e.currentTarget.style.animationPlayState = "paused")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.animationPlayState = "running")
          }
          style={{ willChange: "transform" }}
        >
          {marqueePartners.map(({ name, logo }, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-6"
              style={{ minWidth: "150px" }}
            >
              <img
                src={logo}
                alt={name}
                className="max-h-16 object-contain filter brightness-90 hover:brightness-100 transition"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
