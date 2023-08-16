# Fetch

```js
function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
```

## Get data and save
```js

// Locations
function GetLocation() {
    url='/liststock/list'

    var dat
    fetchData(url).then(data => {
         localStorage.setItem("k", JSON.stringify(data))
         console.log(dat);
    });


    var d = localStorage.getItem("k");
    var parsedData = JSON.parse(d);

    console.log(parsedData);
```
## Fetch to map
```js

    var dd2 = fetch('/liststock/list')
        .then(response => response.json())
        .then(data => {

                // Here, 'data' contains the JSON result
                //console.log(JSON.stringify(data))
                // console.log(data.find(v=>v.location_id===19))
                var tt=data.map(v =>`${v.title}, ${v.location_id}`).join("<hr>")
                $("#inres").html(tt)

                console.log( tt )
            return data

            }

        )
        .catch(error => {
            console.error('Error:', error);
        });

    console.log(dd2.PromiseResult);
```


