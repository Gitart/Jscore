It’s the same as any dynamic modification to a webpage - use DOM APIs to build the table from scratch or generate an HTML string to insert into the page - here’s the result of the code below

![](https://global.discourse-cdn.com/freecodecamp/original/3X/7/8/78796856d564a2bac44d715ee7db1de14d1ba3a5.png)

Here’s the basics for both approaches - I have a simple HTML page

```html
<!doctype html>
<!-- jsontable.html -->
<head>
<title>JSON To Table</title>
<style> table,td,th {
 border:solid 1px;
 border-collapse:collapse;
} </style>
</head>
<body>
<h1>JSON To Table</h1>
<p><form>
  <button name=string type=button>Table Using HTML String</button>
  <button name=dom type=button>Table Using DOM API</button>
  <p><button name=clear type=button>Clear</button>
  <p><output name=out></output>
</form>
<script src=jsontable.js></script>
</body>
</html>`

Here’s the javascript file referenced above - it’s split into multiple sections below - paste them in order in a single file

The basic idea is simple - convert the JSON string to an object - traverse the JSON object - create DOM structure as strings or objects - insert new DOM into page

The data is hardcoded but could come from anywhere

```
// jsontable.js

document.addEventListener("DOMContentLoaded", ()=>{
  let jsonstr=`[
    {"id":"2", "first_name":"Sam","last_name":"Smith", "phone":"111-222-3333","email":"ssmith@yahoo.com","address":"33 Birch Rd","city":"Miami","state":"FL"},
    {"id":"3", "first_name":"Brad","last_name":"Traversy", "phone":"211-322-4333","email":"brad@test.com","address":"222 South St","city":"Portland","state":"FL"}
  ]`
  let jsonobj=JSON.parse(jsonstr)
  let form=document.querySelector("form")``

This is the HTML string button handler - it loops over the array of objects - it builds an HTML string that is inserted into the output section - I use `insertAdjacentHTML` but `innerHTML` is fine too

 ``form.string.addEventListener("click", ()=>{
    let out=form.out
    if(!jsonobj.length)
      return
    let tblstr="<table>"
    tblstr+="<caption>Table Using HTML String</caption>"
    tblstr+="<tr>"
    for(let prop in jsonobj[0]) {
      tblstr+=`<th>${prop}`
    }
    tblstr+=jsonobj.reduce((s, x) => {
      s+="<tr>"
      for(let prop in x) {
        s+=`<td>${x[prop]}`
      }
      return s
    }, "")
    tblstr+="</table>"
    out.insertAdjacentHTML("beforeend", "<p>" + tblstr)
  })``

This is the DOM API button handler - it creates each element of the table using DOM APIs - the logic is the same as HTML string generation - the implementation is different

 `form.dom.addEventListener("click", ()=>{
    let out=form.out
    if(!jsonobj.length)
      return
    let tbl=document.createElement("table")
    tbl.createCaption().innerText="Table Using DOM API"
    let hdr=tbl.insertRow()
    for(let prop in jsonobj[0]) {
      hdr.appendChild(document.createElement("th")).innerText=prop
    }
    jsonobj.reduce((t, x) => {
      let row=t.insertRow()
      for(let prop in x) {
        row.insertCell().innerText=x[prop]
      }
      return t
    }, tbl)
    out.appendChild(document.createElement("p"))
    out.appendChild(tbl)
  })`

This is the reset button to clear the output section

 `form.clear.addEventListener("click", ()=>form.out.innerHTML="")
})`
