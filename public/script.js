document.addEventListener('DOMContentLoaded', () => {
  const inputFecha = document.getElementById('fecha');
  const calendario = flatpickr(inputFecha, {
    enableTime: true,
    dateFormat: 'd/m/Y H:i',
    minDate: 'today',
    time_24hr: true
  });

  const inputTelefono = document.getElementById('telefono');
  const mascaraTel = IMask(inputTelefono, {
    mask: '+{54} (000) 000-0000'
  });

    const formulario = document.querySelector('.formulario-contacto');
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const personas = document.getElementById('personas').value;
    const fecha = inputFecha.value;

    Swal.fire({
      title: `¡Gracias, ${nombre}!`,
      text: `Tu reserva para ${personas} persona(s) el día ${fecha} fue registrada con éxito.`,
      icon: 'success',
      confirmButtonText: 'Excelente',
      confirmButtonColor: '#2c1e16'
    });

    formulario.reset();
    calendario.clear();
    mascaraTel.updateValue();
  });
});