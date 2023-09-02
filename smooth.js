
    document.addEventListener("DOMContentLoaded", function() {
        const navLinks = document.querySelectorAll(".navbar-nav a");
        for (const link of navLinks) {
            link.addEventListener("click", smoothScroll);
        }

        function smoothScroll(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });

