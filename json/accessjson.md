## Javascript : Access JSON data example

Problem:
You have a JSON string such as below and you want to access the data individually via Javascript.   
How to access the JSON data with Javascript?  

```json
 {
 	"name": "adamng",
 	"age": 38,
 	"address": {
 		"street": "108 Street",
 		"city": "Singapore"
 	},
 	"email": [{
 		"type": "personal",
 		"address": "adamng@somewherepersonal.com"
 	}, {
 		"type": "business",
 		"address": "adamng@someworkplace.com"
 	}]
 }
 ```
 
Solution:

Use JSON.Parse() to parse(process) the JSON string into a Javascript JSON Object and access the data via the JSON object.
Here you go!
Save this block of code into test.html file and view it with your browser.

```
 <html>
 <script>
     var JSONdata = '{"name": "adamng","age": 38,"address": {"street": "108 Street",	"city": "Singapore"	},"email": [{"type": "personal","address": "adamng@somewherepersonal.com"}, {"type": "business","address": "adamng@someworkplace.com"}]}';

 	var JSONObject = JSON.parse(JSONdata);

     // retrieve the name
 	alert("Name :"+JSONObject["name"]); 
 	alert(JSONObject.name); 

     // retrieve the age
 	alert(JSONObject["age"]); 
 	alert(JSONObject.age); 

 	alert(JSONObject.address.street);
 	alert(JSONObject["address"].city); 

     // access the first email object properties
 	alert(JSONObject.email[0].address); 

     // access the second email object properties
 	alert(JSONObject.email[1].type);

 </script>
 </html>
 ```
