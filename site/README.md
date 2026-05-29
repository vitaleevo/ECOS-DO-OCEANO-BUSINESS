# ECOS DO OCEANO BUSINESS

Site institucional multi-page desenvolvido com Next.js, TypeScript, Tailwind CSS e shadcn.

## Requisitos

- Node.js `>=20.9.0`
- npm

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
npm run start
```

## Estrutura

- `/` - página inicial institucional
- `/institucional` - perfil, missão, visão e diferenciais
- `/servicos` - serviços de consultoria, formação e apoio técnico
- `/areas-de-actuacao` - áreas sectoriais
- `/metodologia` - processo de trabalho
- `/contactos` - dados de contacto

## Deploy na Vercel

Ao importar o projecto na Vercel:

- Framework Preset: `Next.js`
- Root Directory: `site` se o repositório incluir a pasta superior `ECOS DO OCEANO BUSINESS`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: deixar vazio/default para Next.js

O projecto inclui `vercel.json` com os comandos de build e `.vercelignore` para evitar envio de artefactos locais.

## Identidade

Os ícones do navegador foram gerados a partir de `public/brand/ecos-mark.png`:

- `src/app/favicon.ico`
- `src/app/icon.png`
- `src/app/apple-icon.png`

