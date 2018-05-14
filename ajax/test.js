
// Post form serialize;

$.ajax({type:'POST',
        url:'/intesiv/',
        data: $('#formcontact').serialize(),
        success:function(response){
               $('#formcontact').find('.formre').html(response);
        }});
        
        
// Reset
$(document).ready(function(){
  $('#formid')[0].reset();
)

// Scrool bar
  $('#formid').mCustomScroollbar({
  theme:'rnima';
  })
  
  // Onclick
  $('#formid').on('click', function(){
       $('#id')
  })
  
  
  
