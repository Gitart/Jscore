# GO+VUE
![image](https://github.com/Gitart/Jscore/assets/3950155/12642386-37f8-4415-9065-fe61229e1664)

## With fetch
```js
<script>
		$(document).ready(function() {
			// Make a GET request to fetch data from the server
			fetch('/contacts/data/11')
					.then(response => response.json())
					.then(data => {
						console.log(data.data);
						
						// Create a Vue instance
						new Vue({
							el: '#app',
							delimiters: ['[[', ']]'], // Change Vue.js delimiters
							data: {
								items: data.data
							},
						});
						
						// Create a Vue instance
						new Vue({
							el: '#app31',
							delimiters: ['[[', ']]'], // Change Vue.js delimiters
							data: {
								items: data.data,
							},
						});
						
					})
					.catch(error => {
						console.error('Error fetching data:', error);
					});
```
```js

			// Create a Vue instance
			new Vue({
				el: '#app3',
				delimiters: ['[[', ']]'], // Change Vue.js delimiters
				data: {items:[]},
				mounted: function () {
					var self = this;
					$.getJSON("/liststock/list", function (data) {
						self.items = data;
					});
				},
				
				methods: {
					deleteRecord: function (id) {
						console.log(`DELETE:${id}`)
						// Find and remove the item with the given ID
						this.items = this.items.filter(item => item.id !== id);
					},
					
					getRecordDetails: function (data) {
						console.log("Clicked on record with ID:", data);
						console.log("Clicked on record with ID:", data.id);
						// You can perform additional actions here based on the clicked ID
					}
				}
			});
```

## Html
```html

	<div class="col">
		<h2>Div VUe App3</h2>
		<div id="app3">
			<table class="table">
				<thead>
				<tr>
					<th>ID</th>
					<th>Title</th>
					<th>Name</th>
					<th>Price</th>
					<th>delete</th>
				</tr>
				</thead>
				<tbody>
				<tr v-for="item in items" :key="item.id" @click="getRecordDetails(item)">
					<td>[[ item.id ]]</td>
					<td>[[ item.title ]]</td>
					<td>[[ item.location ]]</td>
					<td>[[ item.user_name ]]</td>
					<td><button @click="deleteRecord(item.id)">❌</button></td>
				</tr>
				</tbody>
			</table>
		</div>
	</div>

```











## Base Sample

```json
{
  "data": [
    {
      "id": 6,
      "company_id": 11,
      "contragent_id": 11,
      "first_name": "Анастасія",
      "middle_name": "3333",
      "last_name": "2222",
      "position": "3333333333333dsdsdsdsdsdsdsdsdsds",
      "mob": "",
      "tel": "380680381204",
      "telegram": "on",
      "viber": "on",
      "whatsup": "on",
      "signal": "",
      "contact": "",
      "director": "on",
      "object_id": 0,
      "type_id": 0,
      "remark": "",
      "email": "",
      "company": "",
      "deleted_at": "2023-08-08T12:03:12+03:00"
    },
    {
      "id": 7,
      "company_id": 11,
      "contragent_id": 11,
      "first_name": "eeeeeeeeee",
      "middle_name": "eeeeeeeeeeee",
      "last_name": "0eeeeeeeeeee",
      "position": "eeeeeeeeeeeeeeee222222222",
      "mob": "eeeeeeeeeee",
      "tel": "380679905507",
      "telegram": "0",
      "viber": "0",
      "whatsup": "0",
      "signal": "0",
      "contact": "0",
      "director": "0",
      "object_id": 0,
      "type_id": 0,
      "remark": "",
      "email": "",
      "company": "",
      "deleted_at": "2023-08-08T11:32:47+03:00"
    },
    {
      "id": 9,
      "company_id": 11,
      "contragent_id": 11,
      "first_name": "Тетяна",
      "middle_name": "Василівна",
      "last_name": "222222222202",
      "position": "2222222222",
      "mob": "",
      "tel": "380679161131",
      "telegram": "0",
      "viber": "0",
      "whatsup": "0",
      "signal": "0",
      "contact": "0",
      "director": "0",
      "object_id": 0,
      "type_id": 0,
      "remark": "",
      "email": "",
      "company": "",
      "deleted_at": "2023-08-08T11:33:08+03:00"
    },
    {
      "id": 10,
      "company_id": 11,
      "contragent_id": 11,
      "first_name": "Тетяна33",
      "middle_name": "Василівна333",
      "last_name": "03333",
      "position": "Директор",
      "mob": "2222222222",
      "tel": "380679161131",
      "telegram": "on",
      "viber": "on",
      "whatsup": "on",
      "signal": "on",
      "contact": "",
      "director": "",
      "object_id": 0,
      "type_id": 0,
      "remark": "",
      "email": "",
      "company": "",
      "deleted_at": "2023-08-08T12:02:49+03:00"
    },
    {
      "id": 11,
      "company_id": 11,
      "contragent_id": 11,
      "first_name": "Олександр",
      "middle_name": "33333",
      "last_name": "Тишкунь",
      "position": "33333",
      "mob": "",
      "tel": "Тишкунь",
      "telegram": "on",
      "viber": "on",
      "whatsup": "on",
      "signal": "on",
      "contact": "",
      "director": "",
      "object_id": 0,
      "type_id": 0,
      "remark": "",
      "email": "",
      "company": "",
      "deleted_at": "2023-08-08T12:03:05+03:00"
    },
    {
      "id": 12,
      "company_id": 11,
      "contragent_id": 11,
      "first_name": "Тимофій222222sssss333",
      "middle_name": "Василий",
      "last_name": "Тишкунь",
      "position": "Директор",
      "mob": "380679588049",
      "tel": "380679588049",
      "telegram": "on",
      "viber": "on",
      "whatsup": "on",
      "signal": "on",
      "contact": "",
      "director": "on",
      "object_id": 0,
      "type_id": 0,
      "remark": "ssd",
      "email": "",
      "company": "",
      "deleted_at": "2023-08-08T12:01:34+03:00"
    }
  ]
}
```

```js
$(document).ready(function() {

    // Make a GET request to fetch data from the server
    fetch('/contacts/data/11')
        .then(response => response.json())
        .then(data => {
            console.log(data.data);



            new Vue({
                el: '#app',
                delimiters: ['[[', ']]'], // Change Vue.js delimiters
                data: {
                    items: data.data
                }
            });

            // // Process the fetched data
            // for (const item of data.data) {
            //     console.log(`ID: ${item.id}, Name: ${item.first_name}, Price: ${item.first_name}`);
            // }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

```

```html   
	      <div id="app">
		      <div v-for="item in items" v-bind:key="item.id">
			      <h3>[[ item.first_name ]]</h3>
			      
		      </div>
	      </div>
```
