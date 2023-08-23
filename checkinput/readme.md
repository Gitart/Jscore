## Ban input number  with coma

```js
 
	    // Replace coma to point
	    $(".fildsheck").keypress(function(event){
		    event = event || window.event;
		    if (event.charCode && event.charCode!=0 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
				return false;
	    });
```

### form
```html
<h2>JavaScript input filter showcase</h2>
<p>Supports Copy+Paste, Drag+Drop, keyboard shortcuts, context menu operations, non-typeable keys, the caret position, different keyboard layouts, and <a href="https://caniuse.com/#feat=input-event" target="_blank">all browsers since IE 9</a>.</p>
<p>There is also a <a href="https://jsfiddle.net/emkey08/tvx5e7q3" target="_blank">jQuery version</a> of this.</p>
<table>
  <tr><td>Integer</td><td><input id="intTextBox"></td></tr>
  <tr><td>Integer &gt;= 0</td><td><input id="uintTextBox"></td></tr>
  <tr><td>Integer &gt;= 0 and &lt;= 500</td><td><input id="intLimitTextBox"></td></tr>
  <tr><td>Float (use . or , as decimal separator)</td><td><input id="floatTextBox"></td></tr>
  <tr><td>Currency (at most two decimal places)</td><td><input id="currencyTextBox"></td></tr>
  <tr><td>A-Z only</td><td><input id="latinTextBox"></td></tr>
  <tr><td>Hexadecimal</td><td><input id="hexTextBox"></td></tr>
</table>
```

### JS
```js
// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter, errMsg) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function(event) {
    textbox.addEventListener(event, function(e) {
      if (inputFilter(this.value)) {
        // Accepted value
        if (["keydown","mousedown","focusout"].indexOf(e.type) >= 0){
          this.classList.remove("input-error");
          this.setCustomValidity("");
        }
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        // Rejected value - restore the previous one
        this.classList.add("input-error");
        this.setCustomValidity(errMsg);
        this.reportValidity();
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        // Rejected value - nothing to restore
        this.value = "";
      }
    });
  });
}


// Install input filters.
setInputFilter(document.getElementById("intTextBox"), function(value) {
  return /^-?\d*$/.test(value); }, "Must be an integer");
setInputFilter(document.getElementById("uintTextBox"), function(value) {
  return /^\d*$/.test(value); }, "Must be an unsigned integer");
setInputFilter(document.getElementById("intLimitTextBox"), function(value) {
  return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 500); }, "Must be between 0 and 500");
setInputFilter(document.getElementById("floatTextBox"), function(value) {
  return /^-?\d*[.,]?\d*$/.test(value); }, "Must be a floating (real) number");
setInputFilter(document.getElementById("currencyTextBox"), function(value) {
  return /^-?\d*[.,]?\d{0,2}$/.test(value); }, "Must be a currency value");
setInputFilter(document.getElementById("latinTextBox"), function(value) {
  return /^[a-z]*$/i.test(value); }, "Must use alphabetic latin characters");
setInputFilter(document.getElementById("hexTextBox"), function(value) {
  return /^[0-9a-f]*$/i.test(value); }, "Must use hexadecimal characters");
```
