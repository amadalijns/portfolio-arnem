// Haal het huidige jaartal op en update het op alle plaatsen met de class "year"
document.querySelectorAll(".year").forEach(function(element) {
    element.textContent = new Date().getFullYear();
});

// Stel je geboortedatum in (jaar, maand, dag)
var birthDate = new Date(2004, 8, 6);
var currentDate = new Date();

// Bereken de leeftijd
var age = currentDate.getFullYear() - birthDate.getFullYear();
var monthDifference = currentDate.getMonth() - birthDate.getMonth();

// Als de verjaardag dit jaar nog niet geweest is, trek 1 af van de leeftijd
if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
    age--;
}

// Zet de berekende leeftijd in alle HTML-elementen met de class "age"
document.querySelectorAll(".age").forEach(function(element) {
    element.textContent = age;
});

// Haal de inhoud van menu.html op en voeg deze toe aan de pagina
fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu').innerHTML = data;

    // Haal de huidige pagina-URL op
    let currentPage = window.location.pathname.split('/').pop();

    // Als de gebruiker op de hoofdpagina is ("/"), stel 'index.html' in als de huidige pagina
    if (currentPage === "" || currentPage === "/") {
      currentPage = "index.html";
    }

    document.querySelectorAll('#menu .nav__item a').forEach(link => {
      const linkHref = link.getAttribute('href');

      // Markeer de juiste pagina als actief
      if (linkHref === currentPage || (currentPage.includes("project") && linkHref === "projecten.html")) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

  
// Haal de inhoud van banner.html op en voeg deze toe aan de pagina
fetch('banner.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('banner').innerHTML = data;
  });


// Pop up melding
// const popup = document.getElementById('popup');

// // Laat de popup fade-in zien na paginalaad
// window.addEventListener('load', () => {
//   popup.classList.add('show');
// });

// // Sluit popup met fade-out
// function closePopup() {
//   popup.classList.remove('show');
//   setTimeout(() => {
//     popup.style.display = 'none';
//   }, 500); // wacht op de fade-out animatie
// }


const acc = document.querySelectorAll(".accordion");
acc.forEach((el) => {
  el.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

function toggleImage(id) {
  const wrapper = document.getElementById(id);
  const isOpen = wrapper.classList.contains('open');

  if (isOpen) {
    wrapper.style.maxHeight = null;
    wrapper.classList.remove('open');
  } else {
    wrapper.style.maxHeight = wrapper.scrollHeight + "px";
    wrapper.classList.add('open');
  }
}

function changeSlide(carouselId, direction) {
  const carousel = document.getElementById(carouselId);
  const images = carousel.querySelectorAll("img");
  const imageArray = Array.from(images).filter(img => img.tagName === 'IMG');
  let currentIndex = imageArray.findIndex(img => img.classList.contains("active"));

  imageArray[currentIndex].classList.remove("active");

  let newIndex = currentIndex + direction;
  if (newIndex < 0) newIndex = imageArray.length - 1;
  if (newIndex >= imageArray.length) newIndex = 0;

  imageArray[newIndex].classList.add("active");
}



// wijzig ?v=getal naar eentje omhoog na elke change hier
// onderaan index.html <script src="../assets/js/custom.js?v=2"></script>