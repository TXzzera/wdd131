const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = `© ${currentYear} Bruno de Sousa Teixeira - São Paulo, Brazil`;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last updated: ${lastModified}`;



const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');

    menuToggle.classList.toggle('open');
});


const museums = [
    {
        name: "MASP",
        description: "The Museu de Arte de São Paulo or MASP, it's the main of São Paulo and the first modern museum of Brazil.",
        link: "https://masp.org.br/sobre",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/fe/64/8d/masp-en-la-avenida-paulista.jpg?w=1200&h=-1&s=1"
    },
    {
        name: "Pinacoteca",
        description: "Pinacoteca it's a museum focused on showing the relationship between art and the society in a view of different social groups.",
        link: "https://www.pinacoteca.org.br/",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pinacoteca_de_S%C3%A3o_Paulo%2C_Brazil.jpg/1200px-Pinacoteca_de_S%C3%A3o_Paulo%2C_Brazil.jpg"
    },
    {
        name: "Museu da Língua Portuguesa",
        description: "Explain about the history and the evolution of the language in an interactive way.",
        link: "https://www.museudalinguaportuguesa.org.br/",
        image: "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2021/09/Museu-da-Lingua-Portuguesa.jpg?crop=1&resize=1212,909"
    }
];

const container = document.getElementById("museums-container");

museums.forEach(museum => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${museum.image}" alt="${museum.name}">
        <h3>${museum.name}</h3>
        <p>${museum.description}</p>
         <a href="${museum.link}" target="_blank" class="dynamic-button">Know More</a>`;

    container.appendChild(card);
});
