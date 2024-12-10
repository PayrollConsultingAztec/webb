document.addEventListener("DOMContentLoaded", function() {
    const companyName = document.querySelector('.company-name');

    // Cambia el tamaño de la fuente después de que la animación de expansión termine
    setTimeout(() => {
        companyName.style.fontSize = '3 em'; // Tamaño más pequeño

    }, 10000); // Cambiado a 10000 ms para 10 segundos
});
        // JavaScript para mostrar el mensaje de confirmación
        function mostrarMensaje() {
            var mensaje = document.getElementById('mensaje-confirmacion');
            mensaje.classList.add('show'); // Añade la clase para mostrar el mensaje
            setTimeout(function() {
                mensaje.classList.remove('show'); // Oculta el mensaje después de 3 segundos
            }, 3000);
        }

        document.getElementById('whatsapp-btn').addEventListener('click', mostrarMensaje);
        document.getElementById('gmail-btn').addEventListener('click', mostrarMensaje);
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            document.getElementById('mensaje-exito').style.display = 'block';
            this.reset();
        });
        const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, "user-message");
        setTimeout(() => addMessage(getBotResponse(userMessage), "bot-message"), 500);
        userInput.value = "";
    }
});

function addMessage(message, className) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.classList.add("message", className);
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    // Respuestas básicas
    if (lowerCaseMessage.includes("hola")) {
        return "¡Hola! ¿Cómo puedo ayudarte hoy?";
    } else if (lowerCaseMessage.includes("adiós")) {
        return "¡Adiós! Que tengas un excelente día.";
    } else if (lowerCaseMessage.includes("nómina")) {
        return "¿Qué aspecto de nuestros servicios de nómina te gustaría conocer?";
    } else if (lowerCaseMessage.includes("servicios")) {
        return `
            Ofrecemos una variedad de servicios en Recursos Humanos y Nómina, incluyendo:
            - Implementación y Configuración de Procesos de Nómina
            - Soporte Técnico Integral
            - Gestión de Procesos Anuales de Nómina
            - Migración y Optimización de Sistemas
            ¿Te gustaría saber más sobre alguno de estos servicios?
        `;
    } else if (lowerCaseMessage.includes("contacto")) {
        return "Puedes contactarnos a través de nuestro correo: contacto@empresa.com o por WhatsApp al 527202740430.";
    } else if (lowerCaseMessage.includes("cotización")) {
        return "Para ofrecerte una cotización, por favor indícanos el número de empleados y el tipo de servicio requerido.";
    } else if (lowerCaseMessage.includes("testimonios")) {
        return "Contamos con varios testimonios de clientes satisfechos. Puedo enviarte algunos ejemplos si lo deseas.";
    } else if (lowerCaseMessage.includes("casos de éxito")) {
        return "Hemos tenido éxito con clientes como Aeroméxico, donde mejoramos su eficiencia en la gestión de nómina. ¿Te gustaría más detalles?";
    } else {
        return "Lo siento, no tengo la información necesaria para responder a tu pregunta. Te sugerimos que nos contactes directamente para obtener asistencia personalizada.";
    }
}

// Muestra y oculta el chatbot
document.querySelector('.chatbot-icon').addEventListener('click', function () {
    const chatbotContainer = document.querySelector('.chatbot-container');
    chatbotContainer.style.display =
        chatbotContainer.style.display === 'flex' ? 'none' : 'flex';
});

// Manejo de las opciones del chatbot
document.querySelectorAll('.chat-option').forEach(option => {
    option.addEventListener('click', function () {
        const chatBody = document.querySelector('#chat-body');

        // Mostrar el mensaje del usuario
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.innerText = option.dataset.response;
        chatBody.appendChild(userMessage);

        // Generar respuesta automática del bot
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';

        switch (option.dataset.response) {
            case 'Servicios disponibles':
                botMessage.innerHTML = `
                    Ofrecemos los siguientes servicios:<br>
                    - Implementación y Configuración de Procesos de Nómina<br>
                    - Soporte Integral en Nómina y Procesos Técnicos<br>
                    - Implementación de Procesos Anuales de Nómina<br>
                    - Migración de Sistemas y Optimización de Nómina<br>
                    ¿Te interesa saber más sobre algún servicio en específico?
                `;
                break;
            case 'Cotización de servicios':
                botMessage.innerHTML = `
                    Para ofrecerte una cotización, por favor indícanos:<br>
                    - Número de empleados<br>
                    - Tipo de servicio requerido<br>
                    Escribe tu respuesta en el campo de texto.
                `;
                break;
            case 'Soporte técnico':
                botMessage.innerHTML = `
                    Por favor describe el problema que estás experimentando, y uno de nuestros agentes te asistirá pronto.
                `;
                break;
            case 'Contacto directo':
                botMessage.innerHTML = `
                    Puedes contactarnos directamente a través de:<br>
                    - Teléfono: <strong>525611440781</strong><br>
                    - Correo: <strong>julio.martinez@payrollconsulting.com.mx</strong><br>
                    ¿Deseas que alguien te llame?
                `;
                break;
            default:
                botMessage.innerText = 'No entendí tu solicitud, por favor elige otra opción.';
        }

        chatBody.appendChild(botMessage);

        // Desplazar el chat hacia abajo para mostrar el último mensaje
        chatBody.scrollTop = chatBody.scrollHeight;
    });
});

