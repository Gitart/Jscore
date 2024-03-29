## How do I get the text value of a selected option?
Select elements typically have two values that you want to access. First there's the value to be sent to the server, which is easy:

```js
$( "#myselect" ).val();
// => 1
```

The second is the text value of the select. For example, using the following select box:
```js
<select id="myselect">
    <option value="1">Mr</option>
    <option value="2">Mrs</option>
    <option value="3">Ms</option>
    <option value="4">Dr</option>
    <option value="5">Prof</option>
</select>
```

If you wanted to get the string "Mr" if the first option was selected (instead of just "1") you would do that in the following way:

```
$( "#myselect option:selected" ).text();
// => "Mr"
```


### JS
```js
  var options = select.options;
  var id      = options[options.selectedIndex].id;
  var value   = options[options.selectedIndex].value;
``
