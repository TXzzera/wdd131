const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = `© ${currentYear} Bruno de Sousa Teixeira - São Paulo, Brazil`;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last updated: ${lastModified}`;