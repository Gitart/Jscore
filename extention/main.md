
https://russianblogs.com/article/6441988485
## Разработка расширения Chrome

> Я разработал этот проект, когда мне было скучно дома. Отправной точкой является сохранение выделенного текста на веб-странице с помощью подключаемого модуля Chrome. Позже я сделал и переднюю, и заднюю части (Koa2 + React):
>
> [Исходный код плагина Chrome](https://github.com/ecmadao/cliper-chrome)
>
> [Внешний и внутренний исходный код, соответствующий плагину](https://github.com/ecmadao/cliper-backend)

### Обзор

#### расширение хром

Все должны быть знакомы с расширением Chrome. Оно может помочь нам выполнять некоторые быстрые операции с помощью скриптов. Плагин может захватывать веб-контент, вкладки, локальное хранилище или поведение пользователя; он также может в определенной степени изменять пользовательский интерфейс браузера, например, контекстное меню на странице, всплывающее окно после нажатия на логотип плагина в правом верхнем углу браузера. Окно или новая вкладка браузера

#### Причина развития

Как обычно, спросите себя, почему? Как?

why：

*   Когда я обычно читаю сообщения в блогах, я хочу извлечь некоторые абзацы или примечания, но не хочу копировать и вставлять.

how：

*   Программа расширения Chrome, которая может быстро сохранить выделенный текст на текущей странице через меню правой кнопки мыши или сочетания клавиш.

*   Если текст не выделен, сохраните веб-ссылку

*   Должен быть соответствующий фоновый сервис, сохранить пользователя, клипер, страницу (после этого статья не будет задействована)

*   Также имеется соответствующий интерфейс для просмотра моих сохраненных записей (впоследствии эта статья не будет затрагивать)

Сначала на картинке результата:

![chrome extension - login](https://russianblogs.com/images/48/93789637daab144e70614dba8c623560.png "chrome extension - login")

![chrome extension - info](https://russianblogs.com/images/48/93789637daab144e70614dba8c623560.png "chrome extension - info")

![chrome extension - frontend](https://russianblogs.com/images/449/ac93376aa03438a75f2a301a21f71ad9.png "chrome extension - frontend")

> clip имеет значение редактирования, поэтому проект называется cliper

За последние два дня Аннет наконец купила сервер, наконец развернула URL и запустила плагин для Chrome:

*   [cliper](http://cliper.com.cn)

*   [cliper extension](https://chrome.google.com/webstore/detail/biijehenaabpogldekblkfgooifmagbi)

### [`manifest.json`](https://crxdoc-zh.appspot.com/extensions/manifest)

Создается в корневом каталоге проекта`manifest.json`Файл, который будет охватывать основную информацию о расширении и указывать необходимые разрешения и файлы ресурсов.

```
{     // Требуется следующее     "manifest_version": 2, // должно быть 2, версия 1 устарела     "name": "cliper", // имя программы расширения     "version": "0.01", // номер версии       // Следующее необязательно       // рекомендуемые     "description": "Описание",  "icons": {    "16": "icons/icon_16.png",    "48": "icons/icon_48.png",    "64": "icons/icon_64.png",    "128": "icons/icon_128.png"  },  "author": "ecmadao",       // Заполняем в соответствии с используемыми вами разрешениями  "permissions": [         // Например    "tab",    "storage",         // Если вы будете запрашивать API внешнего домена или ресурс в js, вы должны добавить ссылку на внешний домен    "http://localhost:5000/*"  ],       // options_page указывает, можно ли щелкнуть «параметры» во всплывающем списке при щелчке правой кнопкой мыши по логотипу подключаемого модуля в верхнем правом углу, а страницу, открывшуюся после щелчка левой кнопкой мыши, когда можно щелкнуть  "options_page": "view/options.html",       // browser_action, всплывающее окно, которое появляется, когда вы щелкаете левой кнопкой мыши логотип подключаемого модуля в верхнем правом углу. Если вы не заполните этот пункт, нажатие на логотип не будет иметь смысла  "browser_action": {    "default_icon": {      "38": "icons/icon_38.png"    },         "default_popup": "view / popup.html", // На самом деле всплывающая страница является обычным html         "default_title": "Сохранить в клипер"  },       // фон, файлы, выполняемые в фоновом режиме, обычно нужно указывать только js. Будет работать в фоновом режиме глобально после открытия браузера  "background": {    "scripts": ["js/vendor/jquery-3.1.1.min.js", "js/background.js"],         // постоянный означает постоянный. Если это чистый глобальный фоновый js, который должен работать все время, нет необходимости настраивать постоянный (или истинный). При настройке как false он становится событием js, которое все еще существует в фоновом режиме, загружается при необходимости и выгружается при простое.    "persistent": false  },       // content_scripts, файлы, запущенные на каждой странице браузера, вы можете получить контекстную DOM текущей страницы  "content_scripts": [    {             // совпадения совпадения content_scripts могут выполняться на каких страницах      "matches" : ["http://*/*", "https://*/*"],      "js": ["js/vendor/jquery-3.1.1.min.js", "js/vendor/keyboard.min.js", "js/selection.js", "js/notification.js"],      "css": ["css/notification.css"]    }  ]}
```

Таким образом, у нас есть всего три файла ресурсов для трех операционных сред:

*   `browser_action`

    *   Управление всплывающим окном, которое появляется после щелчка по логотипу, охватывая связанные html / js / css

    *   Во всплывающем окне будет выполнена операция входа / регистрации, а информация о пользователе будет сохранена в локальном хранилище. Основная информация отображается для вошедших в систему пользователей

*   `background`

    *   Работать постоянно в фоновом режиме или запускаться после пробуждения из-за события

    *   Щелкните контекстное меню, и здесь будут запускаться события асинхронного сохранения.

*   `content_scripts`

    *   Файл, запущенный на просматриваемой в данный момент странице, может управлять DOM.

    *   Поэтому я буду отслеживать событие выбора пользователя в этом файле

Примечание:

*   `content_scripts`Если не`matches`, Расширение не может быть загружено нормально и не может быть добавлено через «Загрузить неупакованное расширение». если твой`content_scripts`Если есть js, который может работать на всех страницах, заполните`"matches" : ["http://*/*", "https://*/*"]`Можно

*   Рекомендовать`background`средний`persistent`Установить как`false`, Запустите фоновый js в соответствии с событием

### Жизненный цикл JS в разных операционных средах

Как упоминалось выше, три типа JS имеют три операционных среды, и их жизненные циклы, операционный DOM / интерфейсы также различаются.

#### [`content_scripts`](https://crxdoc-zh.appspot.com/extensions/content_scripts)

> `content_scripts`Будет вызываться при начальной загрузке каждой вкладки и выгружаться при закрытии страницы.

Сценарий содержимого запускается под каждой вкладкой. Хотя он может получить доступ к DOM страницы, он не может получить доступ к глобальным переменным или функциям, созданным другими файлами JS в этом. Другими словами, каждый`content_scripts`(И внешние файлы JS) независимы друг от друга, только:

```
"content_scripts": [  {    "js": [...]  }]
```

`js`Каждый JS в определенном массиве может влиять друг на друга.

#### [`background`](https://crxdoc-zh.appspot.com/extensions/event_pages)

> Официальная рекомендация - настроить фоновый js как`"persistent": false`, Чтобы его можно было загружать при необходимости и выгружать, когда он снова переходит в состояние ожидания

Когда это позволит`background`Файл ресурсов загружен?

*   Приложение устанавливается или обновляется впервые

*   Слушайте событие, которое должно сработать (например,`chrome.runtime.onInstalled.addListener`)

*   Слушайте файлы JS в других средах для отправки сообщений (например,`chrome.runtime.onMessage.addListener`)

*   Остальные файлы ресурсов расширения называются`runtime.getBackgroundPage`

#### [`browser_action`](https://crxdoc-zh.appspot.com/extensions/browserAction)

> `browser_action`Ресурсы в нем будут инициализированы при открытии всплывающего окна и выгружены при его закрытии.

`browser_action`Среда выполнения JS / CSS, определенная в, ограничена всплывающим окном и будет инициализироваться каждый раз при нажатии всплывающего окна. Но это может вызвать некоторые`chrome api`Для взаимодействия с другими js

Иначе:

*   `browser_action`JS, используемый в файле HTML, не может быть напрямую`<script></script>`Форма строки записывается в HTML, и ее нужно отдельно импортировать в файл JS.

*   Если есть другие сторонние зависимости, например`jQuery`И другие файлы, которые нельзя импортировать через CDN, но перед импортом необходимо сохранить файлы ресурсов в каталоге проекта.

### Взаимодействие между разными операционными средами JS

Хотя операционная среда и жизненный цикл различаются, к счастью, Chrome предоставляет нам несколько общих API для всех трех типов JS, которые могут взаимодействовать друг с другом между JS.

#### [chrome.runtime](https://crxdoc-zh.appspot.com/extensions/runtime)

> [Обмен сообщениями](https://crxdoc-zh.appspot.com/apps/messaging)

##### Обычные сообщения

по`runtime`из`onMessage`、`sendMessage`И другими методами вы можете передавать и отслеживать сообщения между каждым JS. Дайте каштан:

в`popup.js`В, мы позволяем ему отправлять сообщение после инициализации:

```
chrome.runtime.sendMessage({  method: 'showAlert'}, function(response) {});
```

Затем в`background.js`, Следите за приемом сообщений и обрабатывайте их:

```
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {  if (message.method === 'showAlert') {    alert('showAlert');  }});
```

Приведенный выше код будет выдавать предупреждение каждый раз, когда открывается всплывающее окно плагина.

`chrome.runtime`Общие методы:

```
// Получить объект окна JavaScript фоновой веб-страницы, работающей в текущем расширенииchrome.runtime.getBackgroundPage(function (backgroundPage) {     // backgroundPage - объект окна}); // Послать сообщение chrome.runtime.sendMessage(message, function(response) {     // ответ представляет собой ответ на сообщение, вы можете получить ответ на сообщение, отправленный методом sendResponse}); // слушаем сообщенияchrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {     // message - это сообщение, которое вы отправили     // отправитель представляет отправителя, вы можете использовать sender.tab, чтобы определить, отправлено ли сообщение из сценария содержимого     // sendResponse может отправлять ответ напрямую, например:  sendResponse({    method: 'response',    message: 'send a response'  });});
```

Следует отметить, что даже если вы зарегистрировали слушателей сообщений в нескольких JS`onMessage.addListener`, И только один слушатель может получать через`runtime.sendMessage`Сообщение отправлено. Если вам нужны разные слушатели для отдельного прослушивания сообщений, вам нужно использовать`chrome.tab` API для указания получателя сообщения

Дайте каштан:

Как упоминалось выше, вам необходимо`content_scripts`Чтобы прослушать событие выбора, получите выделенный текст и щелкните контекстное меню в`background`Мониторинг. Затем вам нужно отправить выделенный текст в виде сообщения на`background`,в`background`Полное асинхронное сохранение.

```
// Получаем выделение в content_scripts и отправляем сообщение// js/selection.js  // Получаем выделенный текстfunction getSelectedText() {  if (window.getSelection) {    return window.getSelection().toString();  } else if (document.getSelection) {    return document.getSelection();  } else if (document.selection) {    return document.selection.createRange().text;  }} // Информация о формацииfunction getSelectionMessage() {  var text = getSelectedText();  var title = document.title;  var url = window.location.href;  var data = {    text: text,    title: title,    url: url  };  var message = {    method: 'get_selection',    data: data  }  return message;} // Послать сообщение function sendSelectionMessage(message) {  chrome.runtime.sendMessage(message, function(response) {});} // Слушаем событие отпускания мыши, только когда вы щелкаете правой кнопкой мыши, вы получите текстwindow.onmouseup = function(e) {  if (!e.button === 2) {    return;  }  var message = getSelectionMessage();  sendSelectionMessage(message);};
```

```
// Получение сообщений в фоновом режиме, отслеживание щелчка правой кнопкой мыши и асинхронное сохранение данных// js/background.js  // Создаем глобальный объект для сохранения значения полученного сообщенияvar selectionObj = null;  // Сначала создаем менюchrome.runtime.onInstalled.addListener(function() {  chrome.contextMenus.create({    type: 'normal',    title: 'save selection',    id: 'save_selection',         // Только когда есть выбор    contexts: ['selection']  });}); // отслеживаем щелчок по менюchrome.contextMenus.onClicked.addListener(function(menuItem) {  if (menuItem.menuItemId === "save_selection") {    addCliper();  }});  // Мониторинг сообщений, получение сообщения, переданного из content_scripts, и сохранение его в глобальном объектеchrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {  if (message.method === 'get_selection') {    selectionObj = message.data;  }});  // Асинхронное сохранениеfunction addCliper() {  $.ajax({    // ...  });}
```

##### Длинная ссылка

по`chrome.runtime.connect`(или`chrome.tabs.connect`) Может устанавливать длинные связи между разными типами JS.

Отправителю информации необходимо разработать уникальный тип информации, отправлять и отслеживать информацию:

```
var port = chrome.runtime.connect({type: "connection"});port.postMessage({  method: "add",  datas: [1, 2, 3]});port.onMessage.addListener(function(msg) {  if (msg.method === "answer") {      console.log(msg.data);  }});
```

Получатель должен зарегистрироваться, чтобы отслеживать и определять тип сообщения:

```
chrome.runtime.onConnect.addListener(function(port) {  console.assert(port.type == "connection");  port.onMessage.addListener(function(msg) {    if (msg.method == "add") {      var result = msg.datas.reduce(function(previousValue, currentValue, index, array){      return previousValue + currentValue;  });      port.postMessage({        method: "answer",        data: result      });    }  });});
```

#### [chrome.tabs](https://crxdoc-zh.appspot.com/extensions/tabs)

Чтобы использовать этот API, вам необходимо`manifest.json`Регистрация:

```
"permissions": [  "tabs",  // ...]
```

```
// Получить текущую вкладкуchrome.tabs.getCurrent(function(tab) {     // Вы можете получить идентификатор вкладки через tab.id});  // Отфильтровать подходящие вкладки в виде массива через queryInfochrome.tabs.query(queryInfo, function(tabs) {})  // Точно отправляем сообщение в `content_scripts` страницыchrome.tabs.sendMessage(tabId, message, function(response) {});
```

Дайте каштан:

в`background.js`В, мы получаем текущую вкладку и отправляем сообщение:

```
chrome.tabs.getCurrent(function(tab) {  chrome.tabs.sendMessage(tab.id, {    method: 'tab',    message: 'get active tab'  }, function(response) {});}); // илиchrome.tabs.query({active: true, currentWindow: true}, function(tabs) {  chrome.tabs.sendMessage(tabs[0].id, {    method: 'tab',    message: 'get active tab'  }, function(response) {  });});
```

Затем в`content_scripts`В, мониторинг сообщений:

```
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {  if (message.method === 'tab') {    console.log(message.message);  }});
```

#### [chrome.storage](https://crxdoc-zh.appspot.com/apps/storage)

`chrome.storage`Основывается на`localStorage`Локальное хранилище, но Chrome оптимизировал для него ввод-вывод, который может хранить данные в виде объектов, и он не будет очищен, потому что браузер полностью закрыт.

Точно так же, чтобы использовать этот API, вам необходимо`manifest.json`Регистрация:

```
"permissions": [  "storage",  // ...]
```

`chrome.storage`Есть две формы,`chrome.storage.sync`с`chrome.storage.local`：

`chrome.storage.local`Основан на локальном хранилище, и`chrome.storage.sync`Сначала он определит, вошел ли текущий пользователь в учетную запись Google. При входе в систему сохраненные данные будут автоматически синхронизироваться через службу Google, в противном случае они будут использоваться.`chrome.storage.local`Только локальное хранилище

> Примечание. Поскольку область хранения не зашифрована, конфиденциальную информацию о пользователе хранить нельзя.

API:

```
// Хранилище данныхStorageArea.set(object items, function callback) // сбор информации StorageArea.get(string or array of string or object keys, function callback) // Удаление данныхStorageArea.remove(string or array of string keys, function callback) // Очистить все хранилищеStorageArea.clear(function callback) // отслеживаем изменения в хранилищеchrome.storage.onChanged.addListener(function(changes, namespace) {});
```

Дайте каштаны:

мы в`browser_action`Операция входа / регистрации пользователя завершена, и некоторая информация о пользователе хранится в`storage`в. Каждый раз, когда он инициализируется, он будет проверять, есть ли хранилище, если нет, пользователю нужно войти в систему, а затем добавить его после успеха:

```
// browser_action// js.popup.js chrome.storage.sync.get('user', function(result) {     // Получаем сохраненный объект пользователя через result.user  result && setPopDOM(result.user);}); function setPopDOM(user) {  if (user && user.userId) {    // show user UI  } else {    // show login UI  }}; document.getElementById('login').onclick = function() {  // login user..     // Запрашиваем асинхронный вход через ajax и после успешного обратного вызова сохраняем возвращенный объект пользователя в хранилище  chrome.storage.sync.set({user: user}, function(result) {});}
```

В JS в других средах мы можем отслеживать`storage`Перемена:

```
// background// js/background.js  // Глобальный объект пользователя, используемый для сохранения информации о пользователе, поэтому userId возникает асинхронноvar user = null; chrome.storage.onChanged.addListener(function(changes, namespace) {  for (key in changes) {    if (key === 'user') {      console.log('user storage changed!');      user = changes[key];    }  }});
```

> В общем, до сих пор мы прояснили различия в JS в трех средах, а также способы их передачи и хранения. Кроме того, есть также создание и использование всплывающих окон и контекстных меню. Фактически, использования этих знаний достаточно, чтобы сделать простое расширение Chrome.

### Официально выпущен

На самом деле, я думаю, что самый болезненный шаг во всем процессе - это официально выпустить плагин в магазин Chrome.

*   Прежде всего, вы должны[Информационный центр для разработчиков](https://chrome.google.com/webstore/developer/dashboard/)Зарегистрируйтесь и заплатите 5 долларов. Этот шаг может относиться к[Как стать разработчиком приложений для Chrome](https://segmentfault.com/a/1190000006035525)Одна статья для прохождения проверки и оплаты. Но следует отметить, что учетная запись, которую я использовал при попытке, была китайской учетной записью Google, поэтому я вообще не мог платить. Я не получил ее, пока не перерегистрировал учетную запись в Гонконге.

*   После этого введите серию информации о выпуске. Google предъявляет строгие требования к размеру иконок и баннеров. . Этот шаг может относиться к[Расширение загрузки Google Chrome App Store](https://www.cnblogs.com/xishuai/p/google-chrome-webstore-developer-upload-program.html)Одна статья

Наконец-то это сделано, в сети видно:[cliper extension](https://chrome.google.com/webstore/detail/biijehenaabpogldekblkfgooifmagbi)

### Учебные ресурсы

*   [Создайте расширение Chrome](https://crxdoc-zh.appspot.com/extensions/getstarted)

*   [Стратегия развития расширений Chrome](https://www.cnblogs.com/guogangj/p/3235703.html)

*   [Как стать разработчиком приложений для Chrome](https://segmentfault.com/a/1190000006035525)

*   [Разработка расширения Chrome](https://segmentfault.com/a/1190000005071240)

### Следующий шаг?

*   Расширенные функции плагина

*   Плагин может выделять отмеченный текст на веб-странице.

*   использовать`es6` + `babel`Рефакторинг

*   Мне нужно использовать фреймворк?
