// ========== CONFIGURACIÓN ==========
const FECHA_INICIO = new Date("2022-02-02T00:00:00");

// ========== CONTADOR DE TIEMPO ==========
function actualizarContador() {
    const ahora = new Date();
    const fechaInicio = new Date(FECHA_INICIO);
    
    // Calcular años
    let años = ahora.getFullYear() - fechaInicio.getFullYear();
    let meses = ahora.getMonth() - fechaInicio.getMonth();
    let dias = ahora.getDate() - fechaInicio.getDate();
    
    // Ajustar si el día actual es menor que el día de inicio
    if (dias < 0) {
        meses--;
        const ultimoDiaMesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
        dias = ultimoDiaMesAnterior - fechaInicio.getDate() + ahora.getDate() + 1;
    }
    
    // Ajustar si el mes actual es menor que el mes de inicio
    if (meses < 0) {
        años--;
        meses += 12;
    }
    
    // Calcular horas, minutos y segundos
    const diferencia = ahora - FECHA_INICIO;
    const totalSegundos = Math.floor(diferencia / 1000);
    const segundos = totalSegundos % 60;
    
    const totalMinutos = Math.floor(totalSegundos / 60);
    const minutos = totalMinutos % 60;
    
    const totalHoras = Math.floor(totalMinutos / 60);
    const horas = totalHoras % 24;
    
    // Actualizar los elementos del DOM con formato de dos dígitos
    document.getElementById('años').textContent = años;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
    document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
}

// Actualizar cada segundo (1000 milisegundos) - como un reloj en tiempo real
setInterval(actualizarContador, 1000);
actualizarContador();

// ========== CREAR ESTRELLAS ==========
function crearEstrellas() {
    const contenedorEstrellas = document.getElementById('estrellas');
    if (!contenedorEstrellas) return;
    
    const numeroEstrellas = 100;
    
    for (let i = 0; i < numeroEstrellas; i++) {
        const estrella = document.createElement('div');
        estrella.className = 'estrella';
        
        // Algunas estrellas más grandes
        if (Math.random() > 0.7) {
            estrella.classList.add('grande');
        }
        
        // Posición aleatoria
        estrella.style.left = Math.random() * 100 + '%';
        estrella.style.top = Math.random() * 60 + '%';
        
        // Delay aleatorio para el parpadeo
        estrella.style.animationDelay = Math.random() * 3 + 's';
        
        contenedorEstrellas.appendChild(estrella);
    }
}

// ========== MÚSICA ==========
const btnMusica = document.getElementById('btn-musica');
const audioMusica = document.getElementById('audio-musica');
let musicaReproduciendo = false;

if (btnMusica && audioMusica) {
    btnMusica.addEventListener('click', () => {
        if (musicaReproduciendo) {
            audioMusica.pause();
            btnMusica.classList.remove('playing');
            musicaReproduciendo = false;
        } else {
            audioMusica.play().catch(error => {
                console.log('Error al reproducir música:', error);
                alert('Por favor, agrega un archivo de música llamado "musica.mp3" o "musica.ogg" en la carpeta del proyecto.');
            });
            btnMusica.classList.add('playing');
            musicaReproduciendo = true;
        }
    });
}

// ========== MANEJO DE IMAGEN DEL CUADRO ==========
window.addEventListener('load', () => {
    crearEstrellas();
    
    // Manejar error de imagen del cuadro
    const fotoCuadro = document.getElementById('foto-cuadro');
    if (fotoCuadro) {
        fotoCuadro.onerror = function() {
            // Si la imagen no existe, mostrar un placeholder
            this.style.background = 'linear-gradient(135deg, #8b5e3c 0%, #6b4a2a 100%)';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.color = 'rgba(255, 255, 255, 0.5)';
            this.style.fontSize = '18px';
            this.alt = 'Agrega tu foto en: fotos/foto-especial.jpg';
        };
    }
});

// Ajustar cuando cambia el tamaño de la ventana
window.addEventListener('resize', () => {
    // Las estrellas se ajustarán automáticamente con porcentajes
});
