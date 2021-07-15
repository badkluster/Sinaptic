$("document").ready(function () {
  //ANIMACIÓN DE "REVELACIÓN" DE TEXTO.

  /* Guardo en la variable "profesion" la etiqueta que contiene el texto 
    al cual quiero aplicar el efecto de revelado.*/
  const profesion = baffle(".profesion");

  /* Le asigno a la variable profesión (que contiene el texto que quiero animar) los caracteres a utilizar para 
    la animación del texto revelado (puedes utilizar cualquier tipo de carácteres). También asigno la velocidad que tendrá el efecto de las letras*/

  // Ejecuto el inicio de la animacion.
  profesion.start();
  // Establezco la duración que tendrá la animación antes de revelar el texto.
  profesion.reveal(3000);

  $("#tagline").t({
    beep: false,
    caret: '<span style="color:green;">|</span>',
    typing: function (elm, chr) {
      if (chr.match(/\-trigger/)) $("#pow-txt").show().delay(500).fadeOut(0);
    },
  });
});
