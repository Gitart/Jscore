# Use loadScript with callback

## main.js

```js  
    loadScript("/static/js/alert.js",
        function() {
               step1()
               step3()
          }
        )
```

```js
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
```


## alert.js
```js
alert("Alert")


function step1() {
    alert("Alert2")
}


function step3() {
    alert("Step3")
}
```
