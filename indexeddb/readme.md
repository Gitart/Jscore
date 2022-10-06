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



## [Смотрите также](https://developer.mozilla.org/ru/docs/Web/API/IndexedDB_API#%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B8%D1%82%D0%B5_%D1%82%D0%B0%D0%BA%D0%B6%D0%B5 "Permalink to Смотрите также")

*   [localForage](https://localforage.github.io/localForage/): Polyfill, предоставляющий простое имя: синтаксис значения для клиентского хранилища данных, которое использует IndexedDB в фоновом режиме, но обращается к WebSQL, а затем к localStorage в браузерах, которые не поддерживают IndexedDB.
*   [Dexie.js](https://www.dexie.org/): Обёртка для IndexedDB, позволяющая значительно ускорить разработку кода благодаря красивому и простому синтаксису.
*   [ZangoDB](https://github.com/erikolson186/zangodb): Интерфейс, подобный MongoDB, для IndexedDB, который поддерживает большинство знакомых функций фильтрации, проекции, сортировки, обновления и агрегирования MongoDB.
*   [JsStore](https://jsstore.net/): Оболочка IndexedDB с синтаксисом, подобным SQL.
*   [MiniMongo](https://github.com/mWater/minimongo): Клиентский MongoDB, поддерживаемый localStorage, с синхронизацией сервера по http. MiniMongo используется в MeteorJS.
*   [PouchDB](https://pouchdb.com/): Клиентская реализация CouchDB в браузере с использованием IndexedDB
*   [idb](https://www.npmjs.com/package/idb): Крошечная (~1,15 КБ) библиотека, которая в основном представляет API IndexedDB, но с небольшими улучшениями, которые имеют большое значение для удобства использования.
*   [idb-keyval](https://www.npmjs.com/package/idb-keyval): Суперпростое-маленькое (~600 Б) хранилище ключей на основе Promise, реализованное с помощью IndexedDB
*   [sifrr-storage:](https://www.npmjs.com/package/@sifrr/storage) Небольшая (~2 КБ) библиотека на основе Promise для хранения ключей и значений на стороне клиента. Работает с IndexedDB, localStorage, WebSQL, Cookies. Может автоматически использовать поддерживаемое хранилище, доступное в зависимости от приоритета.
*   [lovefield](https://github.com/google/lovefield): Lovefield - это реляционная база данных для веб-приложений. Написана на JavaScript, работает кроссбраузерно. Предоставляет API-интерфейсы, подобные SQL, быстрые, безопасные и простые в использовании.


### Link
https://developer.mozilla.org/ru/docs/Web/API/IndexedDB_API/Using_IndexedDB     
https://javascript.info/indexeddb   


