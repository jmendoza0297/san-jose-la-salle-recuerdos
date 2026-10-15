# 🏆 San José La Salle (1967, 1968, 1969) — Recuerdos y Campeonatos

Sitio web conmemorativo e interactivo para revivir los campeonatos de fútbol, desfiles y presentaciones del Colegio San José La Salle durante los gloriosos años **1967, 1968 y 1969**.

Diseñado bajo la **Opción 2: Arquitectura moderna con Vite, SCSS modular y despliegue automatizado con GitHub Pages vía GitHub Actions**.

---

## 🌟 Características Emotivas y Funcionales

1. **Línea de Tiempo Interactiva (1967 - 1968 - 1969)**:
   - Conmutador dinámico de años con narración histórica, hitos destacados y estadísticas deportivas de cada temporada.
2. **Cancha Táctica Interactiva (El Once Inmortal de 1968)**:
   - Diagrama de cancha de fútbol de época con formación 4-2-4 clásica.
   - Cada dorsal es interactivo y despliega la ficha, apodo y hazaña del jugador.
3. **Álbum de Recuerdos estilo Polaroid**:
   - Rejilla fotográfica con filtros por categoría (*Fútbol*, *Presentaciones*, *Vida Estudiantil*).
   - Buscador en tiempo real por nombre, año o anécdota.
   - Visor Lightbox a pantalla completa con detalles y opción para identificar a compañeros de clase.
4. **Muro de los Recuerdos / Libro de Honor**:
   - Muro interactivo donde exalumnos, hijos y nietos pueden escribir su propia dedicatoria y anécdota.
   - Contador de corazones ("❤️ Me emociona") con persistencia en `localStorage`.
5. **Atmósfera Sonora de Época**:
   - Botón de audio opcional con Web Audio API que reproduce una ambientación cálida con sonido sutil de vinilo y acordes nostálgicos.

---

## 📁 Estructura del Proyecto

```plaintext
san-jose-la-salle-recuerdos/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Flujo automatizado para compilar y desplegar a GitHub Pages
├── public/
│   ├── favicon.svg             # Estrella Lasallista
│   └── images/                 # Fotografías históricas, escudos e ilustraciones
│       ├── escudo-lasalle.svg
│       ├── hero-stadium.svg
│       ├── futbol-1967.svg
│       ├── futbol-1968.svg
│       ├── futbol-1969.svg
│       ├── presentacion-1967.svg
│       ├── presentacion-1968.svg
│       ├── presentacion-1969.svg
│       ├── vida-estudiantil-1.svg
│       └── vida-estudiantil-2.svg
├── src/
│   ├── js/
│   │   ├── data/
│   │   │   └── historyData.js  # Datos históricos, jugadores, goles y recuerdos
│   │   ├── modules/
│   │   │   ├── gallery.js      # Filtros, buscador y render de fotos
│   │   │   ├── guestbook.js    # Muro de dedicatorias
│   │   │   ├── lightbox.js     # Visor modal de fotos ampliadas
│   │   │   ├── lineup.js       # Cancha de fútbol interactiva
│   │   │   ├── soundPlayer.js  # Música y ambiente de época
│   │   │   └── timeline.js     # Línea de tiempo 1967-1969
│   │   └── main.js             # Entrada JS principal e importación de SCSS
│   └── scss/
│       ├── _gallery.scss
│       ├── _guestbook.scss
│       ├── _hero.scss
│       ├── _lineup.scss
│       ├── _mixins.scss
│       ├── _modal.scss
│       ├── _reset.scss
│       ├── _timeline.scss
│       ├── _typography.scss
│       ├── _variables.scss     # Colores institucionales albiazul y dorados
│       └── main.scss           # Hoja de estilo global compilada por Vite
├── index.html                  # HTML5 semántico moderno con OpenGraph y SEO
├── package.json                # Dependencias (Vite + Sass)
├── vite.config.js              # Configuración con base relativa './' para Pages
└── .gitignore
```

---

## 🚀 Cómo Ejecutar en Tu Computadora

1. Abre una terminal en la carpeta del proyecto:
   ```bash
   cd "C:\Users\PC-EURO\.gemini\antigravity\scratch\san-jose-la-salle-recuerdos"
   ```

2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
   *Se abrirá automáticamente en tu navegador en `http://localhost:3000` con recarga instantánea en caliente (HMR).*

4. Para compilar la versión final de producción:
   ```bash
   npm run build
   ```

---

## 🌐 Cómo Publicar en GitHub Pages

1. **Crea un nuevo repositorio en GitHub** (por ejemplo: `san-jose-la-salle-recuerdos`).
2. **Sube el proyecto a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: proyecto recuerdos San Jose La Salle 1967-1969"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/san-jose-la-salle-recuerdos.git
   git push -u origin main
   ```
3. **Activar GitHub Pages**:
   - En tu repositorio de GitHub, entra en **Settings** > **Pages**.
   - En la sección **Build and deployment** > **Source**, selecciona: **GitHub Actions**.
   - El archivo `.github/workflows/deploy.yml` compilará el SCSS y publicará el sitio web automáticamente en cada actualización.

---

## 📷 Cómo Colocar Tus Fotos Reales Escaneadas

1. Coloca tus archivos de fotos escaneadas (formato `.jpg`, `.png` o `.webp`) dentro de la carpeta `public/images/`.
2. Abre el archivo `src/js/data/historyData.js`.
3. Edita las propiedades `image`, `title`, `description` y `caption` con los datos reales de tus compañeros y del colegio.
