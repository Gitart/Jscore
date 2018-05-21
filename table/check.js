Подсчет количества выбранных галочек
var numberOfChecked = $('input:checkbox:checked').length;
var totalCheckboxes = $('input:checkbox').length;
var numberNotChecked = totalCheckboxes - numberOfChecked;

EDIT
Or even simple
var numberNotChecked = $('input:checkbox:not(":checked")').length
$("input[type=checkbox][checked]").each( 
    function() { 
       // Insert code here 
    } 
);

 
$(document).ready(function () {
  $("input[type=checkbox]").each(function () {
    $(this).change(updateCount);
  });

  updateCount();

  function updateCount () {
    var count = $("input[type=checkbox]:checked").size();

    $("#count").text(count);
    $("#status").toggle(count > 0);
  };});

 
<!DOCTYPE html><html>
  <head>
    <meta charset="utf-8">
    <title>Test</title>
    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript">
      $(document).ready(function () {
        $("input[type=checkbox]").each(function () {
          $(this).change(updateCount);
        });

        updateCount();

        function updateCount () {
          var count = $("input[type=checkbox]:checked").size();

          $("#count").text(count);
          $("#status").toggle(count > 0);
        };
      });
    </script>
  </head>
  <body>
    <ul>
      <li><input type="checkbox"> One</li>
      <li><input type="checkbox"> Two</li>
      <li><input type="checkbox"> Three</li>
    </ul>

    <div id="status">
      <p id="count">0</p>
    </div>
  </body></html>

 
var totalChecked        = 0;
$("input[type=checkbox]:checked").each(function(){
   totalChecked++;});                                    
if(totalChecked > 0){
   $("div.display").css("display,block");
   $("div.display").text(totalChecked);}else{
   $("div.display").css("display,none");}

 
$("#checkboxes").children("input:checked")

will give you an array of the elements themselves. If you just specifically need the names:
$("#checkboxes").children("input:checked").map(function() {
    return this.name;});

 
var selected = [];
$('div#checkboxes input[type=checkbox]').each(function() {
   if ($(this).checked) {
       selected.push($(this).attr('name'));
   }});

 
var Array = new Array();

$("#Div").find("input:checked").each(function (i, ob) { 
    roles.push($(ob).val()); 
});
 

$(".myCheckBoxClass:checked").length;

 
function isCheckedById(id) {
  alert(id);
  var checked = $("input[@id=" + id + "]:checked").length;
  alert(checked);

  if (checked == 0) {
    return false;
  } else {
    return true;
  }}

 
<input type="checkbox" name="chk[]" id="chk[]" value="Apples" /><input type="checkbox" name="chk[]" id="chk[]" value="Bananas" />

Instead, drop the ID, and then select them by name, or by a containing element:
<fieldset id="checkArray">
    <input type="checkbox" name="chk[]" value="Apples" />
    <input type="checkbox" name="chk[]" value="Bananas" /></fieldset>

And now the jQuery:
var atLeastOneIsChecked = $('#checkArray :checkbox:checked').length > 0;

// or, without the container:

var atLeastOneIsChecked = $('input[name="chk[]"]:checked').length > 0;

 
script>function checkAllCheckBox(value){
   if($('#select_all_').is(':checked')){
   $(".check_").attr ( "checked" ,"checked" );
    }
    else
    {
        $(".check_").removeAttr('checked');
    }

 }

</script><input type="checkbox" name="chkbox" id="select_all_" value="1" />


<input type="checkbox" name="chkbox" class="check_" value="Apples" /><input type="checkbox" name="chkbox" class="check_" value="Bananas" /><input type="checkbox" name="chkbox" class="check_" value="Apples" /><input type="checkbox" name="chkbox" class="check_" value="Bananas" />
 
<input type="checkbox" name="mycheckbox" id="mycheckbox" /><br><br><input type="button" id="test-with-checked" value="Test with checked" /><input type="button" id="test-with-is" value="Test with is" /><input type="button" id="test-with-prop" value="Test with prop" />

Example 1 - With checked
$("#test-with-checked").on("click", function(){
    if(mycheckbox.checked) {
        alert("Checkbox is checked.");
    } else {
        alert("Checkbox is unchecked.");
    }}); 

Example 2 - With jQuery is, NOTE - :checked
var check;
$("#test-with-is").on("click", function(){
    check = $("#mycheckbox").is(":checked");
    if(check) {
        alert("Checkbox is checked.");
    } else {
        alert("Checkbox is unchecked.");
    }}); 

Example 3 - With jQuery prop
var check;
$("#test-with-prop").on("click", function(){
    check = $("#mycheckbox").prop("checked");
    if(check) {
         alert("Checkbox is checked.");
    } else {
        alert("Checkbox is unchecked.");
    }}); 
 
togglecheckBoxs =  function( objCheckBox ) {

    var boolAllChecked = true;

    if( false == objCheckBox.checked ) {
        $('#checkAll').prop( 'checked',false );
    } else {
        $( 'input[id^="someIds_"]' ).each( function( chkboxIndex, chkbox ) {
            if( false == chkbox.checked ) {
                $('#checkAll').prop( 'checked',false );
                boolAllChecked = false;
            }
        });

        if( true == boolAllChecked ) {
            $('#checkAll').prop( 'checked',true );
        }
    }}
 

Toggle checkbox checked
$("#checkall").click(function(){
    $("input:checkbox").prop( 'checked',$(this).is(":checked") );})
