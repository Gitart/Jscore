## Checked

```js
  var t;
  var tt; 

 	// *******************************************************
	// Выбор-отмена снятие всех галочек
	// *******************************************************
	function Checkallbox(Chkmain){
	    var Chh = Chkmain.checked;
		if (Chh==false) 
		   {$('.myCheckBox').each(function(){this.checked = false;});}
		else	
	  	   {$('.myCheckBox').each(function(){this.checked = true;});}
	}

  // *******************************************************
	// Calculation 
	// *******************************************************
	function Checkpoint2(id){
		// alert(id.id); 
		// alert(id.checked);
		if (id.checked==true){
		  t+= id.id + ";" ;
		}else{
		  t=id.id + ";" ;
		}
	}
	
  // *******************************************************
  // Условие для добавления 						 
  // *******************************************************
	 function Checkpoint() {
	    tt = "";    
		var chks = document.getElementById("aplanner").getElementsByTagName("input");
        for (var i=0; i<chks.length; i++) 
			{
                if (chks[i].type == "checkbox" &  chks[i].checked==true)
				   {
		                tt=tt+chks[i].id;
			   	   }
            }
	}

  // *******************************************************			 
	// Запуск расета по одной точке
	// *******************************************************
	function Calculationkpoint(Corp, Struct) {
		var Ur="/need/calculation/"+Corp+"*"+Struct+"*10";
        $.ajax({ url   : Ur,
                 async : true,
                 cache : false,

        	   beforeSend:function(){                          
                                    $("#P11").html("<H4> Начало расчета " + Struct + " .</H4>");
                                    $("#P11").slideUp(1000).delay(500).fadeIn(300);
                                    },
                success: function(data) {
		                            var NoteDone  = "<H4> Потребность по точке № "  + data + " " + Struct + " расчитана. </H4>";
						                    var st = "ch_" + Struct;
						                    var dd = document.getElementById(st).checked = false;

					                       $("#Pnot").html(NoteDone);
					  	                   $("#Notifys").show(2000).delay(5000).hide(100); 
					  	                   $("#P11").hide(200);
					  	                   Inform();
                                    },
                    fail:function() {                          
                                       $("#Pnot").html("Ошибка при расчете. Проверьте подключение к интеренту и настройки для расчета потребности.");
					  	                         $("#Notifys").show(2000); 
                                    },
                  always:function() {                          
                                       $("#Notifys").delay(500).hide(100); 

                                     },

                ajaxStop:function() {                          
                                       $("#P11").html("<H4> STOP  !!</H4>");
                                       $("#P11").slideUp(1000).delay(500).fadeIn(300);
                                    }              
               });
	}

  // *******************************************************			 
	// Запуск расета по одной точке
	// *******************************************************
	function Calculationkpoint_old(Corp, Struct) {

		var Ur="/need/calculation/"+Corp+"*"+Struct+"*10";
        $("#P11").html("<H4> Начало расчета " + Struct + " .</H4>");
        $("#P11").slideUp(1000).delay(500).fadeIn(300);



		$.ajax(Ur)
			.done(function() {
				  var NoteDone  = "<H4> Точка : "       + Struct + " расчитана.</H4>";
				  var st = "ch_"+Struct;
				  var dd = document.getElementById(st).checked = false;

			      $("#Pnot").html(NoteDone);
			  	  $("#Notifys").show(2000).delay(5000).hide(100); 
				})
			.fail(function() {
				//$("#Notifys").fadeIn();
			})
			.always(function() {
				// alert( "complete" );
				// $("#Notifys").show();
			});
	}
			 
	// *******************************************************		 
	// Запуск расчета сразу по всем точкам	 
	// *******************************************************
	function Alls() {
		//var tx=$("input:checkbox:checked");
		$('.myCheckBox').each(function() { // find all checkboxes
            var p=$(this).value();
			alert();
          });
    }
		
    // *******************************************************		
	// Запуск расчета сразу по всем точкам	 
	// *******************************************************
	function Calculationall() {
				// http://10.0.3.24:5555/need/calcall/
				// http://10.0.3.24:5555/need/checkreport/C3*11701938
				// /need/calculation/C3*A_1923536*10
	    $("#P11").html("<H4> Начало расчета по всем точкам </H4>");
        $("#P11").show(1000).delay(500).hide(300);


		$.ajax("/need/calcall/10")
			.done(function() {
				 $("#Notifys").html("Расчет окончен по всем точкам.");
				 $("#Notifys").show(1000).delay(500).hide(300);  
				})
			.fail(function() {
                $("#Notifys").html("Ошибка расчета.");
			    $("#Notifys").show(2000).delay(500).hide(300); 
			})
			.always(function() {
				// alert( "complete" );
				// $("#Notify").show();
			});
	}

  // *******************************************************
	// Преобразование в string
	// *******************************************************
	function Previewpoin(C,S,T)
	{
	    S=S.toString();
		var V = "";
		
		V="/need/preview/"+C+"*"+S;
	    //V="/need/calcreport/"+C+"*"+S;
		T.href=V;
	}

    // *******************************************************
    // Расчет по выбранным точкам 
    // *******************************************************
    function CheckAll()
    {

       var tab   = document.getElementById  ("aplanner"); 
       var elems = tab.getElementsByTagName ("input");
       var len   = elems.length;

       for ( var i = 0; i < len; i++ )
           {
    	     if (elems[i].type == "checkbox" )
    	        {
			      if (elems[i].checked == true)
			         {
				       var res=elems[i].id.replace("ch_","");
			           
			           Calculationkpoint("C3", res);
			         }
           	    }
            }
    }

    // *******************************************************
    // Очистка статуса
    // *******************************************************
    function Clearstatus(Corp,Key){
    	    var v="/need/clearstatus/"+Corp+"*"+Key;

    		$.ajax(v)
			.done(function(data) {
				 $("#Notifys").html(data);
				 $("#Notifys").show(1000).delay(500).hide(300);  
				})
			.fail(function() {
                $("#Notifys").html("Ошибка расчета.");
			    $("#Notifys").show(2000).delay(500).hide(300); 
			});

            $("#aplaner").load(location.href + "#aplaner");  
    }



    function Inform(){
    	  //$("#aplanner").load(location.href + " #aplanner");  
    	  $("#aplanner").load(location.href + " #aplanner").fadeIn("slow");    	    
          //$('#loaddiv').fadeOut('slow').load('reload.php').fadeIn("slow");}, 20000);    	  
    }        
```

