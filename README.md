# Urbity Landing

Landing page de validación para Urbity, una plataforma SaaS para la gestión de
comunidades residenciales.

## Stack

- React
- Vite
- TypeScript

## Scripts

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`

## Lead Form

El formulario ya apunta a `POST /api/leads` y envia una notificacion por
correo usando Resend desde una Vercel Function.

Variables necesarias en Vercel:

- `RESEND_API_KEY`
- `LEAD_FROM_EMAIL`
- `LEAD_TO_EMAIL`
- `LEAD_EMAIL_SUBJECT_PREFIX` (opcional)

Hay un ejemplo base en `.env.example`.

Para probar funciones localmente usa `vercel dev`, no solo `npm run dev`.

## Estructura

- `src/App.tsx`: ensamblado principal de la landing.
- `src/components/`: secciones reutilizables.
- `src/App.css`: estilos de la landing.
- `src/index.css`: tokens globales y reglas base.

## Nota

El logo del header está configurado para cargarse desde `public/urbity-logo.png`.
