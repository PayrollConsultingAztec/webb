// Código para el canvas de partículas
const backgroundCanvas = document.getElementById('background-canvas');
const backgroundCtx = backgroundCanvas.getContext('2d');

// Configuración del canvas
backgroundCanvas.width = window.innerWidth;
backgroundCanvas.height = window.innerHeight;

let particlesArray = [];
const colors = ['#97c9fc', '#051338', '#4682b4'];

// Clase para las partículas
class Particle {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = (Math.random() * 2) - 1;
        this.speedY = (Math.random() * 2) - 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > backgroundCanvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > backgroundCanvas.height || this.y < 0) this.speedY *= -1;
    }

    draw() {
        backgroundCtx.beginPath();
        backgroundCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        backgroundCtx.fillStyle = this.color;
        backgroundCtx.fill();
    }
}

// Inicializar partículas
function initParticles() {
    particlesArray = [];
    const numParticles = 100;
    for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 5 + 1;
        const x = Math.random() * backgroundCanvas.width;
        const y = Math.random() * backgroundCanvas.height;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particlesArray.push(new Particle(x, y, size, color));
    }
}

// Animar partículas
function animateParticles() {
    backgroundCtx.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
    for (const particle of particlesArray) {
        particle.update();
        particle.draw();
    }
    requestAnimationFrame(animateParticles);
}

// Ajustar tamaño del canvas al redimensionar
window.addEventListener('resize', () => {
    backgroundCanvas.width = window.innerWidth;
    backgroundCanvas.height = window.innerHeight;
    initParticles();
});

initParticles();
animateParticles();

// Código para el canvas de la red de nodos
const networkCanvas = document.getElementById('network-canvas');
const networkCtx = networkCanvas.getContext('2d');

// Función de ajuste del tamaño del canvas
function resizeCanvas() {
    const container = document.querySelector('.service-canvas-container');
    const width = container.clientWidth;
    const height = container.clientHeight;

    networkCanvas.width = width;
    networkCanvas.height = height;
}

resizeCanvas(); // Inicializa el tamaño del canvas

const nodes = [];
const maxNodes = 100;
const maxDistance = 100;

// Clase para los nodos de la red
class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > networkCanvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > networkCanvas.height) this.vy *= -1;
    }

    draw() {
        networkCtx.beginPath();
        networkCtx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        networkCtx.fillStyle = '#00ffcc';
        networkCtx.fill();
    }
}

for (let i = 0; i < maxNodes; i++) {
    nodes.push(new Node(Math.random() * networkCanvas.width, Math.random() * networkCanvas.height));
}

function drawConnections() {
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
                networkCtx.beginPath();
                networkCtx.moveTo(nodes[i].x, nodes[i].y);
                networkCtx.lineTo(nodes[j].x, nodes[j].y);
                networkCtx.strokeStyle = `rgba(0, 255, 204, ${1 - distance / maxDistance})`;
                networkCtx.stroke();
            }
        }
    }
}

function animate() {
    networkCtx.clearRect(0, 0, networkCanvas.width, networkCanvas.height);

    for (const node of nodes) {
        node.update();
        node.draw();
    }

    drawConnections();

    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    resizeCanvas();
});
function toggleCard(card) {
    const body = card.querySelector('.card-body');
    if (body.style.maxHeight) {
        body.style.maxHeight = null; // Colapsar
    } else {
        // Expandir
        body.style.maxHeight = body.scrollHeight + "px";
    }
}
const canvasSpecial = document.getElementById('rainfall-special');
const ctxSpecial = canvasSpecial.getContext('2d');

// Set canvas size to match window size
canvasSpecial.width = window.innerWidth;
canvasSpecial.height = window.innerHeight;

// Create an array to store the raindrops
const raindropsSpecial = [];

// Function to create a new raindrop
function createRaindropSpecial() {
    const x = Math.random() * canvasSpecial.width;
    const y = -5;
    const speed = Math.random() * 5 + 2;
    const length = Math.random() * 20 + 10;

    raindropsSpecial.push({ x, y, speed, length });
}

