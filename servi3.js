// Función para crear una línea animada
function createLine(x1, y1, x2, y2) {
    const line = document.createElement('div');
    line.classList.add('line');
    document.getElementById('lines-container').appendChild(line);
    
    // Calculamos la distancia entre los puntos
    const lineLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
    
    line.style.height = `${lineLength}px`;  // Usamos la distancia para la altura
    line.style.transform = `rotate(${angle}deg)`;  // Rotamos la línea para que apunte entre los dos puntos
    line.style.left = `${x1}px`;
    line.style.top = `${y1}px`;
}

// Función para generar puntos aleatorios
function generateRandomPoints() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Limitar el número de líneas generadas
    const numberOfLines = 10;

    // Eliminar las líneas anteriores para evitar acumulación
    const lines = document.querySelectorAll('#lines-container .line');
    lines.forEach(line => line.remove());

    // Generar nuevas líneas aleatorias
    for (let i = 0; i < numberOfLines; i++) {
        const x1 = Math.random() * width;
        const y1 = Math.random() * height;
        const x2 = Math.random() * width;
        const y2 = Math.random() * height;

        // Crear la línea entre los puntos aleatorios
        createLine(x1, y1, x2, y2);
    }
}

// Llamar a la función al cargar la página
window.onload = generateRandomPoints;

// Llamar a la función cada 10 segundos para generar nuevas líneas
setInterval(generateRandomPoints, 10000); // Puedes ajustar el intervalo según lo que necesites

// Crear partículas animadas
const particlesContainer = document.getElementById('particles-container');

// Configuración inicial
const particleCount = 100;
const particles = [];

// Crear las partículas
for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particlesContainer.appendChild(particle);
    particles.push(particle);
}

// Estilo de las partículas
particles.forEach(particle => {
    particle.style.position = 'absolute';
    particle.style.width = `${Math.random() * 5 + 3}px`;
    particle.style.height = particle.style.width;
    particle.style.borderRadius = '50%';
    particle.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.3})`;
    particle.style.top = `${Math.random() * 200}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animation = `particleMove ${Math.random() * 8 + 4}s linear infinite`;
});

// Animar las partículas con movimiento aleatorio
document.styleSheets[0].insertRule(`
    @keyframes particleMove {
        0% {
            transform: translateY(0) translateX(0);
        }
        100% {
            transform: translateY(-200vh) translateX(${Math.random() * 200 - 100}px);
        }
    }
`);

const container = document.getElementById('dots-container');

function createDot() {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = `${Math.random() * 100}vw`;
    dot.style.top = `${Math.random() * 100}vh`;
    container.appendChild(dot);

    setTimeout(() => {
        dot.remove();
    }, 10000); // Elimina el punto después de 10 segundos
}

// Generar puntos de forma continua
setInterval(createDot, 300); // Genera un punto cada 300ms
    // Obtener los botones de contacto
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const gmailBtn = document.getElementById('gmail-btn');

    // Obtener el mensaje de confirmación
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

    // Función para mostrar el mensaje de confirmación
    function mostrarMensaje() {
        mensajeConfirmacion.classList.add('show'); // Agregar la clase para mostrar el mensaje
        
        // Ocultar el mensaje después de 5 segundos (opcional)
        setTimeout(function() {
            mensajeConfirmacion.classList.remove('show');
        }, 5000); // 5 segundos
    }

    // Añadir el evento de clic a ambos botones
    whatsappBtn.addEventListener('click', function(event) {
        mostrarMensaje(); // Mostrar el mensaje al hacer clic
    });

    gmailBtn.addEventListener('click', function(event) {
        mostrarMensaje(); // Mostrar el mensaje al hacer clic
    });