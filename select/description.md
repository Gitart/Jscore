## Работа с select с помощью JQuery
Сборник методов JQuery для работы с выпадающими списками <select>.
  
### Получить значение выбранного элемента    
  
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
  
