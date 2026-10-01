/** Link oficial de WhatsApp, usado por todos os CTAs do site. */
export const WHATSAPP_URL = "https://wa.me/5534988493077?text=Ol%C3%A1%2C%20vim%20pelo%20Google.";

/** O formulário de avaliação monta uma mensagem com os dados preenchidos, mantendo a abertura padrão. */
export function whatsappWithDetails(lines: string[]) {
  const text = ["Olá, vim pelo Google.", "", ...lines].join("\n");
  return `https://wa.me/5534988493077?text=${encodeURIComponent(text)}`;
}
