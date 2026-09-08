# Plan: Portafolio web bilingüe con React, Vite y Tailwind CSS

## Resumen

Crear desde cero un portafolio moderno para desarrollador de software usando React + Vite y Tailwind CSS. El sitio estará orientado a conseguir empleo, incluirá español e inglés, modo oscuro por defecto, selector de tema y animaciones protagonistas pero accesibles.

## Cambios principales

- Configurar React + Vite con Tailwind CSS para todos los estilos de la interfaz.
- Organizar estilos mediante:
  - Clases utilitarias de Tailwind.
  - Tokens de color, tipografía, espaciado y sombras en la configuración del tema.
  - Variantes responsive, dark mode, hover, focus y motion.
- Crear una página principal con:
  - Hero con presentación y llamadas a la acción.
  - Sección “Sobre mí”.
  - Habilidades técnicas agrupadas.
  - Proyectos destacados.
  - Experiencia o trayectoria profesional.
  - Contacto mediante email, GitHub y LinkedIn.
  - Footer con navegación y enlaces.
- Implementar traducciones completas en español e inglés mediante selector.
- Usar modo oscuro por defecto y permitir cambiar a modo claro, conservando la preferencia.
- Incorporar animaciones con utilidades de Tailwind y, si hace falta, una librería compatible:
  - Entrada de elementos.
  - Efectos hover.
  - Transiciones entre secciones.
  - Animaciones del hero y tarjetas.
  - Respeto por `prefers-reduced-motion`.
- Crear componentes reutilizables y responsive para navegación, botones, tarjetas, proyectos, habilidades, selector de idioma y selector de tema.
- Mantener los datos del portafolio separados de los componentes para facilitar el reemplazo de contenido de ejemplo.
- Optimizar accesibilidad, contraste, navegación por teclado, HTML semántico y rendimiento.
- Configurar el build de producción y despliegue en Vercel.

## Pruebas y criterios de aceptación

- React, Vite y Tailwind CSS se instalan y compilan correctamente.
- Los estilos responsive funcionan en móvil, tablet y escritorio.
- El cambio de idioma actualiza todos los textos sin recargar la página.
- El selector de tema funciona y conserva la preferencia.
- Las clases de Tailwind no generan estilos innecesarios en producción.
- Las animaciones no bloquean la interacción ni afectan la legibilidad.
- `prefers-reduced-motion` reduce o desactiva las animaciones.
- Los enlaces de contacto funcionan correctamente.
- No aparecen errores en consola.
- El build de producción se despliega correctamente en Vercel.
- El contenido de ejemplo puede reemplazarse desde una única fuente de datos.

## Supuestos y decisiones

- El sitio será inicialmente una página única.
- Tailwind CSS será la solución principal de estilos; se evitarán hojas CSS extensas.
- Se permitirá CSS personalizado únicamente para casos que Tailwind no cubra adecuadamente.
- No habrá backend ni formulario de contacto.
- Se usarán placeholders hasta disponer de los datos personales y proyectos reales.
- El idioma inicial será español, con inglés disponible mediante selector.
- El modo oscuro será el tema predeterminado.
- Las animaciones serán visualmente destacadas, manteniendo accesibilidad y rendimiento.
