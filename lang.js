  const selector = document.getElementById('languageSelector');

  // Funcție pentru a afișa limba selectată
  function changeLanguage() {
    const selectedLang = selector.value;
    document.querySelectorAll('.multilang').forEach(element => {
      if (element.classList.contains('lang-' + selectedLang)) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });
  }

  // La schimbarea selectului, afișează limba corespunzătoare
  selector.addEventListener('change', changeLanguage);

  // La încărcare, setează limba implicită și afișează
  window.addEventListener('DOMContentLoaded', () => {
    changeLanguage(); // rulează pentru a afișa limba selectată implicit
  });