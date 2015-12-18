
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
