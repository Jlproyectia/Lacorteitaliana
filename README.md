# La Corte Italiana

Web del restaurante La Corte Italiana, Fuengirola. HTML, CSS y JavaScript, sin compilación.

## Desarrollo local

Requiere Node.js 18 o posterior.

```sh
npm start
```

Abre http://127.0.0.1:4173/ y http://127.0.0.1:4173/carta/.

## Estructura

- `dist/`: web lista para servir, con carta, imágenes, fuentes, reseñas y vídeos.
- `preview.mjs`: servidor local con soporte para reproducción de vídeo por rangos.

Para desplegar, configura `dist` como directorio público; no se requiere comando de compilación.

Las fotografías originales, el logotipo y los vídeos proceden de las fuentes del restaurante. Las imágenes de comida incluyen recreaciones con IA basadas en fotografías del local. Los horarios, la carta y la disponibilidad deben mantenerse con el restaurante.

Los cambios de adaptación móvil se han aplicado sin pruebas ni revisión visual posterior, por petición del usuario.
