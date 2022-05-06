## Work with checkbox

# Get alll check box
```js
 // Get checks checkboxes
     function updateCount(){
        var selected = new Array();
        $("tbody input[type=checkbox]:checked").each(function () {
            // alert($(this).attr('id'));
            selected.push($(this).attr('id'));
        });

        if (selected.length==0) {
            $("#shoresult").text("Nothing Selected !");
        }else{
            // alert(selected);
            $("#shoresult").text("IN (" + selected + ")");
        }
      }
 ```  
 
 
 ## Set all checkbox
 ```js
 // Set - unset checkboxes
    function updateCheckAll(){
      // Убрать - установиь все галочки в таблице
      if (!$("#headbox").is(":checked")) {
          updateCheckUncheckAll()
          return
      }

       $("tbody input[type=checkbox]").each(function () {
            // $(this).attr('checked','checked')
            // alert($(this).attr('id'));
             var id = $(this).attr('id');
            document.getElementById(id).checked = true;
        });
    }
```



### Unset all checkbox
```js
 // Set - unset checkboxes
    function CheckAllbox(){
       $("tbody input[type=checkbox]").each(function () {
            var id = $(this).attr('id');
            document.getElementById(id).checked = true;
            // $(this).prop('checked',true);
            // alert($(this).attr('id'));
        });
    }
```


 ### Set all checkboxes
 ```js
    function updateCheckUncheckAll(){
       $("tbody input[type=checkbox]").each(function () {
            // $(this).attr('checked', false)
            // alert($(this).attr('id'));
            var id = $(this).attr('id');
            document.getElementById(id).checked = false;
        });
    }
    ```
 
 ## Warning    
 
 При использовании JQERY конструкция віделения всех и снятие віделени яработает не правильно в случае, если некторые checkbox были установлены или сняты в ручном варианте.
    
