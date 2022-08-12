## Быстрый поиск

![изображение](https://user-images.githubusercontent.com/3950155/184362552-220591ae-beba-4acc-ac5c-33756aa1054a.png)

# Form
В обычную форму поиска добавляется пустой <div id="search_box-result"></div>.

```html
<div class="search_box">
	<form action="">
		<input type="text" name="search" id="search" placeholder="Введите город">
		<input type="submit">			
	</form>
	<div id="search_box-result"></div>
</div>
```

JQuery скрипт получает введенный в поле текст и отправляет его POST-запросом на обработчик /ajax_search.php, ответ выводится в всплывающей плашке.

```js
$(document).ready(function() {	
	var $result = $('#search_box-result');
	
	$('#search').on('keyup', function(){
		var search = $(this).val();
		if ((search != '') && (search.length > 1)){
			$.ajax({
				type: "POST",
				url: "/ajax_search.php",
				data: {'search': search},
				success: function(msg){
					$result.html(msg);
					if(msg != ''){	
						$result.fadeIn();
					} else {
						$result.fadeOut(100);
					}
				}
			});
		 } else {
			$result.html('');
			$result.fadeOut(100);
		 }
	});
 
	$(document).on('click', function(e){
		if (!$(e.target).closest('.search_box').length){
			$result.html('');
			$result.fadeOut(100);
		}
	});
	
	$(document).on('click', '.search_result-name a', function(){
		$('#search').val($(this).text());
		$result.fadeOut(100);
		return false;
	});
	
	$(document).on('click', function(e){
		if (!$(e.target).closest('.search_box').length){
			$result.html('');
			$result.fadeOut(100);
		}
	});
	
});
```

Стили формы поиска и результатов:

```css
.search_box {
	position: relative;
}
.search_box input[type="text"] {
	display: block;
	width: 100%;    
	height: 35px;
	line-height: 35px;
	padding: 0;
	margin: 0;
	border: 1px solid #fd4836;
	outline: none;
	overflow: hidden;
	border-radius: 4px;
	background-color: rgb(255, 255, 255);
	text-indent: 15px;
	font-size: 14px;
	color: #222;
}
.search_box input[type="submit"] {
	display: inline-block;
	width: 17px;
	height: 17px;
	padding: 0;
	margin: 0;
	border: 0;
	outline: 0;
	overflow: hidden;
	text-indent: -999px;
	background: url(https://snipp.ru/demo/127/search.png) 0 0 no-repeat;
	position: absolute;
	top: 9px;
	right: 16px;
}
 
/* Стили для плашки с результатами */
.search_result {
	position: absolute;
	top: 100%;
	left: 0;
	border: 1px solid #ddd;
	background: #fff;
	padding: 10px;
	z-index: 9999;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
```


### Oбработчик

'''php
<?php
if (!empty($_POST['search'])) {
	$search = $_POST['search'];
	$search = mb_eregi_replace("[^a-zа-яё0-9 ]", '', $search);
	$search = trim($search);
 
	$sth = $dbh->prepare("SELECT * FROM `city` WHERE `name` LIKE '{$search}%' ORDER BY `name`");
	$sth->execute();
	$result = $sth->fetchAll(PDO::FETCH_ASSOC);
 
	if ($result) {
		?>
		<div class="search_result">
			<table>
				<?php foreach ($result as $row): ?>
				<tr>
					<td class="search_result-name">
						<a href="#"><?php echo $row['name']; ?></a>
					</td>
					<td class="search_result-btn">
						<a href="#">Перейти</a>
					</td>
				</tr>
				<?php endforeach; ?>
			</table>
		</div>
		<?php
	}
}
```

