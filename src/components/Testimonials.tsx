"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pemilik Toko Bangunan",
    location: "Ngawi",
    rating: 5,
    text: "Berkat kredit modal usaha dari BPR Pundhi Arta, toko bangunan saya bisa berkembang pesat. Prosesnya cepat dan pelayanannya sangat ramah.",
    avatar: "BS",
  },
  {
    name: "Sri Wahyuni",
    role: "Pengusaha Batik",
    location: "Magetan",
    rating: 5,
    text: "Saya sudah menjadi nasabah deposito selama 5 tahun. Bunganya kompetitif dan saya merasa aman karena dijamin LPS. Pelayanannya sangat personal.",
    avatar: "SW",
  },
  {
    name: "Ahmad Fauzi",
    role: "Pemilik Warung Makan",
    location: "Madiun",
    rating: 5,
    text: "Kredit musiman dari BPR Pundhi sangat membantu usaha warung makan saya. Angsurannya fleksibel sesuai dengan pendapatan musiman saya.",
    avatar: "AF",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-gold-400" : "text-dark-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <span className="inline-block text-primary-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Testimoni
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-4">
            Dipercaya oleh Ribuan Nasabah
          </h2>
          <p className="text-dark-500 text-lg">
            Dengarkan pengalaman nasabah kami yang telah merasakan manfaat
            layanan BPR Pundhi Arta Indonesia.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-dark-50 border border-dark-100 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              {/* Quote icon */}
              <svg className="w-8 h-8 text-primary-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>

              <StarRating rating={t.rating} />

              <p className="text-dark-700 leading-relaxed mt-4 mb-6 text-sm">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-dark-100">
                <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-dark-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-dark-500 text-xs">
                    {t.role} • {t.location}
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
