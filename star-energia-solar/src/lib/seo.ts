import type { Metadata } from "next";
import { SITE_URL, site } from "./site";
import { allServices } from "@/data/services";
import { photos, type Photo } from "@/data/projects";
import type { Post } from "@/data/posts";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: Photo;
};

/** Metadata completa de uma página: title, description, canonical, Open Graph e Twitter. */
export function pageMetadata({ title, description, path, image = photos.usinaAerea }: PageSeo): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: site.name,
      url: path,
      title,
      description,
      images: [{ url: image.src, width: image.width, height: image.height, alt: image.alt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.src] },
  };
}

/** URL absoluta de uma página. O site usa barra final (trailingSlash), igual aos links e ao canonical. */
export const pageUrl = (path: string) => `${SITE_URL}${path === "/" ? "/" : `${path}/`}`;

/** URL absoluta de um arquivo (imagem, logo). */
export const assetUrl = (src: string) => `${SITE_URL}${src}`;

const businessId = `${SITE_URL}/#empresa`;

/**
 * LocalBusiness com dados confirmados. Sem coordenadas, horário, preço ou avaliações:
 * nenhum desses dados foi informado pela empresa.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessId,
    name: site.name,
    description:
      "Empresa de energia solar em Uberlândia com projetos, instalação, usinas, manutenção e financiamento de sistemas fotovoltaicos.",
    url: pageUrl("/"),
    logo: assetUrl(site.logo.src),
    image: [assetUrl(photos.usinaAerea.src), assetUrl(photos.residenciaFrontal.src)],
    telephone: site.phone.e164,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.district}`,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: { "@type": "City", name: "Uberlândia" },
    hasMap: site.links.maps,
    sameAs: [site.links.instagram],
    knowsAbout: ["Energia solar", "Energia solar fotovoltaica", "Painéis solares", "Usina solar"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de energia solar",
      itemListElement: allServices.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, ...(s.href ? { url: pageUrl(s.href) } : {}) },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: pageUrl("/"),
    name: site.name,
    inLanguage: "pt-BR",
    publisher: { "@id": businessId },
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: pageUrl(path),
    serviceType: "Energia solar fotovoltaica",
    provider: { "@id": businessId },
    areaServed: { "@type": "City", name: "Uberlândia" },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function blogPostingSchema(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: assetUrl(post.cover.src),
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "pt-BR",
    mainEntityOfPage: pageUrl(`/blog/${post.slug}`),
    author: { "@id": businessId },
    publisher: { "@id": businessId },
  };
}
