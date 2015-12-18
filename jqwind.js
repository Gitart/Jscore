/******************************************************************
    Савченко Артур 

    25-02-2012 21:24
    JQ Window без аргументов
 ******************************************************************/
function alertwindow()
{
 $("#dialog-modal" ).dialog({
 			 width        : 140,
			modal         : true,
            height        : 138,
            position      : 'center',
            resizable     : true,
            draggable     : true,
            closeOnEscape : true,
            show          :'fold',
            hide          :'explode'
		});
}
