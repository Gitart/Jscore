## Convert date to short view


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
