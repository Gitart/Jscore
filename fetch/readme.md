# Fetch - HTTP requests using Fetch API and Promises

[📚](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
[📒](https://reqbin.com/code/javascript/ricgaie0/javascript-fetch-bearer-token)

## SAMPLE
```js
const fetchPromise = fetch («https://ghibliapi.herokuapp.com/people»);
console.log(fetchPromise);
```
## SAMPLE
```js
const fetchPromise = fetch(" https://ghibliapi.herokuapp.com/people "); 
fetchPromise.then(ответ => { 
  console.log(ответ); 
});
```
![image](https://github.com/Gitart/Jscore/assets/3950155/9d75d144-5c65-492f-a4eb-d929780af09c)


## JSON
```js
const fetchPromise = fetch(" https://ghibliapi.herokuapp.com/people "); 
fetchPromise.then(response => { 
  return response.json(); 
}).then(people => { 
  console.log(people); 
});
```
![image](https://github.com/Gitart/Jscore/assets/3950155/320a713a-dbc8-4202-81b3-f91188d689c2)

## MAP
```js
const fetchPromise = fetch(" https://ghibliapi.herokuapp.com/people ");
fetchPromise.then(response => { 
  return response.json(); 
}).then(people => { 
  const name = people.map(person => person.name).join("\n"); 
  console.log (имена); 
});
```

![image](https://github.com/Gitart/Jscore/assets/3950155/4625bca9-ee44-44b7-a7a1-833ac55e4b9a)

## MAP
```js
const fetchPromise = fetch(" https://ghibliapi.herokuapp.com/people ");
// Целевой основной элемент 
const main = document.getElementById("main");
fetchPromise.then(response => { 
  return response.json(); 
}).then(people => { 
  const name = people.map(person => person.name).join("\n");
  // Добавляем имена к основному элементу 
  main.innerHTML = names; 
});
```

## UL
Первое, что мы собираемся сделать, это переместить наш список имен в вызываемую функцию listOfNames, которая примет peopleобъект. Мы также будем интерполировать некоторую разметку, чтобы показать, что каждый человек принадлежит элементу списка. Наш listOfNamesвернет неупорядоченный список всех наших имен. Наконец, мы назначим это listOfNamesнашему main.innerHTMLэлементу.

```js
const fetchPromise = fetch(" https://ghibliapi.herokuapp.com/people "); 
const main = document.getElementById("main");
fetchPromise.then(response => { 
  return response.json(); 
}).then(people => { 
  main.innerHTML = listOfNames(people); 
});
function listOfNames(people) { 
  const name = people.map(person => `<li>${person.name}</li>`).join("\n"); 
  вернуть `<ul>${names}</ul>` 
}
```

![image](https://github.com/Gitart/Jscore/assets/3950155/c0d189ab-747b-42eb-a030-601b06be20be)

## ANOTHER
```js
const URL = "https://ghibliapi.herokuapp.com/people";
const main = document.getElementById("main");
main.innerHTML = "<p>Loading...";
fetch(URL)
  .then((response) => response.json())
  .then((people) => main.innerHTML = getListOfNames(people));
const getListOfNames = (people) => {
  const names = people
    .map((person) => `<li>${person.name}</li>`)
    .join("\n");
return `<ul>${names}</ul>`;
};
```

## TARGET LEMENT
```js
const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
const main = document.getElementById("main");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  main.innerHTML = listOfNames(people);
});
function listOfNames(people) {
  const names = people.map(person => `<li>${person.name}</li>`).join("\n");
  return `<ul>${names}</ul>`
  }
  ```
![image](https://github.com/Gitart/Jscore/assets/3950155/0ed6795d-42f3-405c-b6cb-6ad52681aa65)

## SPLEET
```js
const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
const main = document.getElementById("main");
// Loading Placeholder
main.innerHTML = "<p>Loading...";
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  main.innerHTML = listOfNames(people);
});
function listOfNames(people) {
  const names = people.map(person => `<li>${person.name}</li>`).join("\n");
  return `<ul>${names}</ul>`
}
```

![image](https://github.com/Gitart/Jscore/assets/3950155/39696d75-407b-4694-a4b3-14dbd45ced65)














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
## Fetch to map
```js

    var dd2 = fetch('/liststock/list')
        .then(response => response.json())
        .then(data => {

                // Here, 'data' contains the JSON result
                //console.log(JSON.stringify(data))
                // console.log(data.find(v=>v.location_id===19))
                var tt=data.map(v =>`${v.title}, ${v.location_id}`).join("<hr>")
                $("#inres").html(tt)

                console.log( tt )
            return data

            }

        )
        .catch(error => {
            console.error('Error:', error);
        });

    console.log(dd2.PromiseResult);
```


