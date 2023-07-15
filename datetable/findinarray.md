## Find in array by ID

```js

      var dat = {{.Data}};


      localStorage.setItem("datasklad",JSON.stringify(dat))

      el=FinEl(dat,10)
      console.log(el)
      el=FinEl(dat,12)
      console.log(el)


      function FinEl(dat,desiredId){
          var desiredElement = dat.find(function(element) {
              return element.id === desiredId;
          });

          return desiredElement
      }

```
