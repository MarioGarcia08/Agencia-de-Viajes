# Agencia de Viajes

Aplicación Node.js con Express, Pug, Sequelize y MySQL.

## Requisitos

- Node.js y npm
- MySQL, por ejemplo, el incluido en XAMPP

## Preparar la base de datos

1. Inicia MySQL desde el panel de XAMPP.
2. En phpMyAdmin, importa `database/schema.sql` o ejecuta su contenido en MySQL.
3. Copia `.env.example` como `.env` (`Copy-Item .env.example .env` en PowerShell) y ajusta los valores a tu configuración local. En una instalación XAMPP habitual, el usuario es `root` y la contraseña puede estar vacía.

## Instalar y ejecutar

```powershell
npm install
npm run db:seed
npm run dev
```

Abre <http://localhost:4000>. Para ejecutar sin Nodemon, usa `npm start`.

El script `db:seed` crea datos de ejemplo y puede repetirse sin duplicar los viajes o testimonios de muestra. No subas `.env` ni credenciales al repositorio.
