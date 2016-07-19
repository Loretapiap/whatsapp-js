/*Escritura en el chat*/

/****Ahora que borre todos los emojis no me funciona el enviar ): lo siento ****/
/*
$(document).ready(function(){
    $('.w-write-message-field').keypress(function(e){
        if(e.which == 13){
            var value = $('.w-write-message-field').val()
            var time = new Date(),
            hours = time.getHours(),
            minutes = time.getMinutes()
            $('.w-message-list').append('<div class="w-message w-message-out "><div class="w-message-text"><p>' + value + '</p><div class="time">' + hours + ':' + minutes + '</div></div></div>')
            $('#mainInput').val('')
        }
    })
})

$('.avatar').click(function(){
    $('.w-message-list').empty()
})
/*nuevos*/


$(document).ready(function(){
    llenado()
});


$("#search").keyup(function(){
  var texto=$("#search").val()
  $.getJSON("data.json",function(data){
    var output="";
    $.each(data,function(key,val){
      if(val.nombre.search(texto) != -1 && texto!=""){
      output+="<div class='panel-list-message-contact'><div class='profile-img'><img src='image/"+val.imagen+"'/></div><div class='message-text show-dots'><div class='message-text-detail'><div class='name-contact show-dots'>"+val.nombre+"</div><div class='message-hour '>"+val.mensajes[0].fecha+"</div></div><div class='message-chat show-dots'><p class='show-dots'>"+val.mensajes[0].contenido+"</p></div></div></div>"
      
      }
    })
    $(".w-search-contacts").html(output)
  });

});

function llenado(){
  $.getJSON("data.json",function(data){
    var output="";
    $.each(data,function(key,val){
      output+="<div class='panel-list-message-contact'><div class='profile-img'><img src='image/"+val.imagen+"'/></div><div class='message-text show-dots'><div class='message-text-detail'><div class='name-contact show-dots'>"+val.nombre+"</div><div class='message-hour '>"+val.mensajes[0].fecha+"</div></div><div class='message-chat show-dots'><p class='show-dots'>"+val.mensajes[0].contenido+"</p></div></div></div>"

    })
    $(".w-search-contacts").html(output)
    
  });
}


/*cargar imagenes*/

$(window).load(function(){

 $(function() {
  $('#file-input').change(function(e) {
      addImage(e); 
     });

     function addImage(e){
      var file = e.target.files[0],
      imageType = /image.*/;
    
      if (!file.type.match(imageType))
       return;
  
      var reader = new FileReader();
      reader.onload = fileOnload;
      reader.readAsDataURL(file);
     }

  
     function fileOnload(e) {
      var result=e.target.result;
      $('#imgSalida').attr("src",result);
     }
    });
  });

/*nuevos*/


