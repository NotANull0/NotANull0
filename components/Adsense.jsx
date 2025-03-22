import Script from "next/script";

export default function Adsense({ id }) {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${id}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};
