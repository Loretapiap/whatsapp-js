/*Escritura en el chat*/

/****Ahora que borre todos los emojis no me funciona el enviar ): lo siento ****/
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
