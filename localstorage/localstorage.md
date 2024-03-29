## Localstorage

Значение локального хранилища можно легко разделить между несколькими окнами одного и того же браузера. Файлы cookie позволяют хранить только 4 КБ данных, но WebStorage (как локальный, так и сеансовый) предоставляет около 10 МБ места для хранения данных.

```js
    localStorage.mainid="A:1223";
    sessionStorage.password="secret";  
```



**cookies**
Файлы cookie всегда отправляются с каждым HTTP-запросом (обычно даже для изображений), в результате чего по сети отправляется больше данных.

**webstorage**
Данные не включаются в каждый запрос к серверу, а используются ТОЛЬКО по запросу.


```
sessionStorage.setItem("sessionData", "I am set in session storage.");    
    localStorage.setItem("localData", "I am set in local storage.");    
    document.cookie = "Available on both client and server side";   
```


## Other

*   To store data in session storage, setItem () function is used.

    ```javascript
    sessionStorage.setItem (‘key’,’value’);
    ```

    **Example:**

    ```javascript
    sessionStorage.setItem (‘username’,’ABC’);
    ```

    We can only store strings in Session Storage. To save the objects in session, first convert the object into JSON string and then store this string in Session Sorage as in the following,

    ```javascript
    sessionStorage.setItem (‘object’, JSON.stringify(object));
    ```

*   To retrieve the data from Session Storage getItem() function is used.

    ```javascript
    sessionStorage.getItem(‘key’);
    ```

    **Example:**

    ```javascript
    var username= sessionStorage.getItem(‘username’);
    ```

    If JSON string is stored in Session Storage then you can convert it into object as below.

    ```javascript
    var object=JSON.parse(sessionStorage.getItem(‘object’));
    ```

*   To delete a particular key from Session Storage, removeItem function is used.

    ```javascript
    sessionStorage.removeItem(‘key’);
    ```

     **Example:**

    ```javascript
    sessionStorage.removeItem(‘username’);
    ```

*   To delete all the keys from Session Storage, clear function is used as shown below

    ```javascript
    sessionStorage.clear();
    ```

    To get all KEY/VALUE pairs from Session Storage, you can loop through Session Storage like the following.

    ```javascript
    for (var i = 0; i < sessionStorage.length; i++)
    {
       var key = sessionStorage.key(i);
       var value = sessionStorage.getItem(key);
    }
    ```
    # local storage
    1.  To store data in Local Storage, setItem() function is used.

    ```javascript
    localStorage.setItem (‘key’,’value’);
    ```

    **Example:**

    ```javascript
    localStorage.setItem (‘username’,’ABC’);
    ```

We can only store strings in Local Storage. To save objects in Local Storage, first convert the object into JSON string and then store this string in Local Storage as shown below:

```javascript
localStorage.setItem (‘object’, JSON.stringify(object));
```

To retrieve the data from Local Storage, getItem() function is used.

```javascript
localStorage.getItem(‘key’);
```

**Example:**

```javascript
var username= localStorage.getItem(‘username’);
```

*   To store data in the local storage setItem() function is used.

    1.  localStorage.setItem (‘key’,’value’);

    **Example**
    1.  localStorage.setItem (‘username’,’ABC’);

    We can only store strings in local storage. To save objects in local first convert object into JSON string and then store this string in local storage as in the following:

    1.  localStorage.setItem (‘object’, JSON.stringify(object));

*   To retrieve data from the local storage getItem() function is used.

    1.  localStorage.getItem(‘key’);

    **Example**

    1.  var username\= localStorage.getItem(‘username’);

    If JSON string is stored in local storage, then you can convert it into the object as in the following:

    1.  var object\=JSON.parse(localStorage.getItem(‘object’));

*   To delete a particular key from local storage removeItem function is used.

    1.  localStorage.removeItem(‘key’);

    **Example**

    1.  localStorage.removeItem(‘username’);

*    To delete all keys from local storage clear function is used:

    1.  localStorage.clear();

    To get all KEY / VALUE pairs from local storage, you can loop through local storage like the following:

    1.  for(var i\=0;i<localStorage.length;i++)
    2.  {
    3.     var key\= localStorage.key(i);
    4.     var value\= localStorage.getItem(key);
    5.  }    


## Cookies
 document.cookie = "Available on both client and server side";
 
