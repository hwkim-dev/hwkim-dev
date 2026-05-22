(() => {
  const root = document.documentElement;
  const button = document.querySelector('[data-theme-toggle]');
  const label = document.querySelector('[data-theme-label]');
  const storageKey = 'hkimw-theme';

  function currentTheme() {
    return root.dataset.theme === 'dark' ? 'dark' : 'light';
  }

  function render() {
    const nextLabel = currentTheme() === 'dark' ? 'Light' : 'Dark';
    if (label) label.textContent = nextLabel;
  }

  if (button) {
    button.addEventListener('click', () => {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try {
        localStorage.setItem(storageKey, next);
      } catch {}
      render();
    });
  }

  render();
})();
