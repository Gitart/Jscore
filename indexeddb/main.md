## The general approach

First, let’s talk about the steps we will go through to create an IndexedDB data base, save the file into it and then read it out and present in the page:

1.  Create or open a database.
2.  Create an objectStore (if it doesn’t already exist)
3.  Retrieve an image file as a blob
4.  Initiate a database transaction
5.  Save that blob into the database
6.  Read out that saved file and create an ObjectURL from it and set it as the src of an image element in the page

## Creating the code

Let’s break down all parts of the code that we need to do this:

### Create or open a database.

|  | // IndexedDB |
|  | window.indexedDB \= window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB, |
|  | IDBTransaction \= window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction, |
|  | dbVersion \= 1; |

|  | /\* |
|  | Note: The recommended way to do this is assigning it to window.indexedDB, |
|  | to avoid potential issues in the global scope when web browsers start |
|  | removing prefixes in their implementations. |

|  | You can assign it to a varible, like var indexedDB… but then you have |
|  | to make sure that the code is contained within a function. |
|  | \*/ |

|  | // Create/open database |
|  | var request \= indexedDB.open("elephantFiles", dbVersion); |

|  | request.onsuccess \= function (event) { |
|  | console.log("Success creating/accessing IndexedDB database"); |
|  | db \= request.result; |

|  | db.onerror \= function (event) { |
|  | console.log("Error creating/accessing IndexedDB database"); |
|  | }; |

|  | // Interim solution for Google Chrome to create an objectStore. Will be deprecated |
|  | if (db.setVersion) { |
|  | if (db.version != dbVersion) { |
|  | var setVersion \= db.setVersion(dbVersion); |
|  | setVersion.onsuccess \= function () { |
|  | createObjectStore(db); |
|  | getImageFile(); |
|  | }; |
|  | } |
|  | else { |
|  | getImageFile(); |
|  | } |
|  | } |
|  | else { |
|  | getImageFile(); |
|  | } |
|  | } |

|  | // For future use. Currently only in latest Firefox versions |
|  | request.onupgradeneeded \= function (event) { |
|  | createObjectStore(event.target.result); |
|  | }; |

