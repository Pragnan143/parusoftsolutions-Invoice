import { AUTHOR_WEBSITE, BASE_URL } from "@/lib/variables";

export const ROOTKEYWORDS = [
  "invoice",
  "invoice generator",
  "invoice generating",
  "invoice app",
  "invoice generator app",
  "free invoice generator",
];

export const JSONLD = {
  "@context": "https://schema.org",
  "@type": "Website",
  name: "ParuSoft Solutions",
  description: "An Invoice Generator Web App",
  keywords: ROOTKEYWORDS,
  url: BASE_URL,
  image:
    "https://ParuSoft Solutions.vercel.app/_next/static/media/ParuSoft Solutions-logo.7ef8fa33.svg",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BASE_URL}/#website`,
  },
  author: {
    "@type": "Person",
    name: "Ali Abbasov",
    url: AUTHOR_WEBSITE,
  },
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: `${BASE_URL}`,
    },
  ],
};
