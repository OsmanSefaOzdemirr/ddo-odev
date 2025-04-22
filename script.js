function changeTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
  }
  window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('light-theme');
  });
  