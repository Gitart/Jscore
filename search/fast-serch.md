Быстрый поиск с выводом результатов

```js
<div class="search_box">
	<form action="/search.htm">
		<input type="text" name="search" id="search" placeholder="Введите город">
		<input type="submit">			
	</form>
	<div id="search_box-result"></div>
</div>
<style type="text/css">
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
.search_result table {
	border-collapse: collapse;
	border-spacing: 0;
	width: 100%;
	table-layout: fixed;
}
.search_result td {
	padding: 5px 10px;
	vertical-align: middle;
}
.search_result-name {
	font-weight: 600;
	font-size: 16px;
}
.search_result-btn {
	width: 150px;
	text-align: right;
}
.search_result-btn a {
	border-width: 1px;
	background-color: rgb(253, 72, 54);
	display: inline-block;
	font-size: 13px;
	color: rgb(255, 255, 255);
	text-decoration: none;
	padding: 5px;
}
</style>

<script src="https://snipp.ru/cdn/jquery/2.1.1/jquery.min.js"></script>
<script>
$(document).ready(function() {	
	var $result = $('#search_box-result');
	
	$('#search').on('keyup', function(){
		var search = $(this).val();
		if ((search != '') && (search.length > 1)){
			$.ajax({
				type: "POST",
				url: "https://snipp.ru/ajax.php?inc_id=12382",
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
</script>
```
