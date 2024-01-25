function mostrarMenu(){

  let menuMobile = document.querySelector('.menu-mobile');
  let iconeAberto = document.querySelector('.icone-aberto');
  let iconeFechado = document.querySelector('.icone-fechado');

  if (menuMobile.classList.contains('aberto')){
    menuMobile.classList.remove('aberto');
    iconeFechado.style.display = 'flex';
    iconeAberto.style.display = 'none';
  } else {
    menuMobile.classList.add('aberto');
    iconeFechado.style.display = 'none';
    iconeAberto.style.display = 'flex';
  }

}

$(document).ready(function(){

  $.get("../padroes/nav.html", function(navbar){

    var nav = $(navbar);

    $("#navbar").replaceWith(nav);

  });

});

$(document).ready(function(){

  $.get("../padroes/footer.html", function(footer){

    var footer = $(footer);

    $("#footer").replaceWith(footer);

  });
  
});

$(document).ready(function(){

  $.get("../padroes/tradutor.html", function(tradutor){

    var tradutor = $(tradutor);

    $("#tradutor").replaceWith(tradutor);

  });

});

$(document).ready(function(){

  $.get("../padroes/libras.html", function(libras){

    var libras = $(libras);

    $("#libras").replaceWith(libras);

  });

});

/*$(document).ready(function(){

  $.get("../arq_pad/footer.html", function(footer){
    $("#footer").html(footer);
  });

});*/

/*$(document).ready(function (){

  $("#footer").load("../arq_pad/footer.html");

});*/