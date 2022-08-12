## Работа с select с помощью JQuery
Сборник методов JQuery для работы с выпадающими списками   SELECT     

 [link](https://snipp.ru/jquery/jquery-select#)
 
```js
$('#select').val();
// или
$('select[name=fruct]').val();
```
  
# Sample     
```js
  <div class="row">
	<div class="col-sm">
		<select id="select" class="form-control" name="fruct">
			<option value="1">яблоко</option>
			<option value="2" selected>апельсин</option>	
			<option value="3">виноград</option>	
		</select>	
	</div>
	<div class="col-sm text-center">
		<button id="js-button" class="btn btn-outline-primary">Получить value</button>
	</div>
	<div class="col-sm" id="js-result">
	   	Результат: 
	</div>
</div>

<link rel="stylesheet" href="https://snipp.ru/cdn/bootstrap/4.3/bootstrap.min.css">
<style type="text/css">
#js-result {
	font-size: 16px;
	line-height: 38px;
	color: green;
}
</style>

<script src="https://snipp.ru/cdn/jquery/2.1.1/jquery.min.js"></script>
<script>
$('#js-button').click(function(){
	var value = $('#select').val();
	$('#js-result').html('Результат: ' + value);
});
</script>
```

##  Для списков с множественном выбором (multiple) метод val() вернет значения в виде массива.

```JS
<div class="row">
	<div class="col-sm">
		<select id="select" class="form-control" size="3" name="fruct[]" multiple>
			<option value="1">яблоко</option>
			<option value="2" selected>апельсин</option>	
			<option value="3" selected>виноград</option>	
		</select>	
	</div>
	<div class="col-sm text-center">
		<button id="js-button" class="btn btn-outline-primary">Получить value</button>
	</div>
	<div class="col-sm" id="js-result">
		Результат: 
	</div>
</div>

<link rel="stylesheet" href="https://snipp.ru/cdn/bootstrap/4.3/bootstrap.min.css">
<style type="text/css">
#js-result {
	font-size: 16px;
	line-height: 38px;
	color: green;
}
</style>

<script src="https://snipp.ru/cdn/jquery/2.1.1/jquery.min.js"></script>
<script>
$('#js-button').click(function(){
	var value = $('#select').val();
	$('#js-result').html('Результат: [' + value.toString() + ']');
});
</script>
```

## Получить текст выбранного элемента 

```JS
<div class="row">
	<div class="col-sm">
		<select id="select" class="form-control" name="fruct">
			<option value="1">яблоко</option>
			<option value="2" selected>апельсин</option>	
			<option value="3">виноград</option>	
		</select>	
	</div>
	<div class="col-sm text-center">
		<button id="js-button" class="btn btn-outline-primary">Получить текст</button>
	</div>
	<div class="col-sm" id="js-result">
		Результат: 
	</div>
</div>

<link rel="stylesheet" href="https://snipp.ru/cdn/bootstrap/4.3/bootstrap.min.css">
<style type="text/css">
#js-result {
	font-size: 16px;
	line-height: 38px;
	color: green;
}
</style>

<script src="https://snipp.ru/cdn/jquery/2.1.1/jquery.min.js"></script>
<script>
$('#js-button').click(function(){
	var value = $('#select option:selected').text();
	$('#js-result').html('Результат: ' + value);
});
</script>
```


## Узнать сколько элементов option в списке select 
```JS
<div class="row">
	<div class="col-sm">
		<select id="select" class="form-control" size="5" name="fruct[]" multiple>
			<option value="1">яблоко</option>
			<option value="2">апельсин</option>	
			<option value="3">виноград</option>	
		</select>
	</div>
	<div class="col-sm">
		<p>
			<button id="js-button" class="btn btn-outline-primary">Получить кол-во</button>
			<button id="js-button-add" class="btn btn-outline-primary">Добавить option</button>
		</p>
		<p id="js-result">Результат: </p>
	</div>
</div>

<link rel="stylesheet" href="https://snipp.ru/cdn/bootstrap/4.3/bootstrap.min.css">
<style type="text/css">
#js-result {
	font-size: 16px;
	line-height: 38px;
	color: green;
}
</style>

<script src="https://snipp.ru/cdn/jquery/2.1.1/jquery.min.js"></script>
<script>
$('#js-button').click(function(){
	var value = $('#select option').size();
	$('#js-result').html('Результат: ' + value);
});

$('#js-button-add').click(function(){
	$('#select').append('<option value="">новый option</option>');
});
</script>
```


## Узнать количество выбранных элементов
```JS
<div class="row">
	<div class="col-sm">
		<select id="select" class="form-control" size="4" name="fruct[]" multiple>
			<option value="1">яблоко</option>
			<option value="2">апельсин</option>	
			<option value="3">виноград</option>	
		</select>
	</div>
	<div class="col-sm">
		<p>
			<button id="js-button" class="btn btn-outline-primary">Получить кол-во</button>
		</p>
		<p id="js-result">Результат: –</p>
	</div>
</div>

<link rel="stylesheet" href="https://snipp.ru/cdn/bootstrap/4.3/bootstrap.min.css">
<style type="text/css">
#js-result {
	font-size: 16px;
	line-height: 38px;
	color: green;
}
</style>

<script src="https://snipp.ru/cdn/jquery/2.1.1/jquery.min.js"></script>
<script>
$('#js-button').click(function(){
	var value = $('#select option:selected').size();
	$('#js-result').html('Результат: ' + value);
});
</script>
```

## Выбор элементов 


### Выбрать первый элемент:
```JS
$('#select option:first').prop('selected', true);
```

### Выбрать последний элемент:
```JS
$('#select option:last').prop('selected', true);
```

### Выбрать элемент c value = 2:
```JS
$('#select option[value=2]').prop('selected', true);
```

### Выбрать элемент содержащий текст «виноград»:
```JS
$('#select option:contains("виноград")').prop('selected', true);
```

### Выбрать все элементы:
```JS
$('#select option').prop('selected', true);
```

### Снять выделение:

```JS
$('#select option').prop('selected', false);
```

## Sample
```js
<div class="form-group">
	<select id="select" class="form-control" size="3" name="fruct[]" multiple>
		<option value="1">яблоко</option>
		<option value="2">апельсин</option>	
		<option value="3">виноград</option>	
	</select>
</div>

<div class="form-group">
	<h6>Выбрать:</h6>
	<button id="js-button-1" class="btn btn-sm btn-outline-primary">Первый элемент</button>
	<button id="js-button-2" class="btn btn-sm btn-outline-primary">Последний элемент</button>
	<button id="js-button-3" class="btn btn-sm btn-outline-primary">value = 2</button>
	<button id="js-button-4" class="btn btn-sm btn-outline-primary">Виноград</button>
	<button id="js-button-5" class="btn btn-sm btn-outline-primary">Все</button>
	 
	<button id="js-button-6" class="btn btn-sm btn-outline-primary">Снять выделение</button>
</div>
<link rel="stylesheet" href="https://snipp.ru/cdn/bootstrap/4.3/bootstrap.min.css">

<script src="https://snipp.ru/cdn/jquery/2.1.1/jquery.min.js"></script>
<script>
$('.btn-default').click(function(){
	$('#select option').prop('selected', false);
});

// Выбрать первый элемент
$('#js-button-1').click(function(){
	$('#select option:first').prop('selected', true);
});

// Выбрать последний элемент
$('#js-button-2').click(function(){
	$('#select option:last').prop('selected', true);
});

// Выбрать элемент c value = 2
$('#js-button-3').click(function(){
	$('#select option[value=2]').prop('selected', true);
});

// Выбрать элемент содержащий текст 'виноград'
$('#js-button-4').click(function(){
	$('#select option:contains("виноград")').prop('selected', true);
});

// Выбрать все
$('#js-button-5').click(function(){
	$('#select option').prop('selected', true);
});

// Снять все
$('#js-button-6').click(function(){
	$('#select option').prop('selected', false);
});
</script>
```


## Заблокировать и разблокировать select 
```js
// Заблокировать
$('#select').prop('disabled', true);
 
// Разблокировать
$('#select').prop('disabled', false);
```


## Добавление option в select
Добавить элемент в начало select:

```js
$('#select').prepend('<option value="">новый option</option>');
```

## Добавить элемент в конец select:

```js
$('#select').append('<option value="">новый option</option>');
```


Добавить элемент до и после option c value = 2:

```js
// До
$('#select option[value=2]').before('<option value="">новый option</option>');
 
// После

$('#select option[value=2]').after('<option value="">новый option</option>');
```

## Добавить элемент до и после option c текстом «апельсин»:

```js
// До
$('#select option:contains("апельсин")').before('<option value="">новый option</option>');
 
// После
$('#select option:contains("апельсин")').after('<option value="">новый option</option>');
```

## Sample
```js
<div class="form-group">
	<select id="select" class="form-control" size="4" name="fruct[]" multiple>
		<option value="1">яблоко</option>
		<option value="2">апельсин</option>	
		<option value="3">виноград</option>	
	</select>
</div>

<div class="form-group">
	<h6>Добавить:</h6>
	<button id="js-button-1" class="btn btn-sm btn-outline-primary">В начало</button>
	<button id="js-button-2" class="btn btn-sm btn-outline-primary">В конец</button>
	<button id="js-button-3" class="btn btn-sm btn-outline-primary">До value = 2</button>
	<button id="js-button-4" class="btn btn-sm btn-outline-primary">После value = 2</button>
	<button id="js-button-5" class="btn btn-sm btn-outline-primary">До «апельсин»</button>
	<button id="js-button-6" class="btn btn-sm btn-outline-primary">После «апельсин»</button>
</div>
<link rel="stylesheet" href="https://snipp.ru/cdn/bootstrap/4.3/bootstrap.min.css">

<script src="https://snipp.ru/cdn/jquery/2.1.1/jquery.min.js"></script>
<script>
$('.btn-default').click(function(){
	$('#select option:contains("новый option")').remove();
});

// Добавить элемент в начало select
$('#js-button-1').click(function(){
	$('#select').prepend('<option value="" style="color:green;">новый option</option>');
});

// Добавить элемент в конец select
$('#js-button-2').click(function(){
	$('#select').append('<option value="" style="color:green;">новый option</option>');
});

// Добавить элемент до option c value = 2
$('#js-button-3').click(function(){
	$('#select option[value=2]').before('<option value="" style="color:green;">новый option</option>');
});

// Добавить элемент после option c value = 2
$('#js-button-4').click(function(){
	$('#select option[value=2]').after('<option value="" style="color:green;">новый option</option>');
});

// Добавить элемент до option c текстом «апельсин»
$('#js-button-5').click(function(){
	$('#select option:contains("апельсин")').before('<option value="" style="color:green;">новый option</option>');
});

// Добавить элемент после option c текстом «апельсин»
$('#js-button-6').click(function(){
	$('#select option:contains("апельсин")').after('<option value="" style="color:green;">новый option</option>');
});
</script>
```

## Добавление элементов в optgroup

```js
// Добавить элемент в начало группы «Фрукты»
$('#select optgroup[label=Фрукты]').prepend('<option value="">новый option</option>');
 
// Добавить элемент в конец группы «Фрукты»
$('#select optgroup[label=Фрукты]').append('<option value="">новый option</option>');
```

## Samples
```js
<div class="form-group">
	<select id="select" class="form-control" size="9" name="fruct[]" multiple>
		<optgroup label="Фрукты">
			<option value="1">яблоко</option>
			<option value="2">апельсин</option>	
			<option value="3">виноград</option>	
		<optgroup label="Овощи">
			<option value="4">огурец</option>
			<option value="5">помидор</option>	
			<option value="6">капуста</option>	
	</select>
</div>

<div class="form-group">
	<h6>Добавить:</h6>
	<button id="js-button-1" class="btn btn-sm btn-outline-primary">В начало группы</button>
	<button id="js-button-2" class="btn btn-sm btn-outline-primary">В конец группы</button>
</div>
<link rel="stylesheet" href="https://snipp.ru/cdn/bootstrap/4.3/bootstrap.min.css">

<script src="https://snipp.ru/cdn/jquery/2.1.1/jquery.min.js"></script>
<script>
$('.btn-default').click(function(){
	$('#select option:contains("новый option")').remove();
});

// Добавить элемент в начало группы «Фрукты»
$('#js-button-1').click(function(){
	$('#select optgroup[label=Фрукты]').prepend('<option value="" style="color:green;">новый option</option>');
});

// Добавить элемент в конец группы «Фрукты»
$('#js-button-2').click(function(){
	$('#select optgroup[label=Фрукты]').append('<option value="" style="color:green;">новый option</option>');
});
</script>
```

## Добавить элементы option в select из массива

```js
var array = {1: 'яблоко', 2: 'апельсин', 3: 'виноград'};
 
$.each(array, function(key, value) {
	$('#select').append('<option value="' + key + '">' + value + '</option>');
});
```

## Добавить элементы option в select из массива

```js
var array = {1: 'яблоко', 2: 'апельсин', 3: 'виноград'};
 
$.each(array, function(key, value) {
	$('#select').append('<option value="' + key + '">' + value + '</option>');
});
```

## Sample
```js
<div class="row">
	<div class="col-sm">
		<select id="select" class="form-control" name="fruct">
		</select>	
	</div>
	<div class="col-sm">
		<button id="js-button" class="btn btn-outline-primary">Добавить из массива</button>
	</div>
</div>
<link rel="stylesheet" href="https://snipp.ru/cdn/bootstrap/4.3/bootstrap.min.css">

<script src="https://snipp.ru/cdn/jquery/2.1.1/jquery.min.js"></script>
<script>
$('#js-button').click(function(){
	$('#select').empty();

	var array = {1: 'яблоко', 2: 'апельсин', 3: 'виноград'};
	$.each(array, function(key, value) {
		$('#select').append('<option value="' + key + '">' + value + '</option>');
	});
});
</script>
```

## Удаление option из select

### Удалить выбранный элемент:
```js
$('#select option:selected').remove();
```

### Удалить первый элемент:

```js
$('#select option:first').remove();
$('#select option:last').remove();
```

### Удалить элемент c value = 4:
```js
$('#select option[value=4]').remove();
```

### Удалить элемент содержащий текст «виноград»:
```js
$('#select option:contains("виноград")').remove();
```

### Очистить весь select:
```js
$('#select').empty();
// или
$('#select option').remove();
````

### Sample
```js
<div class="form-group">
	<select id="select" class="form-control" size="6" name="fruct[]" multiple>
		<option value="1">яблоко</option>
		<option value="2">апельсин</option>	
		<option value="3">виноград</option>	
		<option value="4">абрикос</option>	
		<option value="5">ананас</option>	
		<option value="6">арбуз</option>	
	</select>
</div>

<div class="form-group">
	<h6>Удалить:</h6>
	<button id="js-button-1" class="btn btn-sm btn-outline-primary">Выбранный элемент</button>
	<button id="js-button-2" class="btn btn-sm btn-outline-primary">Первый элемент</button>
	<button id="js-button-3" class="btn btn-sm btn-outline-primary">Последний элемент</button>
	<button id="js-button-4" class="btn btn-sm btn-outline-primary">value = 4</button>
	<button id="js-button-5" class="btn btn-sm btn-outline-primary">Виноград</button>
	<button id="js-button-6" class="btn btn-sm btn-outline-primary">Все</button>
</div>
<link rel="stylesheet" href="https://snipp.ru/cdn/bootstrap/4.3/bootstrap.min.css">

<script src="https://snipp.ru/cdn/jquery/2.1.1/jquery.min.js"></script>
<script>
// Удалить выбранный элемент
$('#js-button-1').click(function(){
	$('#select option:selected').remove();
});

// Удалить первый элемент
$('#js-button-2').click(function(){
	$('#select option:first').remove();
});

// Удалить последний элемент
$('#js-button-3').click(function(){
	$('#select option:last').remove();
});

// Удалить элемент c value = 4
$('#js-button-4').click(function(){
	$('#select option[value=4]').remove();
});

// Удалить элемент содержащий текст «виноград»
$('#js-button-5').click(function(){
	$('#select option:contains("виноград")').remove();
});

// Очистить весь select
$('#js-button-6').click(function(){
	$('#select').empty();
});
</script>
```

## Select fro loop
```js
var array = {1: 'яблоко', 2: 'апельсин', 3: 'виноград'}; $.each(array, function(key, value) {	$(`#select option[value="${key}"]`).prop('selected', true);});
```



















