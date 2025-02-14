const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = `© ${currentYear} Bruno de Sousa Teixeira - São Paulo, Brazil`;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last updated: ${lastModified}`;

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const nav = document.querySelector("header nav");

    menuButton.addEventListener("click", function () {
        nav.classList.toggle("show");
    });
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "São Paulo Brazil",
      location: "São Paulo, São Paulo Brazil",
      dedicated: "1978, October, 30",
      area: 59246,
      imageUrl: 
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
    },
    {
      templeName: "Recife Brazil",
      location: "Recife, Pernambuco, Brazil",
      dedicated: "2000, December, 15",
      area: 37200,
      imageUrl: 
      "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-main.jpg"
    },
    {
      templeName: "Salt Lake",
      location: "Salt Lake, Utah, United States",
      dedicated: "1893, April, 6",
      area: 382207,
      imageUrl: 
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    }
  ];

createTempleCard(temples);

function createTempleCard(temples){
    document.querySelector(".temples-world").innerHTML = "";
    temples.forEach(t => {
        let card  = document.createElement("div");
        card.classList.add("card");

        let name = document.createElement("h2");
        name.textContent = t.templeName;

        let location = document.createElement("p");
        location.innerHTML = `<span class ="label">Location:</span> ${t.location}`

        let dedication = document.createElement("p");
        dedication.innerHTML = `<span class ="label">Dedication:</span> ${t.dedicated}`

        let area = document.createElement("p");
        area.innerHTML = `<span class ="label">Area:</span> ${t.area} square feet`

        let image = document.createElement("img");
        image.src = t.imageUrl;
        image.alt = t.templeName;
        image.loading = "lazy";
        image.width = 400;
        image.height = 200;

        card.appendChild(name)
        card.appendChild(location)
        card.appendChild(dedication)
        card.appendChild(area)
        card.appendChild(image)

        document.querySelector(".temples-world").appendChild(card);
        
    });    
  }
  const homeLink = document.querySelector("#home");
  homeLink.addEventListener("click", () => {
    createTempleCard(temples);
  });
  
  const oldLink = document.querySelector("#old");
  oldLink.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year < 1900;
    });
    createTempleCard(oldTemples);
  });
  
  const newLink = document.querySelector("#new");
  newLink.addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year >= 2000;
    });
    createTempleCard(newTemples);
  });
  
  const largeLink = document.querySelector("#large");
  largeLink.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => {
      return temple.area > 90000;
    });
    createTempleCard(largeTemples);
  });
  
  const smallLink = document.querySelector("#small");
  smallLink.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => {
      return temple.area < 10000;
    });
    createTempleCard(smallTemples);
  });
