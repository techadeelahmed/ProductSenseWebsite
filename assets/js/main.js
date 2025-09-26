// const cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove", customizeCursor);

// function customizeCursor(e) {
//   cursor.style.top = e.pageY + "px";
//   cursor.style.left = e.pageX + "px";
// }
// Get all section elements and navbar links

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    const changeActiveLinkOnScroll = () => {
        let currentSection = ''; // Variable to store the current section

        // Loop through each section to determine which one is in the viewport
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;  // Adjust for the navbar height
            const sectionHeight = section.clientHeight;

            // Check if the section is in the viewport (top within range)
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id'); // Get the current section id
            }
        });

        // Loop through the navbar links and add/remove 'active' class
        navLinks.forEach(link => {
            // Remove 'active' class from all links first
            link.classList.remove('active');

            // Check if the href attribute matches the current section id
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');  // Add 'active' class only to the correct link
            }
        });
    };

    // Listen to the scroll event
    window.addEventListener('scroll', changeActiveLinkOnScroll);
});



$.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options);

    var thisElement = $(this);

    $({ count: settings.start }).animate({ count: settings.end }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({ end: 1, duration: 3000 });
$('#number2').jQuerySimpleCounter({ end: 2, duration: 3000 });
$('#number3').jQuerySimpleCounter({ end: 1, duration: 2000 });
$('#number4').jQuerySimpleCounter({ end: 3, duration: 2500 });



/* AUTHOR LINK */
$('.about-me-img').hover(function () {
    $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
}, function () {
    $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
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



const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");

checkbox.addEventListener("click", () => {
    basic.textContent = basic.textContent === "$8000" ? "$750" : "$8000";
    professional.textContent =
        professional.textContent === "$11000" ? "$1000 " : "$11000";
    master.textContent = master.textContent === "$16000" ? "$1500" : "$16000";
});

