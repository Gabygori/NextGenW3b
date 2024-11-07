document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Recoger los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const empresa = document.getElementById('empresa').value;
    const contacto = document.getElementById('contacto').value;
    const gmail = document.getElementById('gmail').value;

    // Configurar los parámetros para EmailJS
    const params = {
        nombre: nombre,
        apellido: apellido,
        empresa: empresa,
        contacto: contacto,
        gmail: gmail
    };

    // Enviar el correo usando EmailJS
    emailjs.send("Nextgen_08", "formulario_contacto", params)
    .then(function(response) {
        document.getElementById('respuesta').style.display = 'block';
        document.getElementById('respuesta').innerText = "Gracias por contactarnos, próximamente los contactaremos.";
        document.getElementById('contactForm').reset();
        document.getElementById('respuesta').style.display = 'block';  
    }, function(error) {
        console.error("Error al enviar el correo:", error);
        alert("Hubo un error al enviar el formulario. Inténtalo de nuevo.");
    });
});
