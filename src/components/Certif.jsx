import React from "react";
import { motion } from "framer-motion";

// Example certifications data
const CERTIFICATIONS = [
    {
    title: "Frontend Engineer Internship Certification",
    issuer: "Revo LLC",
    year: "July 2025 - August 2025",
    file: "/certifications/revo.pdf",
    logo: "/logos/revo.jpeg",
  },
  {
    title: "Docker Certification",
    issuer: "RBK",
    year: "2024",
    file: "/certifications/docker.pdf",
    logo: "/logos/RBK.png",
  },
   {
    title: "AI Training Program",
    issuer: "Virtual University of Tunis",
    year: "2024 - 2025",
    file: "/certifications/ia.pdf",
    logo: "/logos/uvt.jpg",
  },
  {
    title: "CCNA1 Certification",
    issuer: "Cisco",
    year: "2023",
    file: "/certifications/ccna.pdf",
    logo: "/logos/Cisco.jpg", // path to the logo
  },
  
 
  
];

const Certifications = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h2>

      <div>
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="mb-8 flex flex-wrap lg:justify-center items-center"
          >
            {/* Year + Logo */}
            <div className="w-full lg:w-1/4 flex items-center mb-2 lg:mb-0">
              <img
                src={cert.logo}
                alt={`${cert.issuer} logo`}
                className="h-15 w-20 mr-3 object-contain"
              />
              <p className="text-sm text-stone-400">{cert.year}</p>
            </div>

            {/* Details */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {cert.title}{" "}
                <span className="text-sm text-stone-500">- {cert.issuer}</span>
              </h3>

              {/* Download button */}
              <a
                href={cert.file}
                download
                className="mb-4 inline-block rounded bg-stone-900 px-4 py-2 text-sm font-medium text-stone-300 hover:bg-stone-700 transition-colors  "
              >
                Download PDF
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
