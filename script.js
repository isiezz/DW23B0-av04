document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.getElementById("menuToggle");
    var navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        toggleMenu();
    });

    window.onscroll = function () {
        scrollFunction();
    };

    function toggleMenu() {
        if (navLinks.style.display === "block") {
            navLinks.style.transition = "transform 0.5s ease";
            navLinks.style.transform = "translateY(-100%)";
            setTimeout(function () {
                navLinks.style.display = "none";
            }, 500); // Tempo correspondente à duração da transição
        } else {
            navLinks.style.display = "block";
            setTimeout(function () {
                navLinks.style.transition = "transform 0.5s ease";
                navLinks.style.transform = "translateY(0)";
            }, 0);
        }
    }

    function scrollFunction() {
        var navbar = document.getElementById("navbar");
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            navbar.style.backgroundColor = "rgba(116, 90, 90, .8)";

        } else {
            navbar.style.backgroundColor = "var(--Black-Bean)";
        }
    }
});
