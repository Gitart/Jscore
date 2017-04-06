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
 
## Else one sample

Here we go :

```javascript
 var jsonArray = [{
   "id": "1",
   "alphabet": "a"
 }, {
   "id": "2",
   "alphabet": "b"
 }, {
   "id": "3",
   "alphabet": "c"
 }, {
   "id": "4",
   "alphabet": "d"
 }, {
   "id": "5",
   "alphabet": "e"
 }];


 $.each(jsonArray, function(index, object) {
   alert(object.alphabet);
 });
 ```
 
Play at : http://codepen.io/anon/pen/JdeyZr

Sometimes, JQuery will complain(in console log) that the JSON array is not properly formatted. This is usually caused by malformed JSON string. To fix this issue, use the JQuery's parseJSON() function to parse the JSON array.  

## Links
http://api.jquery.com/jQuery.parseJSON/    
http://api.jquery.com/jQuery.each/   