// Function to update the raindrops' positions
function updateRaindropsSpecial() {
    for (let i = 0; i < raindropsSpecial.length; i++) {
        const raindrop = raindropsSpecial[i];

        raindrop.y += raindrop.speed;

        if (raindrop.y > canvasSpecial.height) {
            raindropsSpecial.splice(i, 1);
            i--;
        }
    }
}

// Function to draw the raindrops
function drawRaindropsSpecial() {
    ctxSpecial.clearRect(0, 0, canvasSpecial.width, canvasSpecial.height);

    ctxSpecial.strokeStyle = 'white';
    ctxSpecial.lineWidth = 2;

    for (let i = 0; i < raindropsSpecial.length; i++) {
        const raindrop = raindropsSpecial[i];

        ctxSpecial.beginPath();
        ctxSpecial.moveTo(raindrop.x, raindrop.y);
        ctxSpecial.lineTo(raindrop.x, raindrop.y + raindrop.length);
        ctxSpecial.stroke();
    }
}

// Function to animate the raindrops
function animateSpecial() {
    createRaindropSpecial();
    updateRaindropsSpecial();
    drawRaindropsSpecial();

    requestAnimationFrame(animateSpecial);
}

// Start the animation
animateSpecial();



    const canvas = document.getElementById('canvas-overlay');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let lines = [];
    const maxLines = 300; // Limitar a un número máximo de líneas
    const lineSpawnRate = 200; // Cada 200ms se agregarán nuevas líneas (en lugar de 50ms)

    // Crear una clase de línea
    function Line(x1, y1, x2, y2, speedX, speedY) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.speedX = speedX;
        this.speedY = speedY;
        this.opacity = 0.2;
    }

    Line.prototype.update = function() {
        this.x1 += this.speedX;
        this.y1 += this.speedY;
        this.x2 += this.speedX;
        this.y2 += this.speedY;

        // Rebote de las líneas en los bordes
        if (this.x1 > canvas.width || this.x1 < 0) {
            this.speedX *= -1;
        }
        if (this.y1 > canvas.height || this.y1 < 0) {
            this.speedY *= -1;
        }

        if (this.x2 > canvas.width || this.x2 < 0) {
            this.speedX *= -1;
        }
        if (this.y2 > canvas.height || this.y2 < 0) {
            this.speedY *= -1;
        }
    };

    Line.prototype.draw = function() {
        ctx.strokeStyle = `rgba(0, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
    };

    // Función para crear una línea
    function createLine() {
        let x1 = Math.random() * canvas.width;
        let y1 = Math.random() * canvas.height;
        let x2 = Math.random() * canvas.width;
        let y2 = Math.random() * canvas.height;
        let speedX = Math.random() * 2 - 1;
        let speedY = Math.random() * 2 - 1;

        return new Line(x1, y1, x2, y2, speedX, speedY);
    }

    // Función para actualizar las líneas y eliminarlas si están fuera de la pantalla
    function updateLines() {
        // Actualiza las líneas
        for (let i = lines.length - 1; i >= 0; i--) {
            lines[i].update();
            lines[i].draw();

            // Eliminar líneas que ya no están en el canvas
            if (
                lines[i].x1 < 0 || lines[i].x1 > canvas.width ||
                lines[i].y1 < 0 || lines[i].y1 > canvas.height ||
                lines[i].x2 < 0 || lines[i].x2 > canvas.width ||
                lines[i].y2 < 0 || lines[i].y2 > canvas.height
            ) {
                lines.splice(i, 1);
            }
        }

        // Limitar el número de líneas
        if (lines.length < maxLines) {
            lines.push(createLine());
        }
    }

    // Función de animación
    function animateLines() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
        updateLines();
        requestAnimationFrame(animateLines); // Llamar a la animación en el siguiente cuadro
    }

    // Crear líneas cada cierto intervalo
    setInterval(() => {
        if (lines.length < maxLines) {
            lines.push(createLine());
        }
    }, lineSpawnRate);

    animateLines(); // Iniciar la animación

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