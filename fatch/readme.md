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


