# STAR Energia Solar

Site institucional da STAR Energia Solar (Uberlândia - MG). Next.js com exportação estática.

## Publicação

- **GitHub Pages:** cada envio para a branch `main` monta e publica o site automaticamente (`.github/workflows/deploy.yml`). Em Settings > Pages, a opção Source precisa estar em **GitHub Actions**.
- **Hospedagem comum (cPanel/FTP):** rode `GERAR-SITE.bat`, informe o domínio e envie o conteúdo da pasta `out` para a `public_html`.

Enquanto o endereço for provisório (`github.io` ou `seudominio`), o site sai com `noindex` para não ser indexado com a URL errada.

## Desenvolvimento

```bash
npm install
npm run dev
```

Os dados da empresa ficam em `src/lib/site.ts`; as fotos, em `public/images` e `src/data/projects.ts`.
