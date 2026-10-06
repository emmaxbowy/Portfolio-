// =========================
// SMOOTH NAVIGATION
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        // Ignore empty links
        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// =========================
// SCROLL REVEAL
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.1
    }
);

sections.forEach(section => {
    observer.observe(section);
});


// =========================
// CURRENT YEAR
// =========================

const yearElement = document.querySelector(".footer p");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.textContent =
        `© ${currentYear} Oluwafunmilayo. All rights reserved.`;

}
