## Проверка карты

```golang
function cc_brand_id(cur_val) {
  var sel_brand;
 
  // the regular expressions check for possible matches as you type, hence the OR operators based on the number of chars
  // regexp string length {0} provided for soonest detection of beginning of the card numbers this way it could be used for BIN CODE detection also
 
  //JCB
  jcb_regex = new RegExp('^(?:2131|1800|35)[0-9]{0,}$'); //2131, 1800, 35 (3528-3589)
  // American Express
  amex_regex = new RegExp('^3[47][0-9]{0,}$'); //34, 37
  // Diners Club
  diners_regex = new RegExp('^3(?:0[0-59]{1}|[689])[0-9]{0,}$'); //300-305, 309, 36, 38-39
  // Visa
  visa_regex = new RegExp('^4[0-9]{0,}$'); //4
  // MasterCard
  mastercard_regex = new RegExp('^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$'); //2221-2720, 51-55
  maestro_regex = new RegExp('^(5[06789]|6)[0-9]{0,}$'); //always growing in the range: 60-69, started with / not something else, but starting 5 must be encoded as mastercard anyway
  //Discover
  discover_regex = new RegExp('^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$');
  ////6011, 622126-622925, 644-649, 65
 
 
  // get rid of anything but numbers
  cur_val = cur_val.replace(/\D/g, '');
 
  // checks per each, as their could be multiple hits
  //fix: ordering matter in detection, otherwise can give false results in rare cases
  if (cur_val.match(jcb_regex)) {
    sel_brand = "jcb";
  } else if (cur_val.match(amex_regex)) {
    sel_brand = "amex";
  } else if (cur_val.match(diners_regex)) {
    sel_brand = "diners_club";
  } else if (cur_val.match(visa_regex)) {
    sel_brand = "visa";
  } else if (cur_val.match(mastercard_regex)) {
    sel_brand = "mastercard";
  } else if (cur_val.match(discover_regex)) {
    sel_brand = "discover";
  } else if (cur_val.match(maestro_regex)) {
    if (cur_val[0] == '5') { //started 5 must be mastercard
      sel_brand = "mastercard";
    } else {
      sel_brand = "maestro"; //maestro is all 60-69 which is not something else, thats why this condition in the end
    }
  } else {
    sel_brand = "unknown";
  }
 
  return sel_brand;
}
 
function out() {
  var args = Array.prototype.slice.call(arguments, 0);
  document.getElementById('output').innerHTML += args.join(" ") + "\n";
}
 
var test_cards = new Array();
test_cards[0] = '41111';
test_cards[1] = '6759649826438453';
test_cards[2] = '378282246310005';
test_cards[3] = '371449635398431';
test_cards[4] = '378734493671000';
test_cards[5] = '30569309025904';
test_cards[6] = '38520000023237';
test_cards[7] = '6011111111111117';
test_cards[8] = '6011000990139424';
test_cards[9] = '3530111333300000';
test_cards[10] = '3566002020360505';
test_cards[11] = '5555555555554444';
test_cards[12] = '5105105105105100';
test_cards[13] = '4012888888881881';
test_cards[14] = '4222222222222';
test_cards[15] = '6799990100000000019';
test_cards[16] = '222099'; //below new MC
test_cards[17] = '222100'; //new MC
test_cards[18] = '272099'; //new MC
test_cards[19] = '272100'; //above MC
test_cards[20] = '34343434343434'; //above MC
 
for (i = 0; i < test_cards.length; i++) {
  out(test_cards[i] + ' = ' + cc_brand_id(test_cards[i]) + '<br>');
}
```

For the display the ooutput use below html code.

```
<div id="output"></div>
```
