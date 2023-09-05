## USE VUE in GO template

```js
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
```

```html
<head>         
        <script type="text/javascript">
            localStorage.setItem('title', {{.Title}});
            const lastcomp = {{.Lastсompany}}
            const Cntsdoc={{.CntDocs}}
        </script>
</head>         

/*
Cntsdoc = [
         {"typ":1, "cnt":2}, .............
         ]
*

<body>
    
	            <div id="app">
		            <button
				            v-for="item in dataArray"
				            type="button"
				            class="btn btn-secondary position-relative"
				            :title="`Прибуткова накладна ${item.cnt}`"
				            @click="Openwindow(item.typ)"
		            >
			            <b>Прибуткова накладна</b>
			            <span :id="'cnttype' + item.CountType" class="badge bg-success">0</span>
		            </button>
	            </div>
	            
	            <script>
		            new Vue({
			            el: '#app',
			            data: {
				            dataArray: Cntsdoc },
			            methods: {
				            Openwindow(countType) {
					            // Implement your Openwindow function here
					            console.log(`Opening window for CountType ${typ}`);
				            },
			            },
		            });
	            </script>
</body>
```
