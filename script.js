// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');

    // Crea un contenedor para los mensajes
    const messageContainer = document.createElement('div');
    messageContainer.id = 'message-container';
    messageContainer.style.display = 'none';
    messageContainer.style.padding = '10px';
    messageContainer.style.marginTop = '10px';
    messageContainer.style.borderRadius = '5px';
    messageContainer.style.textAlign = 'center';
    form.appendChild(messageContainer);

    // Agrega eventos de enfoque y desenfoque a los campos
    [nameField, emailField].forEach(field => {
        field.addEventListener('focus', function() {
            this.style.backgroundColor = '#e9f5f1';
        });
        field.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.style.borderColor = 'red';
                this.style.backgroundColor = '#fbeaea';
            } else {
                this.style.borderColor = '#ced4da';
                this.style.backgroundColor = '#ffffff';
            }
        });
    });

    // Maneja el evento de envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = nameField.value.trim();
        const email = emailField.value.trim();

        if (name === '' || email === '') {
            // Mostrar mensaje de error
            messageContainer.textContent = 'Por favor, completa todos los campos.';
            messageContainer.style.backgroundColor = '#f8d7da';
            messageContainer.style.color = '#842029';
            messageContainer.style.display = 'block';
        } else {
            // Mostrar mensaje de éxito
            messageContainer.textContent = `¡Gracias por contactarnos, ${name}! Te responderemos a ${email} pronto.`;
            messageContainer.style.backgroundColor = '#d1e7dd';
            messageContainer.style.color = '#0f5132';
            messageContainer.style.display = 'block';

            // Limpia el formulario después de un breve retraso
            setTimeout(() => {
                form.reset();
                messageContainer.style.display = 'none';
                [nameField, emailField].forEach(field => {
                    field.style.backgroundColor = '#ffffff';
                    field.style.borderColor = '#ced4da';
                });
            }, 3000);
        }
    });
});
