/**
 * Fonte única dos dados confirmados da empresa.
 * Não adicione aqui informações que não tenham sido confirmadas pela STAR.
 */

/**
 * URL pública do site. Defina NEXT_PUBLIC_SITE_URL (ex.: https://www.dominio.com.br).
 * No build de produção a variável é obrigatória: next.config.ts interrompe o build sem ela,
 * para que canonical, sitemap, Open Graph e JSON-LD nunca saiam com localhost.
 */
function resolveSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  return "http://localhost:3000"; // apenas desenvolvimento local
}

export const SITE_URL = resolveSiteUrl();

/**
 * Domínio provisório (ainda sem o endereço real): o site sai com noindex e robots bloqueado,
 * para que nenhuma URL errada seja indexada caso essa versão seja publicada por engano.
 */
export const IS_PLACEHOLDER_DOMAIN = /seudominio|localhost|github.io/.test(SITE_URL);

export const site = {
  name: "STAR Energia Solar",
  shortName: "STAR",
  experience: "mais de 7 anos",
  phone: {
    e164: "+5534988493077",
    tel: "tel:+5534988493077",
    display: "(34) 98849-3077",
  },
  address: {
    street: "Avenida Belarmino Cotta Pacheco, 715",
    district: "Santa Mônica",
    city: "Uberlândia",
    region: "MG",
    postalCode: "38408-168",
    country: "BR",
  },
  links: {
    instagram: "https://www.instagram.com/starenergiasolaruberlandia",
    instagramHandle: "@starenergiasolaruberlandia",
    maps: "https://maps.app.goo.gl/ur52k5UqjVyxh1Ff6",
  },
  logo: {
    src: "/images/brand/star-energia-solar-logo.png",
    width: 575,
    height: 379,
  },
  agency: "M9 Agência Digital",
} as const;

/**
 * Afirmação fornecida pela STAR sobre o projeto da foto aérea principal.
 * Mantida em um único lugar para facilitar ajuste caso a empresa queira citar a fonte.
 */
/** Números informados pela STAR. */
export const subscriptionDiscount = "20% a 30%";

export const flagshipClaim = "A maior usina solar em telhado de Minas Gerais";
