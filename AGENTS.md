# Guía de contribución para agentes

Estas instrucciones aplican a todo el repositorio del portafolio personal.

## Producto y objetivo

- Es un portafolio personal bilingüe (español e inglés) para un desarrollador de software.
- El objetivo principal
 es presentar perfil, habilidades, proyectos, experiencia y contacto para oportunidades laborales.
- Priorizar una experiencia moderna, responsive, accesible y de alto rendimiento.
- Usar datos de ejemplo únicamente cuando falte contenido real; mantenerlos fáciles de sustituir.

## Stack y comandos

- Lenguaje: JavaScript moderno (ES2022+).
- Framework: React con componentes funcionales y hooks.
- Bundler y servidor de desarrollo: Vite.
- Estilos: Tailwind CSS; evitar hojas CSS extensas y estilos inline salvo casos justificados.
- Gestor de paquetes: `pnpm`. No usar `npm` ni `yarn` en documentación, scripts o instrucciones.
- Despliegue: Vercel.

Comandos habituales:

```bash
pnpm install       # Instalar dependencias
pnpm dev           # Servidor de desarrollo
pnpm build         # Build de producción
pnpm preview       # Previsualizar el build
```

## Estructura de carpetas

```text
src/
├── components/      # Componentes reutilizables de interfaz
├── sections/        # Secciones de la página principal
├── data/             # Contenido, proyectos, habilidades y traducciones
├── hooks/            # Hooks personalizados
├── layouts/          # Estructuras de layout, si son necesarias
├── assets/           # Imágenes, iconos y recursos importados
├── App.jsx
└── main.jsx
public/               # Recursos servidos sin transformación
```

- Mantener la lógica de contenido separada de la presentación.
- Evitar componentes monolíticos; dividir por responsabilidad y reutilización real.
- No crear carpetas o abstracciones para una única pieza sin una razón clara.

## React y UI

- Preferir componentes funcionales, props explícitas y composición.
- Mantener los componentes pequeños y con una sola responsabilidad.
- Usar `key` estable y derivada de datos reales; nunca usar el índice si la lista puede cambiar.
- Evitar estado duplicado y efectos innecesarios.
- Las secciones deben usar HTML semántico (`header`, `nav`, `main`, `section`, `footer`).
- Todos los controles interactivos deben ser accesibles por teclado y tener estados `focus-visible`.
- Las imágenes deben incluir `alt` descriptivo; usar `alt=""` para imágenes puramente decorativas.

## Estilos y animaciones

- Usar utilidades de Tailwind y centralizar colores, tipografía y espaciado en el tema cuando corresponda.
- Mantener consistencia visual entre modo oscuro y modo claro.
- Usar breakpoints responsive de Tailwind de forma mobile-first.
- Las animaciones pueden ser protagonistas, pero nunca deben impedir la lectura o interacción.
- Respetar `prefers-reduced-motion` y evitar animaciones continuas innecesarias.
- Verificar contraste, foco visible y legibilidad en ambos temas.

## Idiomas y contenido

- Todo texto visible debe existir en español e inglés.
- No escribir textos traducibles directamente dentro de múltiples componentes.
- Mantener las traducciones agrupadas y usar claves consistentes.
- No traducir nombres propios, tecnologías, URLs ni identificadores técnicos.
- El español será el idioma inicial; el selector debe permitir cambiar a inglés sin recargar la página.

## Manejo de errores

- No ocultar errores silenciosamente con `catch` vacío.
- Validar datos externos o configurables antes de renderizarlos.
- Para errores de renderizado, usar un Error Boundary cuando la estructura de la aplicación lo requiera.
- En operaciones asíncronas, mostrar estados de carga, error y reintento cuando sean aplicables.
- Los mensajes visibles deben ser claros para el usuario y no exponer secretos, stack traces ni información interna.
- Registrar únicamente información útil para depuración y nunca credenciales o datos sensibles.
- Si una imagen falla, conservar un layout estable y proporcionar un fallback accesible.

## Convenciones de nombres

- Componentes y archivos de componentes: `PascalCase` (`ProjectCard.jsx`).
- Hooks: `camelCase` con prefijo `use` (`useTheme.js`).
- Funciones, variables y claves de objetos: `camelCase`.
- Constantes globales: `UPPER_SNAKE_CASE` solo cuando sean constantes reales.
- Carpetas: `kebab-case` o nombres descriptivos consistentes; preferir `kebab-case`.
- Clases CSS personalizadas: `kebab-case` y solo cuando Tailwind no sea suficiente.
- Nombres de traducción: claves semánticas y estables, no basadas en el texto visible.

## Commits

Usar Conventional Commits, en inglés y en tiempo presente:

```text
feat: add bilingual project section
fix: preserve theme preference
docs: update setup instructions
refactor: extract project card component
style: adjust responsive spacing
chore: update dependencies
```

- Un commit debe representar un cambio lógico y acotado.
- No mezclar refactors amplios con cambios funcionales no relacionados.
- Usar cuerpo del commit solo cuando sea necesario explicar contexto o decisiones.
- No incluir secretos, archivos generados, `node_modules`, builds ni archivos `.env`.

## Restricciones y calidad

- No introducir backend, base de datos ni formulario con almacenamiento sin una solicitud explícita.
- El contacto inicial debe usar enlaces directos a email, GitHub y LinkedIn.
- No añadir dependencias para resolver problemas que puedan solucionarse con React o Tailwind de forma clara.
- No modificar configuraciones del sistema ni archivos fuera del repositorio.
- No eliminar contenido o archivos existentes sin verificar su propósito.
- Antes de finalizar, ejecutar el build y revisar responsive, accesibilidad, consola y ambos idiomas cuando sea posible.
- Mantener actualizado `README.md` si cambian comandos, estructura o decisiones importantes.
