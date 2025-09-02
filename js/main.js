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

    setInterval(() => {
        moveSlide(1);
    }, 5000);

    const toggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    toggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });
    const header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
 
  const triggerPoint = window.innerHeight - 100;

  if (window.scrollY >= triggerPoint) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});