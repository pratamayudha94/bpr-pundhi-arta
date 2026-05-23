"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function TentangKami() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-400 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Tentang Kami
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Mengenal lebih dekat PT BPR Pundhi Arta Indonesia
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/snapedit_1695269576300-removebg-preview-1.png"
                alt="Gedung BPR Pundhi Arta Indonesia"
                className="w-full h-auto rounded-2xl"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-6">
                PT. BPR Pundhi Arta Indonesia
              </h2>
              <p className="text-dark-600 leading-relaxed mb-4">
                Bank Pundhi Arta Indonesia adalah lembaga keuangan mikro berbentuk BPR
                yang didirikan pada tanggal 7 Juni 2006 di Kabupaten Ngawi, Jawa Timur.
              </p>
              <p className="text-dark-600 leading-relaxed mb-4">
                Dalam kiprahnya sejak beroperasi dengan visi dan misi yang telah
                dirumuskan, Bank Pundhi berkembang menjadi lembaga keuangan yang
                kompetitif dan mampu bersaing di tengah menjamurnya berbagai lembaga
                keuangan.
              </p>
              <p className="text-dark-600 leading-relaxed mb-4">
                Kami fokus pada pemberdayaan Usaha Mikro, Kecil, dan Menengah (UMKM)
                dengan menyediakan akses pembiayaan yang mudah, cepat, dan dengan bunga
                yang kompetitif. Layanan personal kami menjadi keunggulan utama dalam
                membangun hubungan jangka panjang dengan nasabah.
              </p>
              <p className="text-dark-600 leading-relaxed">
                Beroperasi di bawah pengawasan Otoritas Jasa Keuangan (OJK) dan
                simpanan nasabah dijamin oleh Lembaga Penjamin Simpanan (LPS).
              </p>
            </motion.div>
          </div>

          {/* Visi & Misi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-dark-900 text-center mb-10">
              Visi & Misi
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary-50 border border-primary-100 rounded-2xl p-8">
                <div className="w-12 h-12 bg-primary-700 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-dark-900 font-bold text-xl mb-3">Visi</h3>
                <p className="text-dark-600 leading-relaxed">
                  Menjadi lembaga keuangan yang tangguh, professional, aman dan terpecaya.
                </p>
              </div>
              <div className="bg-gold-50 border border-gold-100 rounded-2xl p-8">
                <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-dark-900 font-bold text-xl mb-3">Misi</h3>
                <p className="text-dark-600 leading-relaxed mb-4">
                  Menjadi motor pengerak perekonomian dengan mengalang seluruh potensi sumber daya yang ada, sehingga mampu untuk:
                </p>
                <ul className="text-dark-600 leading-relaxed space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Mengakomodir aspirasi masyarakat pengguna jasa perbankan pada umumnya, dan masyarakat ekonomi mikro, kecil dan menengah pada khususnya.
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Memberi nilai tambah pada semua pihak dengan menggalang kerjasama antara nasabah, lembaga dan meningkatkan kemudahan pelayanan bagi nasabah dalam mengakses produk perbankan secara digitalisasi.
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Menjadikan terwujudnya dan menumbuh kembangkan aspirasi serta kredibilitas lembaga, nasabah dan masyarakat.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Sejarah */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-dark-900 mb-2">
              Sejarah
            </h2>
            <h3 className="text-2xl font-bold text-gold-500 mb-8">
              PT BPR PUNDHI ARTA INDONESIA
            </h3>

            <div className="space-y-6 text-dark-600 leading-relaxed">
              <p>
                BPR PUNDHI didirikan di Ngawi berdasarkan Akta Pendirian Perseroan
                Terbatas Nomor 30 tanggal 22 Desember 2005 di buat di hadapan Yvonne
                Erawati sarjana Hukum Notaris Di Madiun yang telah di sahkan/ di setujui
                oleh Departemen Hukum Dan Hak Asasi Manusia Republik Indonesia, Keputusan
                Menteri Hukum Dan Hak Asasi Manusia Republik Indonesia Nomor : C-0123
                HT.01.01.TH.2006 Tanggal 17 Januari 2006.
              </p>
              <p>
                Anggaran Dasar Bank telah mengalami beberapa kali perubahan yaitu di ubah
                dengan akta No.4 tanggal 29 Januari 2020 di buat di hadapan Yvonne Erawati,
                sarjana Hukum Notaris di Madiun yang telah mendapatkan Keputusan Mentri
                Hukum Dan Hak Asasi Manusia Republik Indonesia Nomor AHU-0014048.AH.01.02.Tahun
                2020 Tentang Persetujuan Perubahan Anggaran Dasar Perseroan Terbatas PT.Bank
                Perkreditan Rakyat PUNDHI ARTA INDONESIA.
              </p>
              <p>
                Akta No. 22 tanggal 19 Desember 2020 di buat atas permintaan Direksi PT. BPR
                PUNDHI ARTA INDONESIA Notaris Mochamad Rosidi Sarjana Hukum, Spesialis
                Pendidikan Notaris, Notaris di Kabupaten Pasuruan yang telah mendapatkan
                Pengesahan dari Kementrian Hukum Dan Hak Asasi Manusia Republik Indonesia
                Direktorat Jendral Administrasi Hukum Umum Nomor AHU-AH.01.03.0423155
                Mengenai Perubahan Direksi, Komisaris Peralihan Saham, Ganti Nama Pemegang
                Saham PT. BANK PERKREDITAN RAKYAT ARTA INDONESIA.
              </p>
            </div>

            {/* Divider */}
            <div className="w-20 h-0.5 bg-gold-400 my-10" />

            {/* Izin-Izin */}
            <h3 className="text-2xl font-bold text-dark-900 text-center mb-10">
              Izin - Izin Yang Dimiliki
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-dark-700 text-sm leading-relaxed">
                  Izin Prinsip dari Bank Indonesia No. 7/844/DPBPR/IDBPR/Kd Tanggal 9 Desember 2005
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-dark-700 text-sm leading-relaxed">
                  Pemberian Izin Usaha dari Gubernur Bank Indonesia No.8/38/KEP.GBI/2006 Tanggal 03 Mei 2006
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <p className="text-dark-700 text-sm leading-relaxed">
                  Kantor Pelayanan Pajak Ngawi dengan Nomor Pokok Wajib Pajak (NPWP) 02.517.476.4.646.000
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-20 h-0.5 bg-gold-400 my-10" />

            {/* Laporan Keuangan */}
            <h3 className="text-2xl font-bold text-primary-700 mb-4">
              LAPORAN KEUANGAN
            </h3>
            <p className="text-dark-600 leading-relaxed mb-4">
              <span className="font-bold">Laporan Keuangan Tahunan Bank</span> adalah laporan keuangan tahunan bank untuk memberikan informasi berkala mengenai kondisi bank secara menyeluruh, termasuk perkembangan usaha dan kinerja bank.
            </p>
            <p className="text-dark-600 leading-relaxed mb-8">
              Informasi keuangan berikut telah disusun untuk memenuhi Peraturan Otoritas Jasa Keuangan Republik Indonesia Nomor 23 Tahun 2024 tentang Pelaporan Melalui Sistem Pelaporan Otoritas Jasa Keuangan dan Transparansi Kondisi Keuangan Bagi Bank Perekonomian Rakyat dan Bank Perekonomian Rakyat Syariah.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Klik di sini
                </a>
                <span className="text-dark-800 font-semibold">Laporan Keuangan Tahun 2025</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Klik di sini
                </a>
                <span className="text-dark-800 font-semibold">Laporan Keuangan Tahun 2024</span>
              </div>
            </div>
          </motion.div>

          {/* Kantor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-dark-900 text-center mb-10">
              Kantor Kami
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-dark-50 border border-dark-100 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-dark-900 font-bold text-lg mb-1">Ngawi</h3>
                <p className="text-primary-700 text-sm font-medium mb-2">Kantor Pusat</p>
                <p className="text-dark-500 text-sm">Jl. Raya Ngawi – Solo Km 4 Ds Watualang Kec./ Kab Ngawi Jawa Timur</p>
                <p className="text-dark-500 text-sm mt-2">Telp: 0351 – 743474</p>
              </div>
              <div className="bg-dark-50 border border-dark-100 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-dark-900 font-bold text-lg mb-1">Magetan</h3>
                <p className="text-primary-700 text-sm font-medium mb-2">Kantor Cabang</p>
                <p className="text-dark-500 text-sm">Jl. Raya Goranggareng - Madiun Desa Genengan RT 4 RW 2 Kec. Kawedanan Kab. Magetan</p>
                <p className="text-dark-500 text-sm mt-2">Telp: 0351 – 4488108</p>
              </div>
              <div className="bg-dark-50 border border-dark-100 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-dark-900 font-bold text-lg mb-1">Madiun</h3>
                <p className="text-primary-700 text-sm font-medium mb-2">Kantor Cabang</p>
                <p className="text-dark-500 text-sm">Jl. Raya Nglames Kel. Nglames RT 11 RW 4 Kec. Madiun Kab. Madiun</p>
                <p className="text-dark-500 text-sm mt-2">Telp: 0351 – 468944</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
