// MENU RESPONSIVE
var btnMenuOpen = document.getElementById("btnMenuOpen"),
  btnMenuClose = document.getElementById("btnMenuClose"),
  menuResponsive = document.getElementById("menuBar"),
  enlaces = document.getElementById("enlaces");

// Click abrir
btnMenuOpen.addEventListener("click", function () {
  menuResponsive.classList.add("active");
});

// Click cerrar
btnMenuClose.addEventListener("click", function () {
  menuResponsive.classList.remove("active");
});

// Cerrar menu con elementos de enlace
enlaces.addEventListener("click", function () {
  menuResponsive.style.transitionDelay = "0.5s";
  menuResponsive.classList.remove("active");
});

// BOTON SCROLL TOP
var btnTop = document.getElementById("btn-top"),
  logo = document.getElementById("logo");

// DETECTAMOS SCROLL EN NUESTRA PAGINA WEB
window.addEventListener("scroll", function () {
  var scroll = document.documentElement.scrollTop,
    fullSize = document.documentElement.offsetHeight,
    sizeVP = document.documentElement.clientHeight;

  if (scroll > 100) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }

  // MODIFICAR ELEMENTO CUANDO LLEGUE A FINAL DE PAGINA
  if (fullSize == scroll + sizeVP) {
    btnTop.classList.add("scrollFinal");
  } else {
    btnTop.classList.remove("scrollFinal");
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//   agregarImagen();
// });

// function agregarImagen() {
//   const imagenWillis = document.createElement("IMG");
//   imagenWillis.src = "../assets/willisempresa.webp";
//   imagenWillis.classList.add("img-portfolio");
//   imagenWillis.alt = "imagen empresa Willis";
//   document.querySelector("#willis").appendChild(imagenWillis);

//   const imagenSyngenta = document.createElement("IMG");
//   imagenSyngenta.src = "../assets/syngenta empresa.webp";
//   imagenSyngenta.classList.add("img-portfolio");
//   imagenSyngenta.alt = "imagen empresa Syngenta";
//   document.querySelector("#syngenta").appendChild(imagenSyngenta);

//   const imagenRedlink = document.createElement("IMG");
//   imagenRedlink.src = "../assets/redlinkempresa.webp";
//   imagenRedlink.classList.add("img-portfolio");
//   imagenRedlink.alt = "imagen empresa RedLink";
//   document.querySelector("#redlink").appendChild(imagenRedlink);

//   const imagenCordial = document.createElement("IMG");
//   imagenCordial.src = "../assets/cordialempresa.webp";
//   imagenCordial.classList.add("img-portfolio");
//   imagenCordial.alt = "imagen empresa Cordial";
//   document.querySelector("#cordial").appendChild(imagenCordial);
// }

// document.addEventListener("DOMContentLoaded", () => {
//   agregarImagen();
// });

// function agregarImagen() {
//   const imagenWillis = document.createElement("IMG");
//   imagenWillis.src = "../assets/willisempresa.webp";
//   imagenWillis.classList.add("img-portfolio");
//   imagenWillis.alt = "imagen empresa Willis";
//   document.querySelector("#willis").appendChild(imagenWillis);

//   const imagenSyngenta = document.createElement("IMG");
//   imagenSyngenta.src = "../assets/syngenta empresa.webp";
//   imagenSyngenta.classList.add("img-portfolio");
//   imagenSyngenta.alt = "imagen empresa Syngenta";
//   document.querySelector("#syngenta").appendChild(imagenSyngenta);

//   const imagenRedlink = document.createElement("IMG");
//   imagenRedlink.src = "../assets/redlinkempresa.webp";
//   imagenRedlink.classList.add("img-portfolio");
//   imagenRedlink.alt = "imagen empresa RedLink";
//   document.querySelector("#redlink").appendChild(imagenRedlink);

//   const imagenCordial = document.createElement("IMG");
//   imagenCordial.src = "../assets/cordialempresa.webp";
//   imagenCordial.classList.add("img-portfolio");
//   imagenCordial.alt = "imagen empresa Cordial";
//   document.querySelector("#cordial").appendChild(imagenCordial);
// }

// visible / invisible parrafo seccion servicios.

// let titulo = document.querySelectorAll(".titulo");
// titulo.forEach((elemento) => {
//   elemento.addEventListener("mouseover", () => {
//     let parrafo = [...document.querySelectorAll(".parrafo")];

//     parrafo.map((p) => p.classList.replace("invisible", "visible"));
//   });
//   elemento.addEventListener("mouseout", () => {
//     let parrafo = [...document.querySelectorAll(".parrafo")];
//     parrafo.map((p) => p.classList.replace("visible", "invisible"));
//   });
// });
