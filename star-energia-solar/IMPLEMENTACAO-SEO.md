# Atualização do site — STAR Energia Solar

## O que foi preparado
- Hero inicial com vídeo de fundo, reprodução automática silenciosa e imagem de poster para carregamento.
- Botão flutuante do WhatsApp sempre acessível, inclusive no celular.
- Novas páginas específicas para instalação, painéis solares, financiamento e energia solar por assinatura.
- Blog com três artigos iniciais, conteúdo original e links de contato.
- Inclusão do blog na navegação e atualização do sitemap.
- Workflow do GitHub Pages configurado para gerar o site com o domínio canônico `https://starenergiasolar.com.br`, sem o caminho de projeto `github.io`.
- Arquivo `public/CNAME` para manter o domínio personalizado no artefato publicado.

## Publicação no GitHub
1. Faça uma cópia de segurança do repositório atual.
2. Envie os arquivos atualizados do ZIP para o repositório, mantendo a pasta `.github/workflows`.
3. Faça o commit na branch `main`.
4. Abra a aba **Actions** do GitHub e confira se o fluxo **Publicar site no GitHub Pages** terminou com sucesso.
5. Depois da publicação, teste a página inicial, as páginas de serviço, o blog, o vídeo e o botão de WhatsApp no celular e no computador.

O workflow publica a pasta `out` criada pelo Next.js. Não publique a pasta `node_modules`.

## Google Search Console
O site usa o domínio canônico sem `www`: `https://starenergiasolar.com.br/`.
- Para a verificação por arquivo HTML, use o arquivo original baixado pelo próprio Search Console, sem alterar nome ou conteúdo, e coloque-o na raiz pública do site (pasta `public` antes do build).
- Alternativamente, adicione a propriedade do tipo **Domínio** `starenergiasolar.com.br` e faça a verificação pelo registro DNS no provedor do domínio.
- Após verificar a propriedade e publicar a versão atualizada, envie `https://starenergiasolar.com.br/sitemap.xml` no Search Console.
- A verificação não garante indexação imediata nem posições específicas. Acompanhe cobertura/indexação e desempenho ao longo do tempo.

## Observações
- As páginas novas foram escritas para responder a dúvidas diferentes, não apenas repetir a palavra-chave.
- Percentuais, aprovação de financiamento, geração e retorno dependem das condições de cada projeto; o site evita promessas universais.
- O vídeo enviado foi incluído como recurso local em `public/videos/hero-solar.mp4`.
