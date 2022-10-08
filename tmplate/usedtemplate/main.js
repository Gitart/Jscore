

// Template 
peoptemp='<tr> <td><b>{{name}}</b></td> <td>{{description}}</td> </tr>';

// *********************************************************
// Convert string to Json 
// var json = '{"people...';
// var data = jQuery.parseJSON(json);
// *********************************************************
var PeopleList = $.map(data.people, function (val, i) { 
	 sr = stringTemplateParser(peoptemp, val)
 	 return sr;
});

// console.log("list:", PeopleList);

// *********************************************************
// Convert string to Json 
// var json = '{"people...';
// var data = jQuery.parseJSON(json);
// *********************************************************
var markupList = $.map(data.people, function (val, i) { 
	// return '<div id="' + val.name + '"><p>Name: ' + val.name + '</p><p>Description: ' + val.description + '</p></div>'; }
	a=val.name;
	b=val.description;
	return `<li><b>${a}</b> ${b} </li>`;
});
 
// $(markupList).appendTo('#cntr');
// $('#cntr').html(markupList);


html = "";
$.each(data.people, function(i,person) { 
	console.log(i,person)
	html += html + person;
});


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
