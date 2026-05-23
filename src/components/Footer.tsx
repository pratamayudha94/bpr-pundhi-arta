"use client";

const footerLinks = {
  perusahaan: [
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Penghargaan", href: "#penghargaan" },
    { name: "Karir", href: "#" },
  ],
  layanan: [
    { name: "Kredit Modal Usaha", href: "#produk" },
    { name: "Kredit Multiguna", href: "#produk" },
    { name: "Kredit Musiman", href: "#produk" },
    { name: "Kredit Emas", href: "#produk" },
    { name: "Tabungan", href: "#produk" },
    { name: "Deposito", href: "#produk" },
  ],
  informasi: [
    { name: "Suku Bunga", href: "#" },
    { name: "Syarat & Ketentuan", href: "#" },
    { name: "Kebijakan Privasi", href: "#" },
    { name: "Pengaduan Nasabah", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-h.png"
                alt="Logo Bank Pundhi"
                className="h-12 w-auto"
              />
              <div>
                <p className="font-bold text-sm">BANK PUNDHI</p>
                <p className="text-dark-400 text-xs">PT. BPR Pundhi Arta Indonesia</p>
              </div>
            </div>
            <p className="text-dark-300 text-sm leading-relaxed mb-6">
              Bank Perkreditan Rakyat terpercaya yang melayani kebutuhan keuangan
              UMKM dan masyarakat di Ngawi, Magetan, dan Madiun.
            </p>

            {/* Trust Badges */}
            <div className="flex gap-3">
              <div className="bg-dark-800 border border-dark-700 rounded-lg px-3 py-2 text-center">
                <p className="text-gold-400 font-bold text-xs">OJK</p>
                <p className="text-dark-400 text-[10px]">Terawasi</p>
              </div>
              <div className="bg-dark-800 border border-dark-700 rounded-lg px-3 py-2 text-center">
                <p className="text-gold-400 font-bold text-xs">LPS</p>
                <p className="text-dark-400 text-[10px]">Dijamin</p>
              </div>
            </div>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-bold text-sm mb-4">Perusahaan</h4>
            <ul className="space-y-2.5">
              {footerLinks.perusahaan.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-dark-300 text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-bold text-sm mb-4">Layanan</h4>
            <ul className="space-y-2.5">
              {footerLinks.layanan.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-dark-300 text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi & Kontak */}
          <div>
            <h4 className="font-bold text-sm mb-4">Informasi</h4>
            <ul className="space-y-2.5 mb-6">
              {footerLinks.informasi.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-dark-300 text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-sm mb-3">Kontak</h4>
            <div className="space-y-2 text-dark-300 text-sm">
              <p>📞 0351 – 743474</p>
              <p>📱 0812-3456-7890</p>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 bg-dark-800 hover:bg-primary-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 text-dark-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-dark-800 hover:bg-primary-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-dark-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-dark-800 hover:bg-primary-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 text-dark-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-dark-400 text-sm text-center lg:text-left">
              Bank Pundhi Arta berizin dan diawasi oleh Otoritas Jasa Keuangan & Bank Indonesia serta merupakan peserta penjaminan LPS.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-primary-400 font-bold text-sm">cepat</span>
              <span className="text-dark-600">•</span>
              <span className="text-primary-400 font-bold text-sm">aman</span>
              <span className="text-dark-600">•</span>
              <span className="text-primary-400 font-bold text-sm">terpercaya</span>
            </div>
          </div>
          <p className="text-dark-500 text-xs text-center mt-4">
            Copyright © 2024 PT BPR Pundhi Arta Indonesia. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
