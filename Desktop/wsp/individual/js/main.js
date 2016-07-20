/*Escritura en el chat*/

$('.avatar').click(function(){
    $('.w-message-list').empty()
})

$(document).ready(function(){
    $('#mainInput').keypress(function(e){
        if(e.which == 13){
            var value = $('#mainInput').val()
            var time = new Date(),
            hours = time.getHours(),
            minutes = time.getMinutes()
            $('.w-message-list').append('<div class="w-message w-message-out "><div class="w-message-text"><p>' + value + '</p><div class="time">' + hours + ':' + minutes + '</div></div></div>')
            $('#mainInput').val('')
        }
    });
});

/*busqueda*/

$(document).ready(function(){
    busqueda()
});


$(".w-search-contacts").keyup(function(){
  var texto=$(".w-search-contacts").val()
  $.getJSON("data.json",function(data){
    var output="";
    $.each(data,function(key,val){
      if(val.nombre.toLowerCase().search(texto) != -1 && texto!=""){
      output+="<div class='panel-list-message-contact'><div class='profile-img'><img src='image/"+val.imagen+"'/></div><div class='message-text show-dots'><div class='message-text-detail'><div class='name-contact show-dots'>"+val.nombre+"</div><div class='message-hour '>"+val.mensajes[0].fecha+"</div></div><div class='message-chat show-dots'><p class='show-dots'>"+val.mensajes[0].contenido+"</p></div></div></div>"
      
      }
    })
    $(".panel-contact-chat").html(output)    
  });

});

/*   $(this).text().toLowerCase().indexOf(term.toLowerCase()) > -1     */

function busqueda(){
  $.getJSON("data.json",function(data){
    var output="";
    $.each(data,function(key,val){
      output+="<div class='panel-list-message-contact'><div class='profile-img'><img src='image/"+val.imagen+"'/></div><div class='message-text show-dots'><div class='message-text-detail'><div class='name-contact show-dots'>"+val.nombre+"</div><div class='message-hour '>"+val.mensajes[0].fecha+"</div></div><div class='message-chat show-dots'><p class='show-dots'>"+val.mensajes[0].contenido+"</p></div></div></div>"

    })
    $(".panel-contact-chat").html(output)
    
  });
}


/*cargar imagenes*/

$(window).on('load',function(){

 $(function() {
  $('#file-input').change(function(e) {
    
      addImage(e); 
     });

     function addImage(e){
      
      var file = e.target.files[0],
      imageType = /image.*/;

      console.log(file);
    
      if (!file.type.match(imageType))
       return;
    //console.log('kjahsdaksjh');
      var reader = new FileReader();
      reader.onload = fileOnload;
      reader.readAsDataURL(file);
     }

  
     function fileOnload(e) {
      var result=e.target.result;
      $('#imgSalida').attr("src",result);

     
            var time = new Date(),
            hours = time.getHours(),
            minutes = time.getMinutes()
            $('.w-message-list').append('<div class="w-message w-message-out "><div class="w-message-text"><img src="' + result + '" /></p><div class="time">' + hours + ':' + minutes + '</div></div></div>')
            $('#mainInput').val('')

     }
    });
  });