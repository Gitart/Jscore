## USE VUE in GO template

```go

func PageOrderList(c echo.Context) error {

	comp := companies.Companies{}
	doc := Orders{}
	cntDoc, _ := doc.Count()
	contrs, _ := contracts.GetAllContracts()

	ob := data.Obj{
		"Title":       "Journal ",                 // Назва журналу
		"Company":     companies.CompanyList("P"), // Контрагенты для выпадающего списка (только продавцы)
		"Lastсompany": comp.GetLastCompany(),      // Последний введенный контрагент в списке
		"Types":       data.TypeDocs,              // Тип документов (прих/расх)
		"TypeGet":     data.TypeDocGet,            // Тип документа
		"TypeAction":  data.TypeAction,            // Статус документа
		"Locations":   stock_list.ListStocks(),    // Список всех складов (locations.List())
		"Contracts":   contrs,                     // Договоры Контракты все активные
		"Countdoc":    util.FloatToStr(cntDoc),    // Количество введенных документов в системе
		"CntDocs":     CntByTypeDoc(),             // Количество введенных документов в системе по типам
		"Raws":        products.ListByGrp(1),      // Сировина для производства - (только на этом складе)
		"Products":    products.GetOwnProduct(),   // Для накладной по созданию продукта власного виробництва
	}

	return c.Render(http.StatusOK, "orders.html", ob)
}
```

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
