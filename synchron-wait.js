Синхронная задержка в JS
23.09.2020
1719
0 комментариев
В закладки	
2
0
Синхронная задержка в JS

В некоторых случаях метод задержки выполнения кода setTimeout() не подходит т.к. код в нём выполняется асинхронно. Например случай, когда требуется передать данные аналитики в CRM по клику на ссылку.

<a href="/basket/" onclick="return send_analitics();">Перейти в корзину</a>
 
<script>
function send_analitics(){
	/* Код аналитики */
	/* ... */
 
	return true;
}

</script>

HTML

В данном случаи код аналитики может не сработать, т.к. пользователь уже перейдет на другую страницу, поэтому нужно добавить задержку:

<a href="/basket/" onclick="return send_analitics();">Перейти в корзину</a>
 
<script>
function sleep(milliseconds) {
	var t = (new Date()).getTime();
	var i = 0;
	while (((new Date()).getTime() - t) < milliseconds) {
		i++;
	}
}
 
function send_analitics(){
	/* Код аналитики */
	/* ... */
 
	sleep(500);
	return true;
}
</script>
