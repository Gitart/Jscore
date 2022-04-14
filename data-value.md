
## Data-value

```html
  <select class="form-select" id="product_id" name="product_id" 
                        data-qt="3444-333" data-id="217496D-P078" >
      alert($("#product_id").attr("data-qt")); 
     alert($("#product_id").data("id")); 
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


