import type { Metadata } from "next";
import { companies, site } from "@/lib/site";

// Builds the title, description, canonical address and share-card data for one page.
export function pageMeta({
  title,
  description,
  path,
  absoluteTitle = false,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  type?: "website" | "article";
}): Metadata {
  const url = `${site.url}${path}`;
  const shareTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: shareTitle,
      description,
      siteName: site.name,
      locale: "en_KE",
      images: [{ url: `${site.url}/og.png`, width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [`${site.url}/og.png`],
    },
  };
}

// The business, described for search engines. Email is only included once it
// is confirmed real (site.emailIsReal).
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legal,
    url: `${site.url}/`,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/og.png`,
    slogan: site.tagline,
    description:
      "Redbay Group builds homes, schools and the infrastructure that supports better living and learning in Kenya, through Redbay Construction, Redbay Schools, Redbay Interiors and Redbay Energy.",
    foundingDate: String(site.founded),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ruaraka, Nairobi",
      addressRegion: "Nairobi",
      addressCountry: "KE",
    },
    areaServed: { "@type": "Country", name: "Kenya" },
    knowsAbout: ["Residential construction", "School construction", "Interior finishes", "Solar and wind energy"],
    department: companies.map((c) => ({
      "@type": "Organization",
      name: c.name,
      url: `${site.url}/companies/${c.slug}/`,
      description: c.text,
    })),
    telephone: site.phone.replace(/\s/g, ""),
    ...(site.emailIsReal ? { email: site.email } : {}),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}
