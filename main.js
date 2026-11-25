
// Product Filtering

const filterButtons = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.filter;

        products.forEach(product => {

            if (
                category === "all" ||
                product.dataset.category === category
            ) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });

});


// Scroll Animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, { threshold: 0.15 });

document.querySelectorAll(
    ".product-card, .about-box, .contact-box"
).forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all .7s ease";

    observer.observe(element);

});

const style = document.createElement("style");

style.textContent = `
.show {
    opacity: 1 !important;
    transform: translateY(0) !important;
}
`;

document.head.appendChild(style);

