const toggleBtn = document.getElementById('toggle-theme');

// Quando o site carrega, checa se tem algo salvo
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggleBtn.textContent = '🌙';
}

// Evento de clique no botão
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'dark'); // salva o tema
  } else {
    toggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'light'); // salva o tema
  }
});
