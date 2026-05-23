"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Simpanan",
    description:
      "Solusi simpanan dengan suku bunga tinggi, memberikan peluang lebih besar untuk impian masa depan Anda dan keluarga.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    link: "#produk",
  },
  {
    title: "Pinjaman",
    description:
      "Solusi pinjaman cepat dengan jaminan fleksibel. Proses cepat dan mudah untuk kebutuhan finansial Anda.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    link: "#produk",
  },
  {
    title: "Layanan Lainnya",
    description:
      "Nikmati kemudahan layanan perbankan kami yang dirancang untuk kenyamanan dan kebutuhan nasabah.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    link: "#kontak",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-4">
            Layanan <span className="text-primary-700">Bank Pundhi Arta</span>
          </h2>
          <p className="text-dark-500 text-lg">
            Berbagai produk finansial yang dirancang sesuai dengan kebutuhan Anda.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.a
              key={i}
              href={service.link}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-white border border-dark-100 rounded-2xl p-8 hover:shadow-xl hover:border-primary-200 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-primary-50 group-hover:bg-primary-100 rounded-2xl flex items-center justify-center text-primary-700 mx-auto mb-5 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-dark-900 font-bold text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-dark-500 leading-relaxed mb-5">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1 text-primary-700 font-semibold text-sm group-hover:gap-2 transition-all">
                Selengkapnya
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
