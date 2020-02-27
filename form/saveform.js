$(document).ready(function() {
	
	//if submit button is clicked
	$('#form4').submit(function () {		
		
		//Get the data from all the fields
		var name4 = $('input[name=name4]');
		
		var tel4 = $('input[name=tel4]');
		var email4 = $('input[name=email4]');
	

		//Simple validation to make sure user entered something
		//If error found, add hightlight class to the text field
		if (name4.val()=='') {
			name4.addClass('hightlight');
			return false;
		} else name4.removeClass('hightlight');
		
		if (tel4.val()=='') {
			tel4.addClass('hightlight');
			return false;
		} else tel4.removeClass('hightlight');
		
		if (email4.val()=='') {
			email4.addClass('hightlight');
			return false;
		} else email4.removeClass('hightlight');
		
		
		
		//organize the data properly
		var data = 'name4=' + name4.val()  + '&tel4=' + 
		tel4.val()+ '&email4=' + email4.val();
		
		//disabled all the text fields
	
		
		//show the loading sign
		$('.loading4').show();
		
		//start the ajax
		$.ajax({
			//this is the php file that processes the data and send mail
			url: "process4.php",	
			
			//GET method is used
			type: "GET",

			//pass the data			
			data: data,		
			
			//Do not cache the page
			cache: false,
			
			//success
			success: function (html) {				
				//if process.php returned 1/true (send mail success)
				if (html==1) {					
					//hide the form
							
				
					//show the success message
					
					
					
					

						$('.loading4').fadeOut('slow');
                     
					$('.done4').fadeIn('slow');
					$('form').fadeOut('slow');
					$('form').fadeIn('slow');
					
					
				//if process.php returned 0/false (send mail failed)
				} else alert('Sorry, unexpected error. Please try again later.');				
			}		
		});
		
		//cancel the submit button default behaviours
		return false;
	});	
});
