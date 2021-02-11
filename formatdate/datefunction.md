# Формат вида 01.02.2021 12:34:45
----- 


```js
function GetDateFormat(){
         // let d = new Date().toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}); // 08/19/2020 (month and day with two digits)
         let d = new Date().toLocaleString("tr-TR");
         return d
}
```

# Формат вида 01.02.2021 12:34:45
```js
// **************************************************************
// Get Current date in format
// **************************************************************
function Getdate(){
        var d = new Date();
        var curr_date  = d.getDate();
        var curr_month = d.getMonth() + 1;
        var curr_year  = d.getFullYear();
        var curr_hour  = d.getHours();
        var curr_min   = d.getMinutes();
        var curr_sec   = d.getSeconds();
        //document.write(curr_year + "-" + curr_month + "-" + curr_date);
        // var fuldate   = curr_year + "." + curr_month + "." + curr_date + " " + curr_hour + ":" + curr_min + ":" + curr_sec; 
        var fuldate   = curr_date + "." + curr_month + "." + curr_year + " " + curr_hour + ":" + curr_min + ":" + curr_sec; 
        return fuldate;
    }
```    
