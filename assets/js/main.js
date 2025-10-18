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

  // Простейшие модальные окна
  document.querySelectorAll('[data-open]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.dataset.open;
      const modal = document.getElementById(modalId);
      if(modal) modal.style.display = 'flex';
    });
  });

  document.querySelectorAll('.modal .close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = btn.closest('.modal');
      if(modal) modal.style.display = 'none';
    });
  });


});
const burgerBtn = document.getElementById('burgerBtn');
const nav = document.querySelector('.nav');

burgerBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  burgerBtn.classList.toggle('active');

  // Блокируем прокрутку фона
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
});

// Плавное закрытие меню при клике по пункту
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    burgerBtn.classList.remove('active');
    document.body.style.overflow = '';
  });
});
