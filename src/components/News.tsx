"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const tabs = ["PENGUMUMAN", "BERITA", "PROMOSI"];

const newsItems = {
  PENGUMUMAN: [
    {
      title: "Penyesuaian Suku Bunga Deposito",
      date: "15 Mei 2026",
      description:
        "Berlaku efektif mulai tanggal 15 Mei 2026, suku bunga deposito mengalami penyesuaian untuk seluruh tenor.",
      image: "/bank_pundhi.jpg",
      category: "PENGUMUMAN",
    },
    {
      title: "Perubahan Jam Operasional Kantor",
      date: "10 Mei 2026",
      description:
        "Pemberitahuan perubahan jam operasional kantor cabang Magetan dan Madiun mulai Juni 2026.",
      image: "/bank_pundhi.jpg",
      category: "PENGUMUMAN",
    },
    {
      title: "Libur Nasional Hari Raya Waisak",
      date: "1 Mei 2026",
      description:
        "Kantor BPR Pundhi Arta Indonesia tutup pada tanggal 12 Mei 2026 dalam rangka Hari Raya Waisak.",
      image: "/bank_pundhi.jpg",
      category: "PENGUMUMAN",
    },
  ],
  BERITA: [
    {
      title: "BPR Pundhi Arta Raih Penghargaan Infobank 2025",
      date: "20 April 2026",
      description:
        "PT BPR Pundhi Arta Indonesia kembali meraih predikat Kinerja Keuangan Sangat Bagus dari Majalah Infobank.",
      image: "/bank_pundhi.jpg",
      category: "BERITA",
    },
    {
      title: "Kunjungan OJK Regional Jawa Timur",
      date: "5 April 2026",
      description:
        "OJK Regional Jawa Timur melakukan kunjungan kerja ke kantor pusat BPR Pundhi Arta di Ngawi.",
      image: "/bank_pundhi.jpg",
      category: "BERITA",
    },
    {
      title: "Program Literasi Keuangan untuk UMKM",
      date: "28 Maret 2026",
      description:
        "BPR Pundhi Arta mengadakan program edukasi literasi keuangan bagi pelaku UMKM di Kabupaten Ngawi.",
      image: "/bank_pundhi.jpg",
      category: "BERITA",
    },
  ],
  PROMOSI: [
    {
      title: "Promo Deposito Bunga Spesial 7%",
      date: "1 Mei 2026",
      description:
        "Nikmati bunga deposito spesial hingga 7% per tahun untuk penempatan minimal Rp 100 Juta. Berlaku hingga 30 Juni 2026.",
      image: "/bank_pundhi.jpg",
      category: "PROMOSI",
    },
    {
      title: "Kredit Modal Usaha Tanpa Biaya Admin",
      date: "15 April 2026",
      description:
        "Ajukan kredit modal usaha sekarang dan nikmati bebas biaya administrasi untuk pengajuan di bulan Mei 2026.",
      image: "/bank_pundhi.jpg",
      category: "PROMOSI",
    },
    {
      title: "Tabungan Baru Gratis Hadiah Langsung",
      date: "1 April 2026",
      description:
        "Buka tabungan baru dengan setoran awal Rp 500.000 dan dapatkan hadiah langsung berupa merchandise eksklusif.",
      image: "/bank_pundhi.jpg",
      category: "PROMOSI",
    },
  ],
};

export default function News() {
  const [activeTab, setActiveTab] = useState("PENGUMUMAN");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentNews = newsItems[activeTab as keyof typeof newsItems];

  return (
    <section id="berita" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="inline-block text-primary-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Informasi Terkini
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-900">
            Update & Informasi
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-1 mb-8 border-b border-dark-200"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-sm font-bold transition-all relative ${
                activeTab === tab
                  ? "text-primary-700"
                  : "text-dark-400 hover:text-dark-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-700"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {currentNews.map((item, i) => (
            <motion.article
              key={`${activeTab}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-white border border-dark-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-dark-400 text-xs font-medium mb-2">
                  {item.date}
                </p>
                <h3 className="text-dark-900 font-bold text-base mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-dark-500 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-primary-700 font-semibold text-sm mt-3 group-hover:gap-2 transition-all"
                >
                  Selengkapnya
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
