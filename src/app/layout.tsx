import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT BPR Pundhi Arta Indonesia - Solusi Keuangan Terpercaya untuk UMKM",
  description:
    "PT BPR Pundhi Arta Indonesia adalah Bank Perkreditan Rakyat terpercaya yang melayani kebutuhan keuangan UMKM dan masyarakat di Ngawi, Magetan, dan Madiun. Diawasi OJK, simpanan dijamin LPS.",
  keywords:
    "BPR, Bank Perkreditan Rakyat, kredit UMKM, deposito, tabungan, Ngawi, Magetan, Madiun, pinjaman usaha, kredit modal kerja",
  openGraph: {
    title: "PT BPR Pundhi Arta Indonesia - Solusi Keuangan Terpercaya",
    description:
      "Bank Perkreditan Rakyat terpercaya untuk UMKM dan masyarakat. Layanan cepat, aman, dan terpercaya.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-dark-900 antialiased">{children}</body>
    </html>
  );
}
