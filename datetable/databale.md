## Databale

### THE MARKUP
We have to setup a place where our information is going to appear so basically we only need to make our table where the data will be display. This is the basic html that we need.

```html
<table id="resultTable">
 	<thead>
 		<tr>
 			<th>Employee id</th>
 			<th>Name</th>
 			<th>Email</th>
 			<th>Telephone</th>
 		</tr>
 	</thead>
 	<tbody>
 		<tr>
 			<td>1</td>
 			<td>Dennis Ritchie</td>
 			<td>dritchie@bell.com</td>
 			<td>555-154-8745</td>
 		</tr>
 	</tbody>
 </table>
 ```
 
 
### ADDING THE RESOURCES
Now that you have setup the code for the table we have to add the resources previously downloaded. To complete this, add the following code in your header or before the closing body tag.
 
```js
<link rel="stylesheet" href="css/datatables.min.css"/>
<script src="js/jquery-1.11.3.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/datatables.min.js"></script>
<script src="js/app.js"></script>
```



### RUNNING JQUERY DATATABLES.
Applying the jQuery datatables plugin is very easy, just like any other jQuery plugin you have to initialize it. Remember that in the HTML table we setup the class id resultTable, so we are going to use that as our selector.


app.js
```js
/*
	Script to handle the Datatables Plugin.
	@author Reedyseth
	@since 10-Nov-2015
*/
$(document).ready(function() {
	$('#resultTable').DataTable();
});
```

### MANY RECORDS
In the beginning  of this post I mentioned that using jQuery datatables is for the purpose of controlling many records in our application, if we don't do that then we will end up with a table with huge scrolling. Add many records into the employee table using you database editor or manually using the MySQL console, on this point section we are not going to write the records into hour html table, instead we are going to retrieve all this information from our database.
I have created some other tutoriales to fetch information with Ajax so you could take a look at Ajax usage to search a Record with PHP, MySQL and jQuery or this other tutorial Find a Record with Ajax and jQuery UI Autocomplete, PHP, MySQL and Json – Part 1.
This is the code to retrieve the information with jQuery Ajax, the server side code I leave it to you for the implementation or you can purchase the code that includes the design that you see on the images as well as all the complete database structure and with all the records.

```html
/*
	Script to handle the Datatables Plugin.
	@author Reedyseth
	@since 10-Nov-2015
*/
$(document).ready(function() {
 
	$.ajax({
		url:       "php/retrieveEmployees.php",
		dataType:  "json",
		success:   function(response){
			var tbody = "";
			for (var i = 0; i < response.length - 1; i++) {
				tbody += "<tr>" +
   			  	         "<td><a href='#'>"+ response[i].employee_id +"</a></td>"+
					 "<td>"+ response[i].name +"</td>"+
					 "<td>"+ response[i].email +"</td>"+
					 "<td>"+ response[i].telephone +"</td>"+
					 "</tr>";
			};
 
			$('.resultTable tbody').html( tbody );
 			$('#resultTable').DataTable();
		}
	});
});
//
```


### The table above has many records and is using the jQuery Datatables in Action, there are 5 elements that are given by default:

Dropdown to select the number of records to be displayed.
You can search information on the table itselft by using this input area.
You can sort the records
A Legend that displays the number of records been displayed as well as the total.
A Paginator where you can jump to any page that you desire.
Implementing the plugin Datatables is not a complex thing, customizing the plugin make the things interesting. On future post I will be showing how to add or remove the elements of the Datatables or also adding filters/custom input areas on the headers of the table so that you can search by column and not globally, also I will be showing who to load information on the Datatables dynamically using Ajax, this is to avoid a heavy request to the server when there are many records on the database.

FINAL RAW CODE

```html

<!doctype html>
<html>
    <head>
        <title>jQuery Datatables</title>
        <link rel="stylesheet" href="css/datatables.min.css"/>
    </head>
    <body>
 
    	<table id="resultTable" class="table table-striped resultTable">
	        <thead>
	            <tr>
	                <th>Employee ID</th>
	                <th>Name</th>
	                <th>Email</th>
	                <th>Telephone</th>
	            </tr>
	        </thead>
	        <tbody>
	        	<tr>
	        	    <td><a href="#">1</a></td>
	        	    <td>Dennis Ritchie</td>
	        	    <td>dritchie@bell.com</td>
	        	    <td>555-154-8745</td>
	        	</tr>
	        	<tr>
	        	    <td><a href="#">2</a></td>
	        	    <td>Ken Thompson</td>
	        	    <td>kthompson@bell.com</td>
	        	    <td>555-154-1234</td>
	        	</tr>
	        </tbody>
	    </table>
		<script src="js/jquery-1.11.3.js"></script>
        <script src="js/datatables.min.js"></script>
        <script>
        	$(document).ready(function() {
        		$('#resultTable').DataTable();
        	});
        </script>
    </body>
</html>
```


