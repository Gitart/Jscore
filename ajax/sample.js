/ 
// Update calculation data
// 
function Updatecalculation(){


//var Ur="http://10.0.3.24:5555/need/updatemanual/C3*100634990";
U=window.location.href.split('/');
var Corp=U[5].split('*')[0];
var St = U[5].split('*')[1];
var Ur="http://10.0.3.24:5555/need/updatemanual/" + Corp + "*" + St;


$.ajax({ url :       Ur,
               async : false,
               cache : true,
               beforeSend: function(){ 
               $("#Notifys").html("<H4> Обновление количества расчетными данными сервиса. </H4>");
               $("#Notifys").slideUp(1000).delay(500).fadeIn(300);
               },
success: function(data) {
                $("#Notifys").show(2000).delay(5000).hide(100); 
                $("#aplanner").load(location.href + " #aplanner").fadeIn("slow"); 
                },
fail: function() { 
                $("#Pnot").html("Ошибка при расчете. Проверьте подключение к интеренту и настройки для расчета потребности.");
                $("#Notifys").show(2000); 
},
always: function() { 
                 $("#Notifys").delay(500).hide(100); 
},

ajaxStop: function() { 

                     } 
});

}
