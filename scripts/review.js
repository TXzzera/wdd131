document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = `© ${currentYear} Bruno de Sousa Teixeira - São Paulo, Brazil`;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last updated: ${lastModified}`;

    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
    const postsElement = document.querySelector("#review-counter");

    if (postsElement) {
        postsElement.textContent = `You have completed ${reviewCount} review(s).`;
    }
});