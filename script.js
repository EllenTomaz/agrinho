// Exemplo simples de interação
document.addEventListener('DOMContentLoaded', () => {
  const fotos = document.querySelectorAll('.fotos img');
  fotos.forEach(foto => {
    foto.addEventListener('click', () => {
      alert('Você clicou em uma foto!');
    });
  });
});