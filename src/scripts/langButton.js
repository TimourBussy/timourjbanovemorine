const langToggle = document.getElementById('lang-toggle');
const langMenu = document.getElementById('lang-menu');

if (langToggle && langMenu) {
  let isOpen = false;

  const openMenu = () => {
    langMenu.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
    langMenu.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
    langToggle.setAttribute('aria-expanded', 'true');
    langMenu.setAttribute('aria-hidden', 'false');
    isOpen = true;
  };

  const closeMenu = () => {
    langMenu.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
    langMenu.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
    langToggle.setAttribute('aria-expanded', 'false');
    langMenu.setAttribute('aria-hidden', 'true');
    isOpen = false;
  };

  langToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    isOpen ? closeMenu() : openMenu();
  });

  langMenu.addEventListener('click', (e) => {
    const opt = e.target.closest('[data-lang]');
    if (opt) {
      closeMenu();
    }
  });

  document.addEventListener('click', (e) => {
    if (!langToggle.contains(e.target) && !langMenu.contains(e.target) && isOpen) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeMenu();
  });
}