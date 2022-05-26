<script>
const getUrlParams = url => `${url}?`.split('?')[1]
     .split('&').reduce((params, pair) =>
    ((key, val) => key ? {...params, [key]: val} : params)
    (...`${pair}=`.split('=').map(decodeURIComponent)), {});
	
	console.log(getUrlParams('https://google.com/foo?a=1&b=2&c')); // Will log {a: '1', b: '2', c: ''}
    console.log(getUrlParams('/foo?a=1&b=2&c')); // Will log {a: '1', b: '2', c: ''}
    console.log(getUrlParams('?a=1&b=2&c')); // Will log {a: '1', b: '2', c: ''}
    console.log(getUrlParams('https://google.com/')); // Will log {}
    console.log(getUrlParams('a=1&b=2&c')); // Will log {}
     
	console.log(getUrlParams(location)); 
 
</script>
