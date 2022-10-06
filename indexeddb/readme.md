# indexedDb
![image](https://user-images.githubusercontent.com/3950155/194381862-8d532f40-b0ef-4801-b842-6b8b66973d63.png)



## Подходит ли IndexedDB для хранения состояния?

Как всегда: *зависит от обстоятельств*.

IndexedDB предлагает некоторые преимущества:

1.  Обычно он может хранить 1 ГБ данных, что делает его подходящим для больших объектов, файлов, изображений и т. д. Перемещение этих элементов из памяти может сделать приложение более быстрым и эффективным.

2.  В отличие от cookie и веб-хранилища (localStorage и sessionStorage), IndexedDB хранит данные в виде нативных объектов JavaScript. Нет необходимости сериализовать в строки JSON и потом снова парсить в объект.

3.  Доступ к IndexedDB является асинхронным, поэтому он оказывает минимальное влияние на основной поток обработки JavaScript.

**Обратите внимание, что localStorage и sessionStorage являются синхронными: ваш код JavaScript приостанавливает выполнение, пока он обращается к данным. Это может вызвать проблемы с производительностью при сохранении больших наборов данных.**

**Асинхронный доступ к данным имеет ряд недостатков:**

*   API IndexedDB использует старый подход с коллбэками и событиями, поэтому библиотека-обёртка на основе промисов будет лучшим решением.

*   Асинхронные конструкторы классов и [Proxy](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy) get/set невозможны в JavaScript. Это создает некоторые проблемы для систем управления состоянием.


## [Типичная схема работы с базой]
(https://developer.mozilla.org/ru/docs/Web/API/IndexedDB_API/Using_IndexedDB#pattern "Permalink to Типичная схема работы с базой")

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
