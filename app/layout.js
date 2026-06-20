import "./globals.css";
import { Fraunces, Figtree } from "next/font/google";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import RFFieldBackground from "../components/RFFieldBackground";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://hemanth-akkenapally.vercel.app"),
  title: "Hemanth Akkenapally | RF, Biomedical Systems & Machine Learning",
  description:
    "Portfolio of Hemanth Akkenapally, an RF and biomedical systems engineer with an MPS in Data Science from UMBC and experience in HFSS, VNA measurements, signal analysis, and machine learning.",
  openGraph: {
    title: "Hemanth Akkenapally | RF, Biomedical Systems & Machine Learning",
    description:
      "RF and biomedical systems engineer working across HFSS simulation, VNA measurements, signal analysis, data engineering, and machine learning.",
    siteName: "Hemanth Akkenapally Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 400,
        height: 400,
        alt: "Hemanth Akkenapally",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hemanth Akkenapally | RF, Biomedical Systems & Machine Learning",
    description:
      "RF and biomedical systems engineer working across simulation, experimental measurement, signal analysis, and machine learning.",
    images: ["/profile.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable}`}>
      <body>
        <div className="bg-scene" aria-hidden="true">
          <RFFieldBackground />
        </div>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
