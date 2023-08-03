## Serialize and serializeArray


```js
function AddNewBoilerRoom(){
    var dt=$('#formboiler').serializeArray();
    console.log(dt[0].value)
    console.log(getValueByName(dt,"title"))
    
    var data=$('#formboiler').serialize();


    $.ajax({ method: "POST",
        data:   data,
        url:    '/boiler',
        success: function (data){
            setTimeout(2000);
            RefreshTab();
        }
    });
}

// Function to get the value by name from the serialized array
function getValueByName(dt,name) {
    const field = dt.find(item => item.name === name);
    return field ? field.value : null;
}
```
