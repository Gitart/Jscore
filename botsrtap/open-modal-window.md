## Open Modal window in boostrap 5 version
```js
var galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'), {
  keyboard: false
});

galleryModal.show();
```

## Sample
```js
  // New document
   function Openwindow() {
       // id = Math.floor(new Date().valueOf() * Math.random());
       id = new Date().valueOf();
       $("#numdocument").html("Накладна # " + id);
       $("#num").val(id);
       // $("#createat").val(dt);
       
       var myModal = new bootstrap.Modal(document.getElementById("Mmodalwindow"), {});
       myModal.show();
   }
   ```
