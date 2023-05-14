document.addEventListener('DOMContentLoaded', function() {
	const form = document.querySelector('#reservas');
    
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevenir el envío del formulario

  // Obtener los valores de los campos
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const date = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;
  const guests = document.querySelector('#guests').value;

  // Mostrar los valores en una alerta
  alert(`Nombre: ${name}\nEmail: ${email}\nTelefono: ${phone}\nFecha: ${date}\nHoraio: ${time}\nNúmero de clientes: ${guests}`);
});

  });