# Nuestra Historia - Sitio Web de Aniversario

Un sitio web romántico e interactivo para celebrar 4 años de relación, con animaciones, fuegos artificiales, un museo de fotos y una escena final con paisaje.

## 🎨 Características

- **Contador en tiempo real**: Muestra años, meses, días, horas y minutos juntos
- **Fuegos artificiales animados**: Efectos visuales espectaculares al inicio
- **Museo interactivo**: Galería de fotos que se muestra progresivamente
- **Reproductor de música**: Botón para reproducir música de fondo
- **Transiciones suaves**: Entre diferentes escenas del sitio
- **Foto destacada**: La última foto se muestra con efectos especiales
- **Escena final**: Paisaje de montañas con mensaje romántico

## 📁 Estructura del Proyecto

```
nuestra-historia/
├── index.html          # Estructura HTML principal
├── style.css           # Estilos y animaciones
├── script.js           # Lógica y animaciones JavaScript
├── README.md           # Este archivo
├── fotos/              # Carpeta para tus fotos
│   ├── foto1.jpg
│   ├── foto2.jpg
│   └── ...
└── musica.mp3          # Archivo de música (opcional)
```

## 🚀 Cómo Usar

1. **Agrega tus fotos**:
   - Crea una carpeta llamada `fotos` en el proyecto
   - Agrega tus fotos y nómbralas: `foto1.jpg`, `foto2.jpg`, `foto3.jpg`, etc.
   - Puedes agregar tantas fotos como quieras
   - **Importante**: La última foto será la que se muestre como "destacada"

2. **Agrega música (opcional)**:
   - Coloca un archivo de música llamado `musica.mp3` o `musica.ogg` en la raíz del proyecto
   - El botón de música aparecerá en el museo

3. **Abre el sitio**:
   - Simplemente abre `index.html` en tu navegador
   - O usa un servidor local (recomendado):
     ```bash
     # Con Python
     python -m http.server 8000
     
     # Con Node.js (si tienes http-server instalado)
     npx http-server
     ```

## ⚙️ Personalización

### Cambiar la fecha de inicio
En `script.js`, línea 2:
```javascript
const FECHA_INICIO = new Date("2022-02-02T00:00:00");
```

### Cambiar los tiempos de las escenas
En `script.js`:
```javascript
const TIEMPO_ESPERA_INICIO = 8000;      // Tiempo en la escena inicial (ms)
const TIEMPO_POR_FOTO = 2000;           // Tiempo por foto en el museo (ms)
const TIEMPO_FOTO_DESTACADA = 5000;     // Tiempo de la foto destacada (ms)
```

### Agregar más fotos
En `script.js`, agrega más URLs al array `FOTOS`:
```javascript
const FOTOS = [
    'fotos/foto1.jpg',
    'fotos/foto2.jpg',
    // ... agrega más aquí
];
```

## 🎯 Escenas del Sitio

1. **Escena Inicial** (8 segundos):
   - Contador de tiempo en tiempo real
   - Mensaje de aniversario
   - Fuegos artificiales animados

2. **Museo** (automático):
   - Las fotos aparecen una por una
   - Botón para reproducir música
   - La última foto se destaca con brillo

3. **Foto Destacada** (5 segundos):
   - La última foto se muestra al frente con efectos especiales

4. **Escena Final**:
   - Paisaje de montañas
   - Mensaje: "Sigamos escribiendo nuestra historia por siempre"

## 💡 Notas

- Las fotos deben estar en formato JPG, PNG o similar
- Si una foto no se encuentra, se mostrará un placeholder
- El sitio es completamente responsive y funciona en móviles
- No se requiere conexión a internet (excepto para los placeholders si faltan fotos)

## 📝 Licencia

Este proyecto es personal y está creado con amor ❤️
