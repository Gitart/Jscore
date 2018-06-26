
## Sample

```js
var payload = {
    a: 1,
    b: 2
};

var data = new FormData();
data.append( "json", JSON.stringify( payload ) );

fetch("/echo/json/",
{
    method: "POST",
    body: data
})
.then(function(res){ return res.json(); })
.then(function(data){ alert( JSON.stringify( data ) ) })
```
