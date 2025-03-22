import { GoogleAnalytics } from '@next/third-parties/google';
import { Outfit } from 'next/font/google';
import CookieBanner from "@/components/CookieBanner";
import Adsense from "@/components/Adsense";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import config from "@/config";
import "@/css/globals.scss";

export const metadata = {
  metadataBase: new URL(config.url),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: config.logo,
  },
  title: {
    template: `${config.abbr} | %s`,
    default: config.name,
  },
  description: config.description,
  category: "technology",
  author: config.author,
  creator: config.author,
  publisher: config.author,
  keywords: config.keywords,
  openGraph: {
    title: {
      template: `${config.name} | %s`,
      default: config.name,
    },
    site_name: config.name,
    description: config.description,
    type: "website",
    locale: "en",
    url: config.url,
    images: [
      {
        url: config.name,
        width: config.logoSize,
        height: config.logoSize,
        alt: `${config.abbr} Logo`,
      },
    ],
  },
  twitter: {
    title: {
      template: `${config.abbr} | %s`,
      default: config.name,
    },
    description: config.description,
    card: "summary_large_image",
    site: config.twitterHandle,
    creator: config.twitterHandle,
    images: [
      {
        url: config.name,
        width: config.logoSize,
        height: config.logoSize,
        alt: `${config.abbr} Landing Page`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const font = Outfit({
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={font.className}>
        <CookieBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
      <Adsense id={config.adsense} />
      <GoogleAnalytics gaId={config.gtag} />
    </html>
  );
}
