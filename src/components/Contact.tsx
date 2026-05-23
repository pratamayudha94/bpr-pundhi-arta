"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const offices = [
  {
    city: "Ngawi",
    type: "Kantor Pusat",
    address: "Jl. Raya Ngawi – Solo Km 4 Ds Watualang Kec./ Kab Ngawi Jawa Timur",
    phone: "0351 – 743474",
  },
  {
    city: "Magetan",
    type: "Kantor Cabang",
    address: "Jl. Raya Goranggareng - Madiun Desa Genengan RT 4 RW 2 Kec. Kawedanan Kab. Magetan",
    phone: "0351 – 4488108",
  },
  {
    city: "Madiun",
    type: "Kantor Cabang",
    address: "Jl. Raya Nglames Kel. Nglames RT 11 RW 4 Kec. Madiun Kab. Madiun",
    phone: "0351 – 468944",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block text-primary-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Kontak Kami
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-4">
            Kami Siap Melayani Anda
          </h2>
          <p className="text-dark-500 text-lg">
            Kunjungi kantor kami atau hubungi melalui berbagai saluran komunikasi
            yang tersedia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white border border-dark-100 rounded-2xl p-6 lg:p-8 shadow-sm">
              <h3 className="text-dark-900 font-bold text-xl mb-6">
                Formulir Pengajuan
              </h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-dark-700 text-sm font-medium mb-1.5">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan nama Anda"
                      className="w-full px-4 py-3 bg-dark-50 border border-dark-200 rounded-xl text-dark-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-dark-700 text-sm font-medium mb-1.5">
                      No. Telepon
                    </label>
                    <input
                      type="tel"
                      placeholder="08xx-xxxx-xxxx"
                      className="w-full px-4 py-3 bg-dark-50 border border-dark-200 rounded-xl text-dark-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-dark-700 text-sm font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@contoh.com"
                    className="w-full px-4 py-3 bg-dark-50 border border-dark-200 rounded-xl text-dark-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-dark-700 text-sm font-medium mb-1.5">
                    Layanan yang Diminati
                  </label>
                  <select className="w-full px-4 py-3 bg-dark-50 border border-dark-200 rounded-xl text-dark-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all">
                    <option value="">Pilih layanan</option>
                    <option value="kredit-modal">Kredit Modal Usaha</option>
                    <option value="kredit-multiguna">Kredit Multiguna</option>
                    <option value="kredit-musiman">Kredit Musiman</option>
                    <option value="kredit-emas">Kredit Emas</option>
                    <option value="deposito">Deposito</option>
                    <option value="tabungan">Tabungan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-dark-700 text-sm font-medium mb-1.5">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tuliskan kebutuhan atau pertanyaan Anda..."
                    className="w-full px-4 py-3 bg-dark-50 border border-dark-200 rounded-xl text-dark-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary-700 hover:bg-primary-800 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  Kirim Pengajuan
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Quick Contact */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white border border-dark-100 rounded-xl p-4 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-dark-900 font-semibold text-sm">WhatsApp</p>
                  <p className="text-dark-500 text-xs">0812-3456-7890</p>
                </div>
              </a>
              <a
                href="tel:0351743474"
                className="flex items-center gap-3 bg-white border border-dark-100 rounded-xl p-4 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-dark-900 font-semibold text-sm">Telepon</p>
                  <p className="text-dark-500 text-xs">0351 – 743474</p>
                </div>
              </a>
            </div>

            {/* Office Locations */}
            <div className="space-y-3">
              <h4 className="text-dark-900 font-bold text-lg">Lokasi Kantor</h4>
              {offices.map((office, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white border border-dark-100 rounded-xl p-4"
                >
                  <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-dark-900 font-semibold text-sm">
                      {office.city}{" "}
                      <span className="text-dark-400 font-normal">• {office.type}</span>
                    </p>
                    <p className="text-dark-500 text-xs mt-0.5">{office.address}</p>
                    <p className="text-dark-500 text-xs mt-0.5">Telp: {office.phone}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-dark-100 h-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.5!2d111.45!3d-7.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79e8a0b0b0b0b1%3A0x0!2sNgawi!5e0!3m2!1sid!2sid!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi BPR Pundhi Arta Indonesia"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
