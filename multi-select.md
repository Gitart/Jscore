## Multiselect

```html

<select class="input" id="workss" multiple style="height:200px">
	<option value="01">eeeee111</option>
	<option value="02">ee11e1ee</option>
	<option value="03">ee333eee</option>
	
</select>
<input type="button" name="" onclick="Sell()" value="Tes select">

```


```js
function Sell(){
       	   var options = document.getElementById('workss').selectedOptions;
           var values = Array.from(options).map(({ value }) => value);
           console.log(values);
       }


function getSelectValues(select) {
  var result = [];
  var options = select && select.options;
  var opt;

  for (var i=0, iLen=options.length; i<iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
}
```

