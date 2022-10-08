## ⚒ Created rlrmants in DOM from JSON by template


Used template
```js

// ******************************************************
// Format template
// ******************************************************
function stringTemplateParser(expression, valueObj) {
  const templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
  
  let text = expression.replace(templateMatcher, (substring, value, index) => {
      value = valueObj[value];
      return value;
  });

  return text
}


// Load form
$(document ).ready(function() {
	 $('#cntr').html(markupList);
	 $('#listpip').html(PeopleList);
	 console.log(stringTemplateParser('my name is {{name}} and age is {{age}}', {name: 'Tom', age:100}));
});
```
