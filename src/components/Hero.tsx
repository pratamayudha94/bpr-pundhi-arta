"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Solusi Keuangan Terpercaya untuk UMKM",
    subtitle:
      "PT BPR Pundhi Arta Indonesia hadir membantu pertumbuhan usaha dan kebutuhan finansial masyarakat dengan layanan cepat, aman, dan terpercaya.",
    cta: "Ajukan Kredit",
    ctaLink: "#kontak",
  },
  {
    id: 2,
    title: "Kredit Modal Usaha Bunga Kompetitif",
    subtitle:
      "Dapatkan pembiayaan untuk pengembangan usaha Anda dengan proses cepat dan mudah. Plafon hingga Rp 500 Juta.",
    cta: "Pelajari Selengkapnya",
    ctaLink: "#produk",
  },
  {
    id: 3,
    title: "Deposito Aman, Bunga Tinggi",
    subtitle:
      "Investasikan dana Anda dengan aman. Dijamin LPS dengan imbal hasil yang menarik dan kompetitif.",
    cta: "Lihat Produk",
    ctaLink: "#produk",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="beranda" className="relative h-[600px] lg:h-[700px] mt-16 lg:mt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/bank_pundhi.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/90 to-primary-900/70" />
      </div>
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold-400/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-gold-400 rounded-full" />
              <span className="text-white/90 text-sm font-medium">
                Diawasi OJK • Dijamin LPS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              {slides[current].title}
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              {slides[current].subtitle}
            </p>

            <a
              href={slides[current].ctaLink}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold-400 hover:bg-gold-500 text-dark-900 font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {slides[current].cta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </AnimatePresence>



        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-8 bg-gold-400" : "w-2 bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right side - Model image */}
      <div className="hidden xl:block absolute right-12 bottom-0 z-10">
        <img
          src="/hero-model.png"
          alt="Customer Service Bank Pundhi"
          className="h-[650px] w-auto object-contain -scale-x-100 -mb-12"
        />
      </div>
    </section>
  );
}
