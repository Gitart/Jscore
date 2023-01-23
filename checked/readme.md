## Loop all check boxes

```js
$('input[name="locationthemes"]:checked').each(function() {
       console.log("------" + this.value + " id " + this.id) ;
 });
``` 
