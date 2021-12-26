(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    Menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleMenu() {
    refs.Menu.classList.toggle('is-hidden');
  }
})();
