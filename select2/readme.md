## SELECT2
https://select2.org/getting-started/installation 

## Idea 
1. Selet2 - val - table by ID in field choice -> 1,3,4,...
2. Get all records from other table by filter IN (1,3,4,...)

### Using Select2 from a CDN
```js
<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
```

## 💥 Work with botsrap modal window
```js
$(document).ready(function () {
			  
				$('#mySelect').select2({
				    dropdownParent: $('#prodwindows')
			    });
})
})
```

## JS
```js
$(document).ready(function () {
				$('#mySelect').select2({
				    dropdownParent: $('#prodwindows')
			    });
			
			    var ap=[]
			
			    // Get selected elements
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
#Programmatic control
### Opening the dropdown
Methods handled directly by Select2 can be invoked by passing the name of the method to .select2(...).
The open method will cause the dropdown menu to open, displaying the selectable options:
```js
$('#mySelect2').select2('open');
```

### Closing the dropdown
The close method will cause the dropdown menu to close, hiding the selectable options:
```js
$('#mySelect2').select2('close');
```

### Checking if the plugin is initialized
To test whether Select2 has been initialized on a particular DOM element, you can check for the select2-hidden-accessible class:

```js
if ($('#mySelect2').hasClass("select2-hidden-accessible")) {
    // Select2 has been initialized
}
```

### Destroying the Select2 control
The destroy method will remove the Select2 widget from the target element. It will revert back to a standard select control:
```js
$('#mySelect2').select2('destroy');
```

### Event unbinding
When you destroy a Select2 control, Select2 will only unbind the events that were automatically bound by the plugin. Any events that you bind in your own code, including any Select2 events that you explicitly bind, will need to be unbound manually using the .off jQuery method:

```js
// Set up a Select2 control
$('#example').select2();

// Bind an event
$('#example').on('select2:select', function (e) { 
    console.log('select event');
});

// Destroy Select2
$('#example').select2('destroy');

// Unbind the event
$('#example').off('select2:select');
```
### Example
```js
var $example = $(".js-example-programmatic").select2();
var $exampleMulti = $(".js-example-programmatic-multi").select2();

$(".js-programmatic-set-val").on("click", function () {
    $example.val("CA").trigger("change");
});

$(".js-programmatic-open").on("click", function () {
    $example.select2("open");
});

$(".js-programmatic-close").on("click", function () {
    $example.select2("close");
});

$(".js-programmatic-init").on("click", function () {
    $example.select2();
});

$(".js-programmatic-destroy").on("click", function () {
    $example.select2("destroy");
});

$(".js-programmatic-multi-set-val").on("click", function () {
    $exampleMulti.val(["CA", "AL"]).trigger("change");
});

$(".js-programmatic-multi-clear").on("click", function () {
    $exampleMulti.val(null).trigger("change");
});
```


# Retrieving selections
## Using the data method
Calling select2('data') will return a JavaScript array of objects representing the current selection. Each object will contain all of the properties/values that were in the source data objects passed through processResults and templateResult callbacks.
```
$('#mySelect2').select2('data');
```

## Using a jQuery selector
Selected items can also be accessed via the :selected jQuery selector:
```js
$('#mySelect2').find(':selected');
```
It is possible to extend the <option> elements representing the current selection(s) with HTML data-* attributes to contain arbitrary data from the source data objects:

```js
$('#mySelect2').select2({
  // ...
  templateSelection: function (data, container) {
    // Add custom attributes to the <option> tag for the selected option
    $(data.element).attr('data-custom-attribute', data.customValue);
    return data.text;
  }
});

// Retrieve custom attribute value of the first selected element
$('#mySelect2').find(':selected').data('custom-attribute');
```
































