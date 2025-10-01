const cards = document.querySelectorAll(".problem-card");
const timelineItems = document.querySelectorAll(".timeline-item");
const section = document.querySelector(".problem-section");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const vh = window.innerHeight;
  const sectionTop = section.offsetTop;

  cards.forEach((card, index) => {
    const start = sectionTop + index * (vh * 0.8); // thoda overlap
    const end = sectionTop + (index + 1) * (vh * 0.8);

    if (scrollY >= start && scrollY < end) {
      // Reset all
      cards.forEach(c => c.classList.remove("active", "behind", "far-behind"));

      // Active card
      card.classList.add("active");

      // Card just behind
      if (cards[index - 1]) {
        cards[index - 1].classList.add("behind");
      }

      // Far behind card
      if (cards[index - 2]) {
        cards[index - 2].classList.add("far-behind");
      }

      // Update timeline
      timelineItems.forEach(t => t.classList.remove("active"));
      if (timelineItems[index]) {
        timelineItems[index].classList.add("active");
      }
    }
  });
});






// Fade-in animations
$(document).ready(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $(entry.target).addClass('animate__animated animate__fadeInUp');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  $('.animateMe').each(function () {
    observer.observe(this);
  });
});