// Enviar mensajes desde el campo de texto
document.getElementById('send-btn').addEventListener('click', function () {
    const userInput = document.getElementById('user-input');
    const chatBody = document.querySelector('#chat-body');

    if (userInput.value.trim() !== '') {
        // Mostrar el mensaje del usuario
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.innerText = userInput.value;
        chatBody.appendChild(userMessage);

        // Respuesta predeterminada del bot
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.innerText = 'Gracias por tu mensaje. Lo revisaremos y te responderemos pronto.';
        chatBody.appendChild(botMessage);

        // Limpiar el campo de texto
        userInput.value = '';

        // Desplazar el chat hacia abajo
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});

// Manejo del botón "Enter" para enviar
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});
    // Animación al cargar la página
    window.onload = function() {
        const contenido = document.querySelector('.contenido');
        contenido.classList.add('fade-in');
    };

    // Efecto al hacer hover sobre la imagen
    const imagen = document.querySelector('.imagen-bienvenida');
    imagen.addEventListener('mouseenter', () => {
        imagen.classList.add('zoom');
    });
    imagen.addEventListener('mouseleave', () => {
        imagen.classList.remove('zoom');
    });
    const scrollers = document.querySelectorAll(".scroller");
    addAnimation();

    function addAnimation() {
    scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute("aria-hidden", true);
    scrollerInner.appendChild(duplicatedItem);
    });
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Configuración de la red digital
    const nodes = [];
    const maxNodes = 50;  // Número de nodos en la red
    const nodeRadius = 5; // Radio de los nodos

    // Crea nodos aleatorios
    function createNodes() {
        for (let i = 0; i < maxNodes; i++) {
            const node = {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: nodeRadius,
                velocityX: (Math.random() - 0.5) * 2, // Velocidad en el eje X
                velocityY: (Math.random() - 0.5) * 2, // Velocidad en el eje Y
                connections: []
            };
            nodes.push(node);
        }
    }

    // Actualiza las posiciones de los nodos
    function updateNodePositions() {
        nodes.forEach(node => {
            node.x += node.velocityX;
            node.y += node.velocityY;

            // Rebotar los nodos cuando lleguen a los bordes del canvas
            if (node.x + node.radius > canvas.width || node.x - node.radius < 0) {
                node.velocityX *= -1;
            }
            if (node.y + node.radius > canvas.height || node.y - node.radius < 0) {
                node.velocityY *= -1;
            }
        });
    }

    // Dibuja los nodos
    function drawNodes() {
        nodes.forEach(node => {
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = '#97c9fc';
            ctx.fill();
        });
    }

    // Dibuja las conexiones entre nodos
    function drawConnections() {
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            for (let j = 0; j < nodes.length; j++) {
                const otherNode = nodes[j];
                if (i !== j) {
                    const dist = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2));
                    if (dist < 150) {  // Conexión si la distancia es corta
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(otherNode.x, otherNode.y);
                        ctx.strokeStyle = `rgba(0, 255, 0, ${1 - dist / 150})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }
        }
    }

    // Animación de la red digital
    function animateNetwork() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el lienzo

        updateNodePositions(); // Actualizar las posiciones de los nodos
        drawConnections();     // Dibujar las conexiones entre nodos
        drawNodes();           // Dibujar los nodos

        requestAnimationFrame(animateNetwork);
    }

    // Iniciar la creación de nodos y la animación
    createNodes();
    animateNetwork();

    // Función para mostrar la red cuando los testimonios sean visibles
    const testimonios = document.querySelectorAll('.testimonio');
    window.addEventListener('scroll', function() {
        testimonios.forEach(testimonio => {
            const rect = testimonio.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                testimonio.classList.add('visible'); // Animar los testimonios
            }
        });
    });
});