[view raw](https://gist.github.com/robnyman/1893386/raw/66203783b7f61025fb6b2254f763e0398cc4f79f/Create-open-IndexedDB-database.js) [Create-open-IndexedDB-database.js](https://gist.github.com/robnyman/1893386#file-create-open-indexeddb-database-js) hosted with ❤ by [GitHub](https://github.com)

// IndexedDB
window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
    IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
    dbVersion = 1;

/\*
    Note: The recommended way to do this is assigning it to window.indexedDB,
    to avoid potential issues in the global scope when web browsers start
    removing prefixes in their implementations.

    You can assign it to a varible, like var indexedDB… but then you have
    to make sure that the code is contained within a function.
\*/

// Create/open database
var request = indexedDB.open("elephantFiles", dbVersion);

request.onsuccess = function (event) {
console.log(“Success creating/accessing IndexedDB database”);
db = request.result;

db.onerror = function (event) {
console.log(“Error creating/accessing IndexedDB database”);
};

// Interim solution for Google Chrome to create an objectStore. Will be deprecated
if (db.setVersion) {
if (db.version != dbVersion) {
var setVersion = db.setVersion(dbVersion);
setVersion.onsuccess = function () {
createObjectStore(db);
getImageFile();
};
}
else {
getImageFile();
}
}
else {
getImageFile();
}
}

// For future use. Currently only in latest Firefox versions
request.onupgradeneeded = function (event) {
createObjectStore(event.target.result);
};

The intended way to use this is to have the `onupgradeneeded` event triggered when a database is created or gets a higher version number. This is currently only supported in Firefox, but will soon be in other web browsers. If the web browser doesn’t support this event, you can use the deprecated `setVersion` method and connect to its `onsuccess` event.

### Create an objectStore (if it doesn’t already exist)

|  | // Create an objectStore |
|  | console.log("Creating objectStore") |
|  | dataBase.createObjectStore("elephants"); |

[view raw](https://gist.github.com/robnyman/1893458/raw/5bd626777bc26ee1d7d6efeb58beed9f14abd5cf/Create-IndexedDB-objectStore.js) [Create-IndexedDB-objectStore.js](https://gist.github.com/robnyman/1893458#file-create-indexeddb-objectstore-js) hosted with ❤ by [GitHub](https://github.com)

// Create an objectStore
console.log("Creating objectStore")
dataBase.createObjectStore("elephants");

Here you create an ObjectStore that you will store your data – or in our case, files – and once created you don’t need to recreate it, just update its contents.

### Retrieve an image file as a blob

|  | // Create XHR |
|  | var xhr \= new XMLHttpRequest(), |
|  | blob; |

|  | xhr.open("GET", "elephant.png", true); |
|  | // Set the responseType to blob |
|  | xhr.responseType \= "blob"; |

|  | xhr.addEventListener("load", function () { |
|  | if (xhr.status \=== 200) { |
|  | console.log("Image retrieved"); |

|  | // File as response |
|  | blob \= xhr.response; |

|  | // Put the received blob into IndexedDB |
|  | putElephantInDb(blob); |
|  | } |
|  | }, false); |
|  | // Send XHR |
|  | xhr.send(); |

[view raw](https://gist.github.com/robnyman/1893530/raw/8c8604bf2b009a6fc34d0d8bda16eb1548c5e9d7/xhr-BlobBuilder.js) [xhr-BlobBuilder.js](https://gist.github.com/robnyman/1893530#file-xhr-blobbuilder-js) hosted with ❤ by [GitHub](https://github.com)

// Create XHR and BlobBuilder
var xhr = new XMLHttpRequest(),
    blob;

xhr.open("GET", "elephant.png", true);
// Set the responseType to blob
xhr.responseType = "blob";

xhr.addEventListener("load", function () {
    if (xhr.status === 200) {
        console.log("Image retrieved");

        // File as response
        blob = xhr.response;

        // Put the received blob into IndexedDB
        putElephantInDb(blob);
    }
}, false);
// Send XHR
xhr.send();

This code gets the contents of a file as a `blob` directly. Currently that’s only supported in Firefox.
Once you have received the entire file, you send the blob to the function to store it in the database.

### Initiate a database transaction

|  | // Open a transaction to the database |
|  | var transaction \= db.transaction(\["elephants"\], IDBTransaction.READ\_WRITE); |

[view raw](https://gist.github.com/robnyman/1893573/raw/2daa5ff263d4496246e1417538ba10634aa7471c/Open-IndexedDB-transaction.js) [Open-IndexedDB-transaction.js](https://gist.github.com/robnyman/1893573#file-open-indexeddb-transaction-js) hosted with ❤ by [GitHub](https://github.com)

// Open a transaction to the database
var transaction = db.transaction(\["elephants"\], IDBTransaction.READ\_WRITE);

To start writing something to the database, you need to initiate a transaction with an objectStore name and the type of action you want to do – in this case read and write.

### Save that blob into the database

|  | // Put the blob into the dabase |
|  | transaction.objectStore("elephants").put(blob, "image"); |

[view raw](https://gist.github.com/robnyman/1893601/raw/a42d28e3922d3fe70c96514fd4cbd8a3a087ce35/Put-blob-into-IndexedDB-database.js) [Put-blob-into-IndexedDB-database.js](https://gist.github.com/robnyman/1893601#file-put-blob-into-indexeddb-database-js) hosted with ❤ by [GitHub](https://github.com)

// Put the blob into the dabase
transaction.objectStore("elephants").put(blob, "image");

Once the transaction is in place, you get a reference to the desired objectStore and then put your blob into it and give it a key.

### Read out that saved file and create an ObjectURL from it and set it as the src of an image element in the page

|  | // Retrieve the file that was just stored |
|  | transaction.objectStore("elephants").get("image").onsuccess \= function (event) { |
|  | var imgFile \= event.target.result; |
|  | console.log("Got elephant!" + imgFile); |

|  | // Get window.URL object |
|  | var URL \= window.URL || window.webkitURL; |

|  | // Create and revoke ObjectURL |
|  | var imgURL \= URL.createObjectURL(imgFile); |

|  | // Set img src to ObjectURL |
|  | var imgElephant \= document.getElementById("elephant"); |
|  | imgElephant.setAttribute("src", imgURL); |

|  | // Revoking ObjectURL |
|  | URL.revokeObjectURL(imgURL); |
|  | }; |

[view raw](https://gist.github.com/robnyman/1893918/raw/2a7d7b26d5a5bbea3515cc0c9944aaecce5591d3/retrieve-indexeddb-file-create-object-url.js) [retrieve-indexeddb-file-create-object-url.js](https://gist.github.com/robnyman/1893918#file-retrieve-indexeddb-file-create-object-url-js) hosted with ❤ by [GitHub](https://github.com)

// Retrieve the file that was just stored
transaction.objectStore("elephants").get("image").onsuccess = function (event) {
    var imgFile = event.target.result;
    console.log("Got elephant!" + imgFile);

    // Get window.URL object
    var URL = window.URL || window.webkitURL;

    // Create and revoke ObjectURL
    var imgURL = URL.createObjectURL(imgFile);

    // Set img src to ObjectURL
    var imgElephant = document.getElementById("elephant");
    imgElephant.setAttribute("src", imgURL);

    // Revoking ObjectURL
    URL.revokeObjectURL(imgURL);
};

Use the same transaction to get the image file you just stored, and then create an objectURL and set it to the `src` of an image in the page.
This could just as well, for instance, have been a JavaScript file that you attached to a `script` element, and then it would parse the JavaScript.

## The complete code

So, here’s is the complete working code:

|  | (function () { |
|  | // IndexedDB |
|  | var indexedDB \= window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB, |
|  | IDBTransaction \= window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction, |
|  | dbVersion \= 1.0; |

|  | // Create/open database |
|  | var request \= indexedDB.open("elephantFiles", dbVersion), |
|  | db, |
|  | createObjectStore \= function (dataBase) { |
|  | // Create an objectStore |
|  | console.log("Creating objectStore") |
|  | dataBase.createObjectStore("elephants"); |
|  | }, |

|  | getImageFile \= function () { |
|  | // Create XHR |
|  | var xhr \= new XMLHttpRequest(), |
|  | blob; |

|  | xhr.open("GET", "elephant.png", true); |
|  | // Set the responseType to blob |
|  | xhr.responseType \= "blob"; |

|  | xhr.addEventListener("load", function () { |
|  | if (xhr.status \=== 200) { |
|  | console.log("Image retrieved"); |

|  | // Blob as response |
|  | blob \= xhr.response; |
|  | console.log("Blob:" + blob); |

|  | // Put the received blob into IndexedDB |
|  | putElephantInDb(blob); |
|  | } |
|  | }, false); |
|  | // Send XHR |
|  | xhr.send(); |
|  | }, |

|  | putElephantInDb \= function (blob) { |
|  | console.log("Putting elephants in IndexedDB"); |

|  | // Open a transaction to the database |
|  | var transaction \= db.transaction(\["elephants"\], IDBTransaction.READ\_WRITE); |

|  | // Put the blob into the dabase |
|  | var put \= transaction.objectStore("elephants").put(blob, "image"); |

|  | // Retrieve the file that was just stored |
|  | transaction.objectStore("elephants").get("image").onsuccess \= function (event) { |
|  | var imgFile \= event.target.result; |
|  | console.log("Got elephant!" + imgFile); |

|  | // Get window.URL object |
|  | var URL \= window.URL || window.webkitURL; |

|  | // Create and revoke ObjectURL |
|  | var imgURL \= URL.createObjectURL(imgFile); |

|  | // Set img src to ObjectURL |
|  | var imgElephant \= document.getElementById("elephant"); |
|  | imgElephant.setAttribute("src", imgURL); |

|  | // Revoking ObjectURL |
|  | URL.revokeObjectURL(imgURL); |
|  | }; |
|  | }; |

|  | request.onerror \= function (event) { |
|  | console.log("Error creating/accessing IndexedDB database"); |
|  | }; |

|  | request.onsuccess \= function (event) { |
|  | console.log("Success creating/accessing IndexedDB database"); |
|  | db \= request.result; |

|  | db.onerror \= function (event) { |
|  | console.log("Error creating/accessing IndexedDB database"); |
|  | }; |

|  | // Interim solution for Google Chrome to create an objectStore. Will be deprecated |
|  | if (db.setVersion) { |
|  | if (db.version != dbVersion) { |
|  | var setVersion \= db.setVersion(dbVersion); |
|  | setVersion.onsuccess \= function () { |
|  | createObjectStore(db); |
|  | getImageFile(); |
|  | }; |
|  | } |
|  | else { |
|  | getImageFile(); |
|  | } |
|  | } |
|  | else { |
|  | getImageFile(); |
|  | } |
|  | } |

|  | // For future use. Currently only in latest Firefox versions |
|  | request.onupgradeneeded \= function (event) { |
|  | createObjectStore(event.target.result); |
|  | }; |
|  | })(); |

[view raw](https://gist.github.com/robnyman/1894032/raw/71f95d738b74b9e37aa3b516b5437e059f8c6c92/IndexedDB-storing-and-retrieving-files.js) [IndexedDB-storing-and-retrieving-files.js](https://gist.github.com/robnyman/1894032#file-indexeddb-storing-and-retrieving-files-js) hosted with ❤ by [GitHub](https://github.com)

(function () {
    // IndexedDB
    var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
        IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
        dbVersion = 1.0;

    // Create/open database
    var request = indexedDB.open("elephantFiles", dbVersion),
        db,
        createObjectStore = function (dataBase) {
            // Create an objectStore
            console.log("Creating objectStore")
            dataBase.createObjectStore("elephants");
        },

        getImageFile = function () {
            // Create XHR and BlobBuilder
            var xhr = new XMLHttpRequest(),
                blob;

            xhr.open("GET", "elephant.png", true);
            // Set the responseType to blob
            xhr.responseType = "blob";

            xhr.addEventListener("load", function () {
                if (xhr.status === 200) {
                    console.log("Image retrieved");

                    // Blob as response
                    blob = xhr.response;

                    // Put the received blob into IndexedDB
                    putElephantInDb(blob);
                }
            }, false);
            // Send XHR
            xhr.send();
        },

        putElephantInDb = function (blob) {
            console.log("Putting elephants in IndexedDB");

            // Open a transaction to the database
            var transaction = db.transaction(\["elephants"\], IDBTransaction.READ\_WRITE);

            // Put the blob into the dabase
            transaction.objectStore("elephants").put(blob, "image");

            // Retrieve the file that was just stored
            transaction.objectStore("elephants").get("image").onsuccess = function (event) {
                var imgFile = event.target.result;
                console.log("Got elephant!" + imgFile);

                // Get window.URL object
                var URL = window.URL || window.webkitURL;

                // Create and revoke ObjectURL
                var imgURL = URL.createObjectURL(imgFile);

                // Set img src to ObjectURL
                var imgElephant = document.getElementById("elephant");
                imgElephant.setAttribute("src", imgURL);

                // Revoking ObjectURL
                URL.revokeObjectURL(imgURL);
            };
        };

    request.onerror = function (event) {
        console.log("Error creating/accessing IndexedDB database");
    };

    request.onsuccess = function (event) {
        console.log("Success creating/accessing IndexedDB database");
        db = request.result;

        db.onerror = function (event) {
            console.log("Error creating/accessing IndexedDB database");
        };

        // Interim solution for Google Chrome to create an objectStore. Will be deprecated
        if (db.setVersion) {
            if (db.version != dbVersion) {
                var setVersion = db.setVersion(dbVersion);
                setVersion.onsuccess = function () {
                    createObjectStore(db);
                    getImageFile();
                };
            }
            else {
                getImageFile();
            }
        }
        else {
            getImageFile();
        }
    }

    // For future use. Currently only in latest Firefox versions
    request.onupgradeneeded = function (event) {
        createObjectStore(event.target.result);
    };
})();

## Web browser support

IndexedDB

Supported since long (a number of versions back) in Firefox and Google Chrome. Planned to be in IE10 and a future version of Opera. Unclear about Safari.

onupgradeneeded

Supported in latest Firefox. Planned to be in Google Chrome soon and hopefully IE10 and a future version of Opera. Unclear about Safari.

Storing files in IndexedDB

Supported in Firefox 11 and later. Planned to be supported in Google Chrome. Hopefully IE10 will support it. Unclear about Safari and Opera.

XMLHttpRequest Level 2

Supported in Firefox and Google Chrome since long, Safari 5+ and planned to be in IE10 and Opera 12.

responseType “blob”

Currently only supported in Firefox. Will soon be in Google Chrome and is planned to be in IE10 and Opera 12. Unclear about Safari.

## Demo and code

I’ve put together a [demo with IndexedDB and saving images and files in it](http://robnyman.github.com/html5demos/indexeddb/) where you can see it all in action. Make sure to use any Developer Tool to Inspect Element on the image to see the value of its `src` attribute. Also make sure to check the console.log messages to follow the actions.

The code for [storing files in IndexedDB](https://github.com/robnyman/robnyman.github.com/tree/master/html5demos/indexeddb) is also available on GitHub, so go play now!
