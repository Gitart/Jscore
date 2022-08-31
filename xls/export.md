# How to download XLSX file from a server response in javascript?

Category [Javascript](https://newdevzone.com/posts/categories/javascript)

Modified : Aug 31, 2022

There are 3 suggested solutions in this post and each one is listed below with a detailed description on the basis of most helpful answers as shared by the users. I have tried to cover all the aspects as briefly as possible covering topics such as Javascript, Groovy, Xmlhttprequest, Apache Poi, Micronaut and a few others. I have categorized the possible solutions in sections for a clear and precise explanation. Please consider going through all the sections to better understand the solutions.

Contents

1.  01 [How to download XLSX file from a server response in javascript?](https://newdevzone.com/posts/how-to-download-xlsx-file-from-a-server-response-in-javascript#)
2.  02 [Solution 1](https://newdevzone.com/posts/how-to-download-xlsx-file-from-a-server-response-in-javascript#solution_1)
3.  03 [Solution 2](https://newdevzone.com/posts/how-to-download-xlsx-file-from-a-server-response-in-javascript#solution_2)
4.  04 [Solution 3](https://newdevzone.com/posts/how-to-download-xlsx-file-from-a-server-response-in-javascript#solution_3)
5.  05 [Final Words](https://newdevzone.com/posts/how-to-download-xlsx-file-from-a-server-response-in-javascript#article_footer)

#### Solution 1

Your MS Excel (XLSX) file generated on the server and sent back to the client via your API. You can download the response as a file by using `responseType = blob`. You should also set a filename on your browser to give a name to the downloaded file.

Try below snippet.

```javascript
const exportData = (filteredRows,activity) => {
    let filename = "TestReport.xlsx";
    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function() {
        var a;
        if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
            a = document.createElement('a');
            a.href = window.URL.createObjectURL(xmlHttpRequest.response);
            a.download = filename;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
        }
    };
    xmlHttpRequest.open("POST", '/abc/api/v1/export/'+ activity);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/json");
    xmlHttpRequest.responseType = 'blob';
    xmlHttpRequest.send(JSON.stringify({
        "key": "8575",
        "type":"userdetails",
        "data":filteredRows
    }));
}

```

#### Solution 2

From node is send the excel file , then i did this -

```javascript
axios({
  url: 'http://api.dev/file-download',
  method: 'GET',
  responseType: 'blob', // important
}).then((response) => {
   const url = window.URL.createObjectURL(new Blob([response.data]));
   const link = document.createElement('a');
   link.href = url;
   link.setAttribute('download', 'file.pdf'); //or any other extension
   document.body.appendChild(link);
   link.click();
});

```

#### Solution 3

Thanks to @AabinGunz. I could put comments since I don't have 50 reputation. but his snippet works. I have the jsonString coming from a variable set before. the xlsx file downloaded is not corrupted. thanks again to AabinGunz

```javascript
    const exportData = () => {
    let filename = userName+".xlsx";
    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function() {
        var a;
        if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
            a = document.createElement('a');
            a.href = window.URL.createObjectURL(xmlHttpRequest.response);
            a.download = filename;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
        }
    };
    xmlHttpRequest.open("POST", '/calc-reverse-matches');
    xmlHttpRequest.setRequestHeader("Content-Type", "application/json");
    xmlHttpRequest.responseType = 'blob';
    xmlHttpRequest.send(JSON.stringify(jsonString));
}

```

#### Final Words

These were some of the solutions I found worth sharing. There are well a lot of alternatives around but I have tried and tested these for a while now and so I found them worth sharing here. I hope it fulfills the purpose you're looking to utilize them for.
