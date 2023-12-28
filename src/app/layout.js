import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Webwiz",
    default: "Webwiz - Web Development Community",
  },
  description:
    "Webwiz is a community of web developers and designers. We share our knowledge and experience to help each other grow. We're a community of developers where everyone is valued.",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://teamwebwiz.dev/",
    title: "Webwiz - Web Development Community",
    description:
      "Webwiz is a community of web developers and designers. We share our knowledge and experience to help each other grow. We're a community of developers where everyone is valued.",
    images: [
      {
        url: "https://teamwebwiz.dev/og.png",
        width: 800,
        height: 600,
      },
    ],
    siteName: "Webwiz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webwiz - Web Development Community",
    description:
      "Webwiz is a community of web developers and designers. We share our knowledge and experience to help each other grow. We're a community of developers where everyone is valued.",

    images: ["https://teamwebwiz.dev/og.png"],
  },
};

export const viewport = {
  themeColor: "#252525",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
