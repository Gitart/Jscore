
## HTML
```html

<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 
  
  



  <title>RxJS Полный курс</title>
</head>
<body style="padding-top: 3rem;">

<div class="container">
      
      <i class="large material-icons">insert_chart</i>
      <i class="large material-icons">backup</i>



  <div class="input-field">
    <input type="text" id="search">
    <label for="search">Поиск пользователей GitHub</label>
  </div>

  <div class="row">
    <div class="col s6 offset-s3" id="result"></div>
  </div>

</div>
 <script src="https://unpkg.com/rxjs@7.8.1/dist/bundles/rxjs.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script src="index.js"></script>
</body>
</html>
```

## Index.js
```js
// const { range, filter, map } = rxjs;
const {EMPTY, fromEvent} = rxjs
const {map, debounceTime, distinctUntilChanged, switchMap, mergeMap, tap, catchError, filter} = rxjs.operators
const {ajax} = rxjs.ajax
const url = 'https://api.github.com/search/users?q='


const search = document.getElementById('search')
const result = document.getElementById('result')

const stream$ = fromEvent(search, 'input')
  .pipe(
    map(e => e.target.value),
    debounceTime(1000),
    distinctUntilChanged(),
    tap(() => result.innerHTML = ''),
    filter(v => v.trim()),
    switchMap(v => ajax.getJSON(url + v).pipe(
      catchError(err => EMPTY)
    )),
    map(response => response.items),
    mergeMap(items => items)
  )


stream$.subscribe(user => {
  const html = `
    <div class="card">
      <div class="card-image">
        <img src="${user.avatar_url}" />
        <span class="card-title">${user.login}</span>
      </div>
      <div class="card-action">
        <a href="${user.html_url}" target="_blank">Открыть github</a>
      </div>
    </div>
  `
  result.insertAdjacentHTML('beforeend', html)
})
```



