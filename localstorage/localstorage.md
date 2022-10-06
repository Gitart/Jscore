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

    
