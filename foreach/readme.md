## For Each by button

```js

		function LoadBtn() {
			const buttonsData = [
				{id:"mbtn_1", color:"#B83B01", title: "Добавление",    funcname: "testFunction1", disable:"disabled", picname: "add_notes",  },
				{id:"mbtn_2", color:"#2ECC71", title: "Удаление",      funcname: "testFunction2", disable:"",         picname: "quick_reference_all" },
				{id:"mbtn_3", color:"#283747", title: "Печать",        funcname: "testFunction3", disable:"",         picname: "smart_toy" },
				{id:"mbtn_4", color:"#4FB801", title: "Автоматизация", funcname: "testFunction3", disable:"disabled", picname: "smart_toy" },
				{id:"mbtn_5", color:"#013BB8", title: "Персмотр",      funcname: "testFunction3", disable:"",         picname: "data_info_alert" },
				{id:"mbtn_6", color:"#ADB829", title: "Справочники",   funcname: "testFunction3", disable:"",         picname: "acute" },
				{id:"mbtn_7", color:"#B8297D", title: "Прочее",        funcname: "testFunction3", disable:"",         picname: "data_info_alert" },
				{id:"mbtn_8", color:"#A75E6B", title: "Настройки",     funcname: "testFunction3", disable:"",         picname: "settings" },
			];

				// buttonsData.forEach(btn => {
				buttonsData.forEach(function(btn) {
					var tmpl = `<button id="${btn.id}" mainbtn title="${btn.title}"  ${btn.disable}  onclick="${btn.funcname}()" class="btn btn-light border m-1 align-items-center d-inline-flex p-2">
								<span class="material-symbols-outlined me-2" style="color:${btn.color};font-size:30px">${btn.picname}</span> 
									${btn.title}
							    </button>`;
					$("#divbtns").append(tmpl);
				});
		}

```

[Google Font](https://fonts.google.com/icons?selected=Material+Symbols+Outlined:star:FILL@0;wght@400;GRAD@0;opsz@24&icon.size=24&icon.color=%23EA3323&icon.set=Material+Icons)

Example https://preview.colorlib.com/theme/bootstrap/multiselect-10/   
https://lodash.com/
https://preview.colorlib.com/theme/bootstrap/multiselect-10/js/main.js  

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.5.0/lodash.min.js"></script>
