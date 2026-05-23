"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tentang" className="py-20 lg:py-28 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              {/* Bank photo */}
              <img
                src="/snapedit_1695269576300-removebg-preview-1.png"
                alt="Gedung PT BPR Pundhi Arta Indonesia"
                className="w-full h-[400px] lg:h-[480px] object-contain"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block text-primary-700 font-semibold text-sm uppercase tracking-wider mb-3">
              Tentang Kami
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-6">
              PT. BPR Pundhi Arta Indonesia
            </h2>
            <p className="text-dark-600 leading-relaxed mb-6">
              Bank Pundhi Arta Indonesia adalah lembaga keuangan mikro berbentuk BPR
              yang fokus pada pemberdayaan Usaha Mikro, Kecil, dan Menengah (UMKM)
              di wilayah Ngawi, Magetan, dan Madiun, Jawa Timur.
            </p>
            <p className="text-dark-600 leading-relaxed mb-8">
              Dengan visi dan misi yang telah dirumuskan, kami berkomitmen memberikan
              layanan perbankan yang profesional, cepat, dan personal kepada
              masyarakat serta mendukung pertumbuhan ekonomi lokal.
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-white border border-dark-100 rounded-xl p-4">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-dark-900 font-bold text-sm">Diawasi OJK</p>
                  <p className="text-dark-500 text-xs">Aman & Legal</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white border border-dark-100 rounded-xl p-4">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-dark-900 font-bold text-sm">Dijamin LPS</p>
                  <p className="text-dark-500 text-xs">Simpanan Aman</p>
                </div>
              </div>
            </div>

            <a
              href="/tentang-kami"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Selengkapnya
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
