"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const awards = [
  {
    title: "Golden Star Award",
    year: "2023",
    description: "Penghargaan untuk kinerja keuangan dan pelayanan terbaik.",
    icon: "⭐",
  },
  {
    title: "Top 100 BPR Nasional",
    year: "2022",
    description: "Masuk dalam jajaran 100 BPR terbaik se-Indonesia.",
    icon: "🏆",
  },
  {
    title: "Penghargaan Infobank",
    year: "2023",
    description: "Predikat Kinerja Keuangan Sangat Bagus dari Majalah Infobank.",
    icon: "🎖️",
  },
  {
    title: "Banking Excellence",
    year: "2021",
    description: "Penghargaan keunggulan layanan perbankan tingkat regional.",
    icon: "🌟",
  },
];

export default function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="penghargaan" className="py-20 lg:py-28 bg-gradient-to-b from-dark-900 to-dark-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-primary-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-[200px] h-[200px] bg-gold-400 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Penghargaan & Prestasi
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Pengakuan atas Dedikasi Kami
          </h2>
          <p className="text-dark-300 text-lg">
            Berbagai penghargaan yang kami terima sebagai bukti komitmen dalam
            memberikan layanan perbankan terbaik.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-gold-400/30 transition-all duration-300 h-full">
                {/* Gold accent top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-gold-400 to-gold-500 rounded-b-full z-10" />

                {/* Award image */}
                <div className="h-40 overflow-hidden">
                  <img
                    src="/piagam-award.jpg"
                    alt={award.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 text-center">
                  <span className="inline-block text-gold-400 text-xs font-semibold bg-gold-400/10 px-3 py-1 rounded-full mb-3">
                    {award.year}
                  </span>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {award.title}
                  </h3>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
