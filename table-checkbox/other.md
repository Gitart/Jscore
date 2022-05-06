## Other variant

**and check by** 
```js
$('id of the checkbox')[0].checked = true
and uncheck by ,

$('id of the checkbox')[0].checked = false
```

## For elements
```js
//for one element: 
document.querySelector('.myCheckBox').checked = true  //will select the first matched element
document.querySelector('.myCheckBox').checked = false//will unselect the first matched element

//for multiple elements:
for (const checkbox of document.querySelectorAll('.myCheckBox')) {
//iterating over all matched elements

checkbox.checked = true //for selection
checkbox.checked = false //for unselection
}
```
