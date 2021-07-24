// MENU RESPONSIVE
var btnMenuOpen = document.getElementById("btnMenuOpen"),
  btnMenuClose = document.getElementById("btnMenuClose"),
  menuResponsive = document.getElementById("menuBar"),
  enlaces = document.getElementById("enlaces");

// Click abrir
btnMenuOpen.addEventListener("click", function () {
  menuResponsive.classList.add("active");
  document.body.classList.add("hidden");
});

// Click cerrar
btnMenuClose.addEventListener("click", function () {
  menuResponsive.classList.remove("active");
  document.body.classList.remove("hidden");
});

// Cerrar menu con elementos de enlace
enlaces.addEventListener("click", function () {
  document.body.classList.remove("hidden");
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

// DETECTAMOS EVENTO CLICK EN EL BOTON
btnTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// DETECTAR EVENTO CLIC EN EL LOGO
logo.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", () => {
  agregarImagen();
});

function agregarImagen() {
  const imagenWillis = document.createElement("IMG");
  imagenWillis.src = "./assets/willislogo.webp";

  imagenWillis.alt = "imagen empresa Willis";
  document.querySelector("#willis").appendChild(imagenWillis);

  const imagenSyngenta = document.createElement("IMG");
  imagenSyngenta.src = "./assets/syngentalogo.webp";

  imagenSyngenta.alt = "imagen empresa Syngenta";
  document.querySelector("#syngenta").appendChild(imagenSyngenta);

  const imagenRedlink = document.createElement("IMG");
  imagenRedlink.src = "./assets/1024px-Red_link_logo.svg.webp";
  imagenRedlink.style = "width: 80px; height: auto;";
  imagenRedlink.alt = "imagen empresa RedLink";
  document.querySelector("#redlink").appendChild(imagenRedlink);

  const imagenInta = document.createElement("IMG");
  imagenInta.src = "./assets/inta-logo.webp";
  imagenInta.style = "width: 150px; margin-left: -3rem";

  imagenInta.alt = "imagen empresa INTA";
  document.querySelector("#inta").appendChild(imagenInta);

  const imagenClientes = document.createElement("IMG");
  imagenClientes.src = "./assets/bannerclientescolor.webp";
  imagenClientes.style = "max-width: 100%; width:100%; height: auto";
  imagenClientes.alt = "imagen Clientes";
  document.querySelector("#clientesImg").appendChild(imagenClientes);
}

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
