# indexedDb


## [Типичная схема работы с базой](https://developer.mozilla.org/ru/docs/Web/API/IndexedDB_API/Using_IndexedDB#pattern "Permalink to Типичная схема работы с базой")

Обычная последовательность шагов при работе с IndexedDB :

1.  Открыть базу данных.
2.  Создать хранилище объектов в базе данных, над которой будут выполняться наши операции.
3.  Запустить транзакцию и выдать запрос на выполнение какой-либо операции с базой данных, например, добавление или извлечение данных.
4.  Ждать завершения операции, обрабатывая событие DOM, на которое должен быть установлен наш обработчик.
5.  Сделать что-то с результатами (которые могут быть найдены в возвращаемом по нашему запросу объекте ).

Теперь, получив общее представление, переходим к более конкретным деталям.




## Minimal work code

```js
var db;
var request = window.indexedDB.open("db_name", 1);

request.onupgradeneeded = function() {
    var db = request.result;
    var storeName = db.createObjectStore("storeName", {keyPath: "keyAttribute"});
    storeName.createIndex("testIndex", "testCase", { unique: false });
};
request.onerror = function(event) {
  // Do something with request.errorCode!
  console.log("failed opening DB: "+request.errorCode)
};
request.onsuccess = function(event) {
  // Do something with request.result!
  db = request.result;
  console.log("opened DB")
};

//Adding function - can pass values as function params
function addData(objectStoreName){
    // Start a new transaction
    var transaction = db.transaction(objectStoreName, "readwrite");
    var objectStore = transaction.objectStore(objectStoreName);
    // Add some data
    var request = objectStore.put({testCase: 'ddi',timestamp: performance.now(), name: "testname2", data: 'asdsadas'});
        request.onsuccess = function(event) {
            // event.target.result === customer.ssn;
            console.log("request.onsuccess: "+event.target.result);
        };
        request.onerror = function(event) {
            // event.target.result === customer.ssn;
            console.log("request.onerror: "+request.errorCode);
    };
    transaction.oncomplete = function(event) {
      console.log("All added to "+objectStore+"!");
    };
    transaction.onerror = function(event) {
      // Don't forget to handle errors!
      console.log("Error in adding data to "+objectStore+"!");
    };
}


function getData(objectStoreName){
    // Start a new transaction
    var transaction = db.transaction(objectStoreName, "readwrite");
    var objectStore = transaction.objectStore(objectStoreName);
    var index = objectStore.index("TestCaseIndex");
    // Query the data
    var getDDIData = index.get("ddi");
    getDDIData.onsuccess = function() {
        console.log(getDDIData.result);
    };
}
```
