// Save cookies
function loadcookies()
		{
			var cookieName  = 'HelloWorld';
			var cookieValue = 'HelloWorld';
			var myDate = new Date();
			myDate.setMonth(myDate.getMonth() + 12);
			document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate  + ";path=/";
			document.cookie = "service=headoffice;expires=2016-06-11:14:00;path=/";
		}
