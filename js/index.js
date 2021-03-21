var countSVG = 0;

var SVGSrcArray = [ 
'assets/svg/lampada.svg',
'assets/svg/lampada_apagada.svg',
];

function mode(){
  if(countSVG == SVGSrcArray.length){
    countSVG = 0;
    document.getElementById("svgMode").src=SVGSrcArray[countSVG]; 
  }
  else{
    document.getElementById("svgMode").src=SVGSrcArray[countSVG+1]; 
    countSVG = countSVG + 2;
  }
  $(document).ready(function() {
    $("#svgMode").click(function(){
         if(countSVG == SVGSrcArray.length){
          $("body").removeClass("escuro");
          $("header").removeClass("headerEscuro");
          $("#menu").removeClass("menuEscuro");
          $("#futuro").removeClass("futuroEscuro");
          $("#sobre").removeClass("sobreEscuro");
          
          $("#menu").addClass("menuClaro");
          $("body").addClass("claro");
          $("header").addClass("headerClaro");
          $("#futuro").addClass("futuroClaro");
          $("#sobre").addClass("sobreClaro");

         }
         else{
          $("body").removeClass("claro");
          $("header").removeClass("headerClaro");
          $("#menu").removeClass("menuClaro");
          $("#futuro").removeClass("futuroClaro");
          $("#sobre").removeClass("sobreClaro");

          $("body").addClass("escuro");
          $("header").addClass("headerEscuro");
          $("#futuro").addClass("futuroEscuro");
          $("#sobre").addClass("sobreEscuro");
          $("#menu").addClass("menuEscuro");

         }
      });

     
  });
}

$(function () {
  $(document).ready(function(){
    $("#phone").mouseenter(function (){
      $(this).removeClass("outZoom");

        $(this).addClass("zoomIn");

    });
    $("#phone").mouseleave(function (){
      $(this).removeClass("zoomIn");

      $(this).addClass("outZoom");
      
    })
  })
})
