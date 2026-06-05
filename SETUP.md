# Duoc Coins — Setup

## Requisitos
- Node.js 20+
- PostgreSQL (o cuenta en [Neon](https://neon.tech) / [Supabase](https://supabase.com))

## Pasos

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar variables de entorno
```bash
cp .env.example .env.local
# Editar .env.local con tus valores reales
```

Variables críticas:
- `AUTH_SECRET` → `openssl rand -base64 32`
- `DATABASE_URL` → tu cadena de conexión PostgreSQL
- `LEDGER_SIGNING_KEY` → `openssl rand -hex 32`
- `DUOC_OIDC_*` → credenciales del provider OIDC institucional de Duoc UC

### 3. Base de datos
```bash
npm run db:push      # Crea las tablas (dev)
npm run db:generate  # Genera el cliente Prisma
```

### 4. Generar iconos PWA
```bash
npm install -D sharp
node scripts/generate-icons.mjs
```

### 5. Desarrollo
```bash
npm run dev
```

Abre http://localhost:3000

## Auth sin OIDC (dev local)
Sin credenciales OIDC, el login fallará. Puedes probar las rutas PWA en
`/wallet`, `/muro`, `/market`, `/perfil` directamente (el middleware de auth
puede comentarse en `middleware.ts` para desarrollo).

## Deploy (Vercel + Neon)
1. Push a GitHub
2. Importar en [vercel.com](https://vercel.com)
3. Agregar las mismas variables de entorno
4. `npm run db:push` contra la DB de producción
