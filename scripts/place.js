const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = `© ${currentYear} Bruno de Sousa Teixeira - São Paulo, Brazil`;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last updated: ${lastModified}`;


function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}


const temperature = 10;
const windSpeed = 5; 

if (temperature <= 10 && windSpeed > 4.8) {
    document.getElementById("windchill").textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
}

else {
    document.getElementById('windchill').textContent = "N/A";
}