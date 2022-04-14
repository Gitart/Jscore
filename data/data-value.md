## Data operation

```js
     <!-- Get index       -->
     $( "button" ).index( this )

      <!-- Get -->
      value = $( "div" ).data( "blah" );
      
      <!--  Set   -->
      $( "div" ).data( "blah", "hello" );
      
      <!-- Set     -->
      $( "div" ).data( "blah", 86 );
    
      <!--Удалить    -->
      $( "div" ).removeData( "blah" );
      
```
## Get js data

```js
var elem = document.createElement( "span" );
$( elem ).data( "foo" ); // undefined
$( elem ).data(); // {}
 
$( elem ).data( "foo", 42 );
$( elem ).data( "foo" ); // 42
$( elem ).data(); // { foo: 42 }
```


## Data-value

```html
  <select class="form-select" id="product_id" name="product_id" 
                        data-qt="3444-333" data-id="217496D-P078" >
      alert($("#product_id").attr("data-qt")); 
     alert($("#product_id").data("id")); 
```
## Data other
```js
<div data-role="page" data-last-value="43" data-hidden="true" data-options='{"name":"John"}'></div>
The following comparisons are all true:

$( "div" ).data( "role" ) === "page";
$( "div" ).data( "lastValue" ) === 43;
$( "div" ).data( "hidden" ) === true;
$( "div" ).data( "options" ).name === "John";
```

## Object

```js
<a id="obj-details" 
       data-value='{"city":"berlin"
                    , "street": "mozart"
                    , "postal_code": "55555"
                    , "country": "DE"
                   }'>test</a>
                   
var obj = JSON.parse($("#obj-details")[0].dataset.value);
var country = obj.country;
$("#obj-details").text(country);
```

## Data value
http://jsfiddle.net/guest271314/6LcfS/

```js
$(document).ready(function() {
  $('button').on('click', function() {
    console.log(this.dataset.id, $(this).data().id, $(this).data('id'));
  });
});
```


```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<tbody>
  <tr>
    <td>
      <button type="button" data-id="1">btn #1</button>
      <button type="button" data-id="2">btn #2</button>
      <br>
    </td>
  </tr>
  <tr>
    <td>
      <button type="button" data-id="3">btn #1</button>
      <button type="button" data-id="4">btn #2</button>
      <br>
    </td>
  </tr>
  <tr>
    <td>
      <button type="button" data-id="5">btn #1</button>
      <button type="button" data-id="6">btn# 2</button>
      <br>
    </td>
  </tr>
  <tr>
    <td>
      <button type="button" data-id="7">btn #1</button>
      <button type="button" data-id="8">btn #2</button>
      <br>
    </td>
  </tr>
</tbody>
```
