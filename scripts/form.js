document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = `© ${currentYear} Bruno de Sousa Teixeira - São Paulo, Brazil`;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last updated: ${lastModified}`;

    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    const selectElement = document.querySelector("#product-name");
    const form = document.querySelector("#reviewForm");

    if (selectElement) {
        products.forEach(product => {
            let newOption = document.createElement("option");
            newOption.value = product.id;
            newOption.textContent = product.name;
            selectElement.appendChild(newOption);
        });
    }

    let counter = Number(localStorage.getItem("reviewCount")) || 0;

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o recarregamento da página

        counter += 1; // Incrementa o contador corretamente
        localStorage.setItem("reviewCount", counter); // Salva no localStorage

        // Redireciona para a página de review
        window.location.href = "review.html";
    });
});