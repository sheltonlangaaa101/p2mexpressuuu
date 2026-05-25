# P2M Express

Compras de Portugal para Moçambique — site e API.

## Estrutura do projeto

```
p2mexpress/
├── package.json              # Raiz — dependências e scripts
├── vercel.json               # Deploy Vercel
├── vite.config.ts            # Build frontend
├── tsconfig.json             # TypeScript (monorepo-style paths)
│
├── client/                   # Frontend React
│   ├── index.html
│   ├── public/               # Favicon e ficheiros estáticos (/favicon.png)
│   └── src/
│       ├── main.tsx          # Entrada
│       ├── App.tsx
│       ├── assets/           # Imagens (logos) — import via @/assets/
│       ├── components/
│       ├── hooks/
│       ├── lib/
│       │   ├── queryClient.ts
│       │   ├── order.ts
│       │   └── utils.ts
│       └── pages/
│           └── home.tsx
│
├── server/                   # Express (desenvolvimento local)
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   ├── static.ts
│   ├── vite.ts
│   └── envConfig.ts
│
├── api/                      # Serverless Vercel (/api/*)
│   ├── config.ts
│   ├── stores.ts
│   ├── contact.ts
│   └── ...
│
└── shared/                   # Dados e tipos partilhados
    ├── schema.ts
    ├── catalog.ts
    └── config.ts
```

## Requisitos

- Node.js 18+

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Abrir: **http://localhost:3000**

## Build de produção

```bash
npm run build
```

Saída: `dist/public/` (HTML, JS, CSS, imagens)

## Preview local do build

```bash
npm run preview
```

Abrir: **http://localhost:4173**

## Deploy Vercel

| Campo | Valor |
|-------|--------|
| Build Command | `npm run build` |
| Output Directory | `dist/public` |
| Install Command | `npm install` |

Rotas `/api/*` são servidas automaticamente pela pasta `api/`.

## Scripts

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Express + Vite (porta 3000) |
| `npm run build` | Build Vite → `dist/public` |
| `npm run preview` | Servir build localmente |
| `npm run check` | `tsc` sem emit |
| `npm run build:server` | Build + bundle Express (opcional) |
| `npm start` | Node produção (após `build:server`) |

## Variáveis de ambiente

Ver `.env.example`
