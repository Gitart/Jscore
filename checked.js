<script>
function chks(){
        // Установить всем флажок
		var ss=$(':checkbox').prop('checked', true);
}


function unchks(){
    // Установить всем флажок
		var ss=$(':checkbox').prop('checked', false);
}

// Просомотр выделенных кодов
function viewchks(){
       var num = 1;

document.getElementById("sflt").innerHTML =""; 			   

	   
        $("input:checkbox").each(function(){
            if($(this).prop("checked")){
			
			    var tf=this.id.toString()
			    var lg="http://10.0.3.24:5555/api/system/users/del/"+tf
	            document.getElementById("sflt").innerHTML +=lg + "<br>"; 	
              window.location=lg;
				
            }
             num ++;
        });
		
		 
}


</script>
