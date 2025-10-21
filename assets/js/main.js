

document.addEventListener('DOMContentLoaded', () => {
  const openBtns = document.querySelectorAll('[data-open]');
  const closeBtns = document.querySelectorAll('.modal .close');

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-open');
      const modal = document.getElementById(modalId);
      if(modal) modal.classList.add('active');
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if(modal) modal.classList.remove('active');
    });
  });

  // Закрытие по клику вне контента
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', e => {
      if(e.target === modal) modal.classList.remove('active');
    });
  });
});


