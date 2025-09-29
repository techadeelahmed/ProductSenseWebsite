const cards = document.querySelectorAll(".problem-card");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const vh = window.innerHeight;
  const sectionTop = document.querySelector(".problem-section").offsetTop;

  cards.forEach((card, index) => {
    const start = sectionTop + index * vh;
    const end = sectionTop + (index + 1) * vh;

    if (scrollY >= start && scrollY < end) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
});

/// Animation code
$(document).ready(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $(entry.target).addClass('animate__animated animate__fadeInLeftBig');
        observer.unobserve(entry.target); // Optionally unobserve the element after animation
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  // Select all elements with the class 'animateMe' using jQuery
  $('.animateMe').each(function () {
    observer.observe(this);
  });
});


