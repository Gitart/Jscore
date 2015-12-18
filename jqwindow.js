/******************************************************************
    Савченко Артур 
    25-02-2012 21:24
    JQ Window с передачей аргументов
 ******************************************************************/
function alertbox(title, notifi)
{
  // Зоголовок окна
     document.getElementById('dialog-modal').title=title;
  // Содержимое
     document.getElementById('Remarksforwindow').innerHTML=notifi;
 $("#dialog-modal" ).dialog(
{
 			modal         : true,
            height        : 300,
            width         : 460, 
            resizable     : true,
            draggable     : true,
            closeOnEscape : true,
            show          : 'pulsate',
buttons:
      {
         "Ок": function()
             {
            $(this).dialog("close");
             },
         "Сanceled": function()
            {
              $(this).dialog("close");
             }
             },
            hide          : 'explode'
	   	                  }
);
}
