"use client";

import { useEffect, useState } from "react";
import { WhatsappLogo, WarningCircle, CheckCircle } from "@phosphor-icons/react";
import { whatsappWithDetails } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

const types = ["Residencial", "Empresarial", "Usina solar", "Manutenção", "Outro"] as const;

type Field = "name" | "phone" | "type";
type Errors = Partial<Record<Field, string>>;

const fieldCls =
  "w-full rounded-[12px] border border-line bg-white px-4 py-3.5 text-[16px] text-ink placeholder:text-[#6b7587] transition-[border-color,box-shadow] duration-200 outline-none hover:border-navy/30 focus:border-blue focus:ring-4 focus:ring-blue/10 aria-[invalid=true]:border-red-600 aria-[invalid=true]:ring-red-600/10";

/**
 * Sem backend configurado: o formulário não finge um envio.
 * Ele organiza as informações e abre o WhatsApp da STAR com a mensagem pronta.
 */
export function EvaluationForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!sent) return;
    const t = setTimeout(() => setSent(false), 4000);
    return () => clearTimeout(t);
  }, [sent]);

  const clearError = (field: Field) => setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const type = String(data.get("type") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Informe o seu nome.";
    if (phone.replace(/\D/g, "").length < 10) next.phone = "Informe um WhatsApp com DDD.";
    if (!type) next.type = "Escolha o tipo de projeto.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    const url = whatsappWithDetails([
      "Gostaria de solicitar um orçamento de energia solar.",
      `Nome: ${name}`,
      `WhatsApp: ${phone}`,
      `Tipo de projeto: ${type}`,
      ...(message ? [`Mensagem: ${message}`] : []),
    ]);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const error = (key: Field) =>
    errors[key] ? (
      <p id={`${key}-erro`} className="mt-2 flex items-center gap-1.5 text-sm font-medium text-red-700">
        <WarningCircle size={16} weight="fill" aria-hidden />
        {errors[key]}
      </p>
    ) : null;

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5" aria-describedby="form-ajuda">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy">
          Nome
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          onChange={() => clearError("name")}
          className={fieldCls}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-erro" : undefined}
        />
        {error("name")}
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-navy">
          WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(34) 90000-0000"
          onChange={() => clearError("phone")}
          className={fieldCls}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-erro" : undefined}
        />
        {error("phone")}
      </div>

      <fieldset aria-invalid={Boolean(errors.type)} aria-describedby={errors.type ? "type-erro" : undefined}>
        <legend className="mb-2 block text-sm font-semibold text-navy">Tipo de projeto</legend>
        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <label key={t} className="relative cursor-pointer">
              <input type="radio" name="type" value={t} onChange={() => clearError("type")} className="peer sr-only" />
              <span
                className={cn(
                  "flex min-h-11 items-center justify-center rounded-full border border-line bg-white px-4 text-[14.5px] font-medium text-ink transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.97]",
                  "peer-checked:border-navy peer-checked:bg-navy peer-checked:text-white",
                  "peer-focus-visible:ring-4 peer-focus-visible:ring-blue/25 hover:border-navy/40",
                )}
              >
                {t}
              </span>
            </label>
          ))}
        </div>
        {error("type")}
      </fieldset>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
          Mensagem <span className="font-normal text-muted">(opcional)</span>
        </label>
        <textarea id="message" name="message" rows={4} className={cn(fieldCls, "resize-y")} />
      </div>

      <button
        type="submit"
        className={cn(
          "inline-flex min-h-14 w-full cursor-pointer items-center justify-center gap-2.5 rounded-full px-7 text-base font-semibold transition-[background-color,color,transform] duration-200 ease-(--ease-out-strong) active:scale-[0.98]",
          sent ? "bg-navy text-white" : "bg-solar text-navy-950 hover:bg-[#ffc414]",
        )}
      >
        {sent ? <CheckCircle size={20} weight="fill" aria-hidden /> : <WhatsappLogo size={20} weight="fill" aria-hidden />}
        {sent ? "WhatsApp aberto em nova aba" : "Enviar pelo WhatsApp"}
      </button>
      <p id="form-ajuda" className="text-center text-[13px] leading-relaxed text-muted" aria-live="polite">
        {sent
          ? "Confira a mensagem no WhatsApp e toque em enviar para falar com a STAR."
          : "Ao enviar, o WhatsApp abre com a sua mensagem pronta para a equipe da STAR."}
      </p>
    </form>
  );
}
