## For Each


```js

		function LoadBtn() {
			const buttonsData = [
				{id:"mbtn_1", title: "Добавление", 	  funcname: "testFunction1", disable:false, picname: "add_notes",  },
				{id:"mbtn_2", title: "Удаление",   	  funcname: "testFunction2", disable:false, picname: "quick_reference_all" },
				{id:"mbtn_3", title: "Печать",     	  funcname: "testFunction3", disable:false, picname: "smart_toy" },
				{id:"mbtn_4", title: "Автоматизация", funcname: "testFunction3", disable:true,  picname: "smart_toy" },
				{id:"mbtn_5", title: "Персомотр",     funcname: "testFunction3", disable:false, picname: "data_info_alert" },
				{id:"mbtn_6", title: "Справочники",   funcname: "testFunction3", disable:false, picname: "acute" },
				{id:"mbtn_7", title: "Прочее",        funcname: "testFunction3", disable:false, picname: "data_info_alert" },
				{id:"mbtn_8", title: "Настройки",     funcname: "testFunction3", disable:false, picname: "settings" },
			];

				// buttonsData.forEach(btn => {
				buttonsData.forEach(function(btn) {
					var tmpl = `<button id="${btn.id}" title="${btn.title}" disable:${btn.disable}  onclick="${btn.funcname}()" class="btn btn-light border m-1 align-items-center d-inline-flex p-2">
								<span class="material-symbols-outlined me-2">${btn.picname}</span> 
									${btn.title}
							    </button>`;
					$("#divbtns").append(tmpl);
				});
		}

```


Example https://preview.colorlib.com/theme/bootstrap/multiselect-10/   
https://lodash.com/
https://preview.colorlib.com/theme/bootstrap/multiselect-10/js/main.js  

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.5.0/lodash.min.js"></script>
