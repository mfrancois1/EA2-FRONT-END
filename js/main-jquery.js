// Cambiar contenido de Etiqueta h1
    // Con JavaScript Puro
    //console.log("Pagina Funcionando")
    //document.getElementById('Titulo').innerHTML = "TITULO DE PAGINA";
   

// Incorporar Libreria JQuery

$(document).ready(function(){
    console.log("Pagina Funcionando")
    
    
    //SELECCIONAR ELEMENTOS HTML
    $('h1').html('Texto Modificado por Etiqueta');
    $('#Titulo').html('Texto Modificado por su ide');
    $(".display-3").html('Texto Modificado por su clase');
    $('#Titulo').html('Le Contour de Notre Lutterature Haitienne');
    
    // AGREGAR CLASE  [ jq.classAdd ]
    $('h1').addClass('text-center text-uppercase');
    $('#p2').addClass('text-danger');
    
    // QUITAR CLASE  [ jq.classRemove ]
    $('#parrafos').removeClass('display-5');
    // AGREGAR ELEMENTO [ jq.Append ]
   
    $('#parrafos').append('<p> Cuarto Parrafos agregado desde jquery');
    // QUITAR ELEMENTO [ jq.Remove ]
    //$('#p3').remove();
   
    // MODIFICAR PROPIEDADES CSS [ jqCssSet ]
    $('#p1').css('color', 'blue');
    $('#p3').css({color:'blue', background:'pink', padding:'20px'});
    
    // METODO attr()      [ jqAttrSet]
    $('img').attr('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGjalux5mktqSQvtLdYbn2ExIkti1UVnJSrQ&usqp=CAU')
    $('img').attr('width', '250px');
    // EVENTOS CON JQUERY
    //Evento click Agregando clase
    
    //Evento click Agregando estilo en css
    
    //Alternativa al evento click

})