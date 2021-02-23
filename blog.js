// See: https://blog.teknkl.com/destyle-a-marketo-form/
function site__resetMarketoStyles ( mktoForm )
{
  var formEl = mktoForm.getFormElem()[0],
      arrayFrom = Function.prototype.call.bind(Array.prototype.slice);

  // add a class to checkbox input wrappers
  var checkboxFieldWrappers = arrayFrom(formEl.querySelectorAll(".mktoCheckboxList"));
  checkboxFieldWrappers.forEach(function(el){
    let checkboxes = el.getElementsByTagName('input');
    if ( checkboxes.length === 1 ) {
      el.parentNode.classList.add("mktoFieldWrap--checkbox");
    }
  });

  // add a class to select input wrappers
  var selectFieldWrappers =  arrayFrom(formEl.querySelectorAll("select.mktoField"));
  selectFieldWrappers.forEach(function(el){
    el.parentNode.classList.add("mktoFieldWrap--select");
  });

  // remove element styles from <form> and children
  var styledEls = arrayFrom(formEl.querySelectorAll("[style]")).concat(formEl);
  styledEls.forEach(function(el) {
    el.removeAttribute("style");
  });

  // disable remote stylesheets and local <style>s
  var styleSheets = arrayFrom(document.styleSheets);
  styleSheets.forEach(function(ss) {
    if ( [mktoForms2BaseStyle,mktoForms2ThemeStyle].indexOf(ss.ownerNode) != -1 || formEl.contains(ss.ownerNode) ) {
      ss.disabled = true;
    }
  });

  // add a class to form rows
  var formRows = arrayFrom(formEl.querySelectorAll(".mktoFormRow"));
  formRows.forEach(function(el){
    var firstInput = el.querySelector("input,select,textarea");
    if ( firstInput ) {
      el.classList.add("mktoFormRow--"+firstInput.type);
      el.classList.add("mktoFormRow--"+firstInput.name);
    }
  });

};

function site__mktoForm__loaded( descriptor )
{
  MktoForms2.whenRendered( function( form ) {
    site__resetMarketoStyles( form );
  } );

  MktoForms2.setOptions({
    formXDPath : "/rs/129-VQU-890/images/marketo-xdframe-relative.html",
    rootUrl: "//pages.linode.com",
    baseUrl: "//pages.linode.com/js/forms2/",
    formSubmitPath: "//pages.linode.com/index.php/leadCapture/save2"
  });

  descriptor.action = "/index.php/leadCapture/save";
}
</script><form id="mktoForm_1019" class=""></form>
<script type="dce7587df680e4d4e4be8b13-text/javascript">

  (function(w){

    // Save references to resolve and reject
    // So we can call them from the callback
    var promiseResolve, promiseReject;
    var promise = new Promise(function(resolve, reject){
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var addAsterisk = function(label) {
      if ( typeof label === 'string' ) {
        label = '* ' + label.replace( /^[\* ]+/, '' );
      }
      return label;
    }
    w.mktoPromises = w.mktoPromises || [];
    w.mktoPromises.push( promise );

    w.site__mktoForm_1019__loaded = w.site__mktoForm_1019__loaded || function( descriptor ) {

      if ( !descriptor ) throw new Error('Marketo descriptor not supplied.');

      site__mktoForm__loaded( descriptor );

            
            
      // // Log the Descriptor for debugging
      // var d = JSON.parse(JSON.stringify(descriptor));
      // window.console.log( "Descriptor" );
      // window.console.log( d );

      MktoForms2.newForm( descriptor, function( form ) {
        form.addHiddenFields( { munchkinId: "129-VQU-890" } );

                
                      form.onSuccess( function( values, followUpUrl ) {
              w.location.href = 'https://www.linode.com/blog/linode/linode-turns-14/';
              return false;
            } );
          
        
        form.render();
        promiseResolve(1019);
      } );

    };
  })(window);
