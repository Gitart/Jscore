## Convert date to short view

### Convert to **dd.mm.yyyy** to **yyyy.mm.ddThh:mm:ss**

```js
// **************************************************
// Convert to dd.mm.yyyy to yyyy.mm.ddThh:mm:ss
// **************************************************
function formatDateStr(inputDate) {
    const date    = new Date();
    const hours   = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    var parts   = inputDate.split('.');
    var outDate = `${parts[2]}-${parts[1]}-${parts[0]}T${hours}:${minutes}:${seconds}Z`
    return outDate;
}

// **************************************************
// Today
// **************************************************
function ToDay(){
    const today = new Date();
    const yyyy = today.getFullYear();
    
    // Months start at 0!
    let mm = today.getMonth() + 1; 
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    var todaystr = dd + '.' + mm + '.' + yyyy;
    return todaystr
}

// **************************************************
// Config set calendar
// **************************************************
function SetCalendar(name){
    $(name).datepicker({
        format:        'dd.mm.yyyy',
        endDate:       '+1000d',
        minDate:       '-1000d',
        autoclose:      true,
        todayBtn:       true,
        todayHighlight: true,
        weekStart:      1,
        changeMonth:    true,
        title:          "Календар",
        language:       "uk"
    });
}
```







### Convert from time
**2023-01-11T15:09:22+02:00 -> 11-01-2023 15:09:22**
```js
function DateSp(dat){
    f=dat.split("-", 1)
    y=dat.split("-", 3)[0]
    m=dat.split("-", 3)[1]
    d=dat.split("-", 3)[2]
    d=d.split("T",2)[0]
    t=dat.split("T",2)[1]
    h=t.split(":",1)[0]
    mm=t.split(":",2)[1]
    s=t.split(":",3)[2]
    s=s.split("+",2)[0]
    return d+"-"+m+"-"+y+" "+h+":"+mm+":"+s;
}
```

### Convert date
**2023-01-11T15:09:22+02:00 -> 11-01-2023**
```js
function DateSpYear(dat){
    f=dat.split("-", 1)
    y=dat.split("-", 3)[0]
    m=dat.split("-", 3)[1]
    d=dat.split("-", 3)[2]
    d=d.split("T",2)[0]
    return d+"-"+m+"-"+y;
}
```
