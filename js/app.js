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

// SCROLL SUAVE
(function () // Code in a function to create an isolate scope
{
  var speed = 1500;
  var moving_frequency = 15; // Affects performance !
  var links = document.getElementsByTagName("a");
  var href;
  for (var i = 0; i < links.length; i++) {
    href =
      links[i].attributes.href === undefined
        ? null
        : links[i].attributes.href.nodeValue.toString();
    if (href !== null && href.length > 1 && href.substr(0, 1) == "#") {
      links[i].onclick = function () {
        var element;
        var href = this.attributes.href.nodeValue.toString();
        if ((element = document.getElementById(href.substr(1)))) {
          var hop_count = speed / moving_frequency;
          var getScrollTopDocumentAtBegin = getScrollTopDocument();
          var gap =
            (getScrollTopElement(element) - getScrollTopDocumentAtBegin) /
            hop_count;

          for (var i = 1; i <= hop_count; i++) {
            (function () {
              var hop_top_position = gap * i;
              setTimeout(function () {
                window.scrollTo(
                  0,
                  hop_top_position + getScrollTopDocumentAtBegin
                );
              }, moving_frequency * i);
            })();
          }
        }

        return false;
      };
    }
  }

  var getScrollTopElement = function (e) {
    var top = 0;

    while (e.offsetParent != undefined && e.offsetParent != null) {
      top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
      e = e.offsetParent;
    }

    return top;
  };

  var getScrollTopDocument = function () {
    return document.documentElement.scrollTop + document.body.scrollTop;
  };
})();
