
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
  } );
  
  new Splide( '.splide' ).mount( window.splide.Extensions );
    
  const splide = new Splide( '.splide', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 2,
    autoScroll: {
    },
       speed: -1,
 } );
  
  splide.mount();

  function abrirNav(){
   document.getElementById("menuOculto").style.width="250px";
    document.getElementById("principal").style.marginLeft="250px";
  } 

  function fecharNav(){
    document.getElementById("menuOculto").style.width="0";
    document.getElementById("principal").style.marginLeft="0";

  }