$(document).ready(function () {

    // 1. Dynamic copyright year
    $("#year").text(new Date().getFullYear());


    // 2. Navbar background on scroll
    $(window).scroll(function () {

        if ($(this).scrollTop() > 50) {
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }

    });


    // 3. Smooth scrolling
    $('a[href^="#"]').on("click", function (e) {

        let target = $(this).attr("href");

        if (target.length > 1 && $(target).length) {

            e.preventDefault();

            $("html, body").animate({
                scrollTop: $(target).offset().top - 75
            }, 700);

        }

    });


    // 4. Reveal animation
    const elements = document.querySelectorAll(
        ".section-heading, .skill-card, .project-card, .experience-card, .education-card, .certificate-card, .about-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.15
        });

        elements.forEach(function (element) {
            element.classList.add("reveal");
            observer.observe(element);
        });

    } else {

        elements.forEach(function (element) {
            element.classList.add("visible");
        });

    }


    // 5. Close mobile navbar after clicking
    $(".navbar-nav .nav-link").on("click", function () {

        $(".navbar-collapse").collapse("hide");

    });


    // 6. Active navigation link
    $(window).on("scroll", function () {

        let currentSection = "";

        $("section[id]").each(function () {

            let sectionTop = $(this).offset().top - 150;

            if ($(window).scrollTop() >= sectionTop) {
                currentSection = $(this).attr("id");
            }

        });

        $(".nav-link").removeClass("active");

        $('.nav-link[href="#' + currentSection + '"]')
            .addClass("active");

    });

});