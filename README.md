# ECOS DO OCEANO BUSINESS

Repositório institucional da ECOS DO OCEANO BUSINESS.

Site institucional multi-page desenvolvido com Next.js, TypeScript, Tailwind CSS e shadcn.

## Requisitos

- Node.js `>=20.9.0`
- npm

## Desenvolvimento

```bash
npm install
npm run dev
```

## Validação

```bash
npm run lint
npm run build
```

## Deploy na Vercel

Ao importar este repositório na Vercel:

- Framework Preset: `Next.js`
- Root Directory: deixar vazio/default
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: deixar vazio/default

O projeto inclui `vercel.json` com os comandos de build e `.vercelignore` para evitar envio de artefactos locais.

## Estrutura

- `/` - página inicial institucional
- `/institucional` - perfil, missão, visão e diferenciais
- `/servicos` - serviços de consultoria, formação e apoio técnico
- `/areas-de-actuacao` - áreas sectoriais
- `/metodologia` - processo de trabalho
- `/contactos` - dados de contacto

## Identidade

Os ícones do navegador foram gerados a partir de `public/brand/ecos-mark.png`:

- `src/app/favicon.ico`
- `src/app/icon.png`
- `src/app/apple-icon.png`
