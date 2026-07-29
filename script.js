const languageButton = document.getElementById("languageButton");

let currentLanguage = "en";

function updateLanguage() {
    const translatedElements = document.querySelectorAll("[data-en][data-pt]");

    translatedElements.forEach((element) => {
        element.textContent = element.dataset[currentLanguage];
    });

    document.documentElement.lang = currentLanguage;

    if (languageButton) {
        languageButton.textContent = currentLanguage === "en" ? "PT" : "EN";
    }
}

if (languageButton) {
    languageButton.addEventListener("click", () => {
        currentLanguage = currentLanguage === "en" ? "pt" : "en";
        updateLanguage();
    });
}

updateLanguage();

// Animação Reveal
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
        }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => {
        element.classList.add("active");
    });
}
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 1800);

});