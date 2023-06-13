# Centered a div
![image](https://github.com/Gitart/Jscore/assets/3950155/7b749a87-2b19-4f47-a606-12974bf31e76)

### JS
```js
 // Hidden
function showAndHideDiv() {

  // Hide after 5 seconds
  setTimeout(function() {
    centeredDiv.style.display = "none";
  }, 5000);
}


function StartWindow(text) {
var centeredDiv = document.getElementById("centeredDiv");
centeredDiv.style.display = "block";
centeredDiv.innerHTML = text;

// Show after 5 sec
showAndHideDiv();
}
```

### CSS
```css
 #centeredDiv {
            position         : fixed;
            top              : 50% ;
            left             : 50% ;
            transform        : translate(-50%, -50%);
            background-color : #fd7e14 ;
            padding          : 20px ;
            display          : none;
            border-radius    : 5px;
            z-index          : 1000;
            color            : white;
            font-size        : 17px;
            width            : 500px;
            text-align       : center;
            height           : auto;
            min-height       : 100px;

            -webkit-box-shadow: 10px 10px 41px 4px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 41px 4px rgba(0,0,0,0.75);
            box-shadow: 10px 10px 41px 4px rgba(0,0,0,0.75);
        }
```        

### Html
```html
 <div id="centeredDiv"></div>
```
