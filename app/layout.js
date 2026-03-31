import "./globals.css";
import { Fraunces, Figtree } from "next/font/google";

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
  title: "Hemanth Akkenapally | Data Science & Engineering Portfolio",
  description:
    "Portfolio of Hemanth Akkenapally — MS Data Science (UMBC). Data scientist, data engineer, and systems professional with experience in ML, NLP, cloud platforms, and analytics.",
  openGraph: {
    title: "Hemanth Akkenapally | Data Science & Engineering Portfolio",
    description:
      "Data scientist and engineer with experience in ML, NLP, cloud platforms, ETL pipelines, and analytics. MS Data Science, UMBC.",
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
    title: "Hemanth Akkenapally | Data Science & Engineering Portfolio",
    description:
      "Data scientist and engineer with experience in ML, NLP, cloud platforms, ETL pipelines, and analytics.",
    images: ["/profile.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}