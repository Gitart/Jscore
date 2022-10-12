## Node.js:

```js
var fs = require('fs');
fs.writeFile("test.txt", jsonData, function(err) {
    if (err) {
        console.log(err);
    }
});
```

## Browser (webapi):
```js
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

download(jsonData, 'json.txt', 'text/plain');
```
