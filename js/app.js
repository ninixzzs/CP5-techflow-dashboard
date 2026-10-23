document.addEventListener('DOMContentLoaded', () => {
  // Controle de tema
  const themeSelect = document.getElementById('theme-select');
  const mediaQuerySystem = window.matchMedia('(prefers-color-scheme: dark)');

  const updateTheme = (mode) => {
    if (mode === 'dark' || (mode === 'system' && mediaQuerySystem.matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (themeSelect) {
    const savedTheme = localStorage.getItem('techflow_theme') || 'system';
    themeSelect.value = savedTheme;
    updateTheme(savedTheme);

    themeSelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      localStorage.setItem('techflow_theme', selected);
      updateTheme(selected);
    });
  }

  mediaQuerySystem.addEventListener('change', () => {
    if ((localStorage.getItem('techflow_theme') || 'system') === 'system') {
      updateTheme('system');
    }
  });

  // Dropdown usuario
  const userBtn = document.getElementById('btn-usuario');
  const userMenu = document.getElementById('dropdown-usuario');

  if (userBtn && userMenu) {
    userBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      userMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
      userMenu.classList.add('hidden');
    });
  }

  // Toggle Sidebar Mobile
  const toggleSidebarBtn = document.getElementById('btn-sidebar-mobile');
  const sidebar = document.getElementById('sidebar');

  if (toggleSidebarBtn && sidebar) {
    toggleSidebarBtn.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
    });
  }

  // Modal e Form
  const modal = document.getElementById('modal-projeto');
  const btnOpenModal = document.getElementById('btn-abrir-modal');
  const btnCloseModal = document.getElementById('btn-fechar-modal');
  const form = document.getElementById('form-projeto');

  if (btnOpenModal && modal) {
    btnOpenModal.addEventListener('click', () => modal.classList.remove('hidden'));
  }

  if (btnCloseModal && modal) {
    btnCloseModal.addEventListener('click', () => modal.classList.add('hidden'));
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('nome-projeto');
      const ownerInput = document.getElementById('responsavel-projeto');
      const errName = document.getElementById('erro-nome');
      const errOwner = document.getElementById('erro-responsavel');
      const successMsg = document.getElementById('msg-sucesso');

      let hasError = false;

      if (!nameInput.value.trim()) {
        errName?.classList.remove('hidden');
        hasError = true;
      } else {
        errName?.classList.add('hidden');
      }

      if (!ownerInput.value.trim()) {
        errOwner?.classList.remove('hidden');
        hasError = true;
      } else {
        errOwner?.classList.add('hidden');
      }

      if (!hasError) {
        successMsg?.classList.remove('hidden');
        setTimeout(() => {
          successMsg?.classList.add('hidden');
          modal?.classList.add('hidden');
          form.reset();
        }, 1000);
      }
    });
  }
});