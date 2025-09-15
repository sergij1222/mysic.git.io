let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.slide');
  slideIndex += n;

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  const newTransformValue = -slideIndex * 100;
  document.querySelector('.slides').style.transform = `translateX(${newTransformValue}%)`;
}

// Автоматичне переключення слайдів
setInterval(() => {
  moveSlide(1);
}, 5000);

// Кнопка-бургер
const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

toggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

// Sticky header при скролі
const header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
  const triggerPoint = window.innerHeight - 100;

  if (window.scrollY >= triggerPoint) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Плавна прокрутка по навігаційним посиланням
document.querySelectorAll('header nav a, .mobile-nav a, footer nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      mobileNav.classList.remove('active'); // Закриває моб. меню після переходу
    }
  });
});



