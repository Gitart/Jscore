## Multiselect

```js
<script>
      var dt = {{.}};
      var dat = dt.Data;

      $(document).ready(function() {


          // localStorage.setItem("datasklad",JSON.stringify(dat))

          // el=FinEl(dat,10)
          // console.log(el)
          // el=FinEl(dat,12)
          // console.log(el)

          Filltheselect(dat, "sklselect")


          $('#sklselect').on('change', function(){
              var selected = $(this).find("option:selected");
              var arrSelected = [];
              selected.each(function(){
                  arrSelected.push($(this).val());
              });

              console.log(arrSelected)
          });
      })
```

### Fill select fro array
```js
function Filltheselect(data, idselect){

          var $select = $(`#${idselect}`); // Replace 'mySelect' with the actual ID or selector of your <select> element

          $.each(data, function(index, item) {
              $select.append($('<option>', {
                  value: item.id,
                  text: item.title
              }));
          });
      }
```

### Get multi
```js

          $('#sklselect').on('change', function(){
              var selected = $(this).find("option:selected");
              var arrSelected = [];
              selected.each(function(){
                  arrSelected.push($(this).val());
              });

              console.log(arrSelected)
          });
```

**Source**   
https://stackoverflow.com/questions/20516166/bootstrap-multiselect-get-selected-values

