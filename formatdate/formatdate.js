
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
        var fuldate   = curr_year + "." + curr_month + "." + curr_date + " " + curr_hour + ":" + curr_min + ":" + curr_sec; 
        return fuldate;
    }


// **************************************************************
// Date for all format
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocalestring_date_all
// new Date().toLocaleDateString() // 8/19/2020
// new Date().toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}); // 08/19/2020 (month and day with two digits)
// new Date().toLocaleDateString('en-ZA'); // 2020/08/19 (year/month/day) notice the different locale
// new Date().toLocaleDateString('en-CA'); // 2020-08-19 (year-month-day) notice the different locale
// new Date().toLocaleString("en-US", {timeZone: "America/New_York"}); // 8/19/2020, 9:29:51 AM. (date and time in a specific timezone)
// new Date().toLocaleString("en-US", {hour: '2-digit', hour12: false, timeZone: "America/New_York"});  // 09 (just the hour)
// ***************************************************************

function GetDateFormat(){
         let d = new Date().toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}); // 08/19/2020 (month and day with two digits)
         return d
}

// **************************************************************
// Date for all format
// ***************************************************************
function GetDateFormat(){
 let d=new Date('Jun 5 2016').toLocaleString('en-us', {year: 'numeric', month: '2-digit', day: '2-digit'}).replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');
        return d;
}
        


