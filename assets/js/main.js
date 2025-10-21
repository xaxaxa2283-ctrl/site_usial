document.addEventListener('DOMContentLoaded', function(){

  // Smooth anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(href.length > 1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Tabs (если есть)
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;
      document.querySelectorAll('.tabcontent').forEach(tc => tc.classList.remove('active'));
      document.getElementById(target).classList.add('active');
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // "Смотреть все приставки" и "Назад"
  const showAllBtn = document.getElementById('showAllBtn');
  const fullCatalog = document.getElementById('fullCatalog');
  const mainCatalog = document.getElementById('tab-consoles');
  const backBtn = document.getElementById('backBtn');

  if (showAllBtn && fullCatalog && mainCatalog && backBtn) {
    showAllBtn.addEventListener('click', (e) => {
      e.preventDefault(); // предотвращаем прыжок наверх
      mainCatalog.classList.add('hidden');
      fullCatalog.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    backBtn.addEventListener('click', (e) => {
      e.preventDefault(); // предотвращаем прыжок наверх
      fullCatalog.classList.add('hidden');
      mainCatalog.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

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


