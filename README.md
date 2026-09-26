# Libro de Tesorería — versión de archivo único

Esta es la versión simplificada: **un solo `index.html`** con todo el código
adentro (como la app de Ministerio de Alabanza). No usa `npm`, no usa `Vite`,
no hay paso de "build". Lo que ves en `index.html` es exactamente lo que se
publica.

## Cómo actualizar de ahora en adelante

Cuando Claude te dé un `index.html` nuevo con un cambio:

1. Reemplaza el archivo `index.html` en tu carpeta del proyecto
2. En la terminal, dentro de esa carpeta:
   ```
   git add .
   git commit -m "Describe aqui el cambio"
   git push
   ```
3. Espera 1-2 minutos y listo — no hace falta `npm install`, `npm run build`
   ni `npm run deploy`.

## Primer despliegue (una sola vez)

Como esta versión ya no usa la rama `gh-pages`, hay que cambiar la
configuración de GitHub Pages una sola vez:

1. Sube todos los archivos de esta carpeta a tu repositorio (`index.html`,
   `manifest.json`, `sw.js`, la carpeta `icons/`, y `firestore.rules` como
   referencia).
2. En GitHub → tu repositorio → **Settings → Pages**
3. En **Branch**, cambia de `gh-pages` a **`main`**, carpeta **`/ (root)`** → **Save**
4. Tu link sigue siendo el mismo: `https://carlos40205sh-oss.github.io/diezmos-app/`

## Archivos de este paquete

- `index.html` — toda la app (lo único que cambia normalmente)
- `manifest.json` — configuración de PWA (nombre, ícono, colores). No se toca salvo que quieras cambiar el ícono o el nombre.
- `sw.js` — habilita que se pueda instalar como app. No se toca a menos que en el futuro quieras agregar notificaciones push.
- `icons/` — los íconos de la app.
- `firestore.rules` — las reglas de seguridad de Firestore (ya las tienes puestas en la consola de Firebase, este archivo es solo de referencia/respaldo).

## Firebase

La configuración de Firebase (`firebaseConfig`) ya está puesta dentro del
`index.html`, apuntando a tu proyecto `iglesia-tesoreria-91759`. No hace
falta tocar nada ahí.
