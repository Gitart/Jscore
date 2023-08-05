## SELECT2
https://select2.org/getting-started/installation 

### Using Select2 from a CDN
```js
<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
```

## JS
```js
$(document).ready(function () {
				$('#mySelect').select2({
				    dropdownParent: $('#prodwindows')
			    });
			
			    var ap=[]
			
			    // Get selected choice element
			    $('#mySelect').on('change', function () {
				    var selectedData = $('#mySelect').select2('data');
				    console.log(selectedData[0].text);
				
				    var selectedData3 = $('#mySelect').val()
				    console.log(selectedData3)
				
				    // Sample JSON data to be sent to the server
				    var jsonData = {id:280, ei: `${selectedData3}`};
				    var cl=JSON.stringify(jsonData)
				    //console.log(cl)
				
				    // Make the AJAX POST request
				    $.ajax({
					    url: '/product/upd', // Replace with your server URL to handle the POST request
					    type: 'POST',
					    data: JSON.stringify(jsonData),
					    contentType: 'application/json', // Set the content type to JSON
					    dataType: 'json', // Expect JSON data in the response from the server
					    success: function (response) {
						    // Handle the success response from the server
						    console.log('Server Response:', response);
					    },
					    error: function (xhr, status, error) {
						    // Handle any errors that occurred during the AJAX request
						    console.error('Error:', error);
					    }
				    });
				
				    // Access selected ID: selectedData[0].id
				    // Access selected text: selectedData[0].text
			    });
			
		    });

		    function Getselect(){
			    var cc= $('#mySelect').val()
			    console.log(cc)
			
			    
				 var ng = "200,220,280,4";
			     var ars = ng.split(',').map(Number);
			     $('#mySelect').val(ars);
			     $('#mySelect').trigger('change');
		    }
</script>
```

## SQL
#### From array
```sql
  SELECT * FROM products WHERE FIND_IN_SET(id,'23,44,444' );
```

#### From field from table
```sql
SELECT * FROM products WHERE FIND_IN_SET(id, (SELECT ei FROM products WHERE id=280));
```







