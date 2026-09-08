# Portafolio personal

Este es mi portafolio personal como desarrollador de software. Aquí presento mi perfil profesional, los proyectos en los que he trabajado, mis habilidades técnicas y las distintas formas de contactarme.

## Objetivo

El objetivo es mostrar mi experiencia y mi forma de resolver problemas mediante una experiencia web moderna, responsive y accesible, orientada a nuevas oportunidades profesionales.

## Características

- Página única responsive para móvil, tablet y escritorio.
- Contenido disponible en español e inglés.
- Modo oscuro por defecto y selector de tema claro/oscuro.
- Animaciones visuales para el hero, las secciones y las tarjetas.
- Respeto por la preferencia `prefers-reduced-motion`.
- Secciones de presentación, habilidades, proyectos, experiencia y contacto.
- Enlaces directos a email, GitHub y LinkedIn.
- Datos del portafolio separados de los componentes para facilitar su actualización.
- Despliegue en Vercel.

## Tecnologías

- React
- Vite
- Tailwind CSS
- JavaScript
- Vercel para despliegue

## Requisitos

- Node.js 18 o superior
- pnpm

## Instalación

Clona el repositorio e instala las dependencias:

```bash
pnpm install
```

Inicia el servidor de desarrollo:

```bash
pnpm dev
```

El servidor local estará disponible normalmente en `http://localhost:5173`.

## Producción

```bash
pnpm build
pnpm preview
```

## Estructura del proyecto

```text
portfolio-web/
├── public/              # Recursos públicos
├── src/
│   ├── components/      # Componentes reutilizables y controles de UI
│   ├── data/             # Contenido bilingüe del portafolio
│   ├── hooks/            # Preferencias de idioma y tema
│   ├── App.jsx           # Composición de la página principal
│   ├── index.css         # Estilos globales y animaciones
│   └── main.jsx          # Punto de entrada de React
├── .gitignore
├── PLAN.md              # Plan funcional y técnico
├── package.json
└── README.md
```

## Información personal

- Nombre y descripción profesional.
- Proyectos y enlaces relevantes.
- Habilidades y tecnologías.
- Experiencia profesional y trayectoria.
- Información de contacto y redes profesionales.

## Contacto

Puedes encontrar mis enlaces profesionales y medios de contacto directamente en el sitio web.
