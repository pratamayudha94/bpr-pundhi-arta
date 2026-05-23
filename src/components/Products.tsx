"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    title: "Kredit Modal Usaha",
    description:
      "Fasilitas pinjaman untuk pengembangan usaha UMKM dengan bunga kompetitif dan proses cepat.",
    features: ["Plafon s/d Rp 500 Juta", "Tenor fleksibel", "Bunga kompetitif"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Kredit Musiman",
    description:
      "Fasilitas pinjaman berdasarkan pendapatan musiman (pertanian, dsb) dengan tempo 4-6 bulan sekali.",
    features: ["Sesuai siklus usaha", "Angsuran fleksibel", "Tanpa denda"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Kredit Emas",
    description:
      "Alternatif investasi emas ANTAM batangan mulai 0.5 gram s.d. 1 kilogram untuk masa depan Anda.",
    features: ["Emas ANTAM", "Pencairan cepat", "Investasi aman"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Kredit Multiguna",
    description:
      "Layanan kredit untuk berbagai kebutuhan: renovasi rumah, pendidikan, pengobatan, dan lainnya.",
    features: ["Proses mudah", "Agunan fleksibel", "Pencairan cepat"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: "Tabungan",
    description:
      "Setoran awal ringan, bunga bersaing, dijamin LPS. Tersedia TAPUNDHI, TAMARA, dan TASISWA.",
    features: ["Setoran ringan", "Bunga harian", "Dijamin LPS"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Deposito",
    description:
      "Investasi minim risiko dengan bunga tinggi. Pilihan jangka waktu 1, 3, 6, atau 12 bulan.",
    features: ["Bunga tinggi", "Dijamin LPS", "Tenor fleksibel"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="produk" className="py-20 lg:py-28 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block text-primary-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Produk Kami
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-4">
            Produk Perbankan Lengkap
          </h2>
          <p className="text-dark-500 text-lg">
            Berbagai produk perbankan yang dirancang khusus untuk mendukung
            pertumbuhan usaha dan kebutuhan finansial Anda.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-6 border border-dark-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-700 to-primary-800 rounded-2xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                {product.icon}
              </div>
              <h3 className="text-dark-900 font-bold text-lg mb-2">
                {product.title}
              </h3>
              <p className="text-dark-500 text-sm leading-relaxed mb-4">
                {product.description}
              </p>
              <ul className="space-y-2 mb-5">
                {product.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-dark-600">
                    <svg className="w-4 h-4 text-primary-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#kontak"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
              >
                Lihat Selengkapnya
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
