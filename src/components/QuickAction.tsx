"use client";

import { motion } from "framer-motion";

export default function QuickAction() {
  return (
    <section className="relative z-10 -mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl border border-dark-100 p-6 lg:p-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <span className="text-dark-800 font-bold text-lg">SAYA INGIN</span>
            </div>
            <div className="flex-1 w-full">
              <select className="w-full px-5 py-3 bg-dark-50 border border-dark-200 rounded-xl text-dark-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all appearance-none cursor-pointer">
                <option value="">Pilih layanan yang Anda butuhkan...</option>
                <option value="kredit-modal">Mengajukan Kredit Modal Usaha</option>
                <option value="kredit-multiguna">Mengajukan Kredit Multiguna</option>
                <option value="kredit-musiman">Mengajukan Kredit Musiman</option>
                <option value="kredit-emas">Mengajukan Kredit Emas</option>
                <option value="deposito">Membuka Deposito</option>
                <option value="tabungan">Membuka Tabungan</option>
                <option value="konsultasi">Konsultasi Gratis</option>
              </select>
            </div>
            <a
              href="#kontak"
              className="shrink-0 px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Cari
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
