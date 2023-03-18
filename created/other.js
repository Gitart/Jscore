var characters = [
        { name: "Fred", plays: "bowling" },
        { name: "Barney", plays: "chess" },
        { name: "Wilma", plays: "bridge" },
        { name: "Betty", plays: "checkers" },
        { name: "Pebbles", plays: "chess" }
    ];

    let list = characters
        .filter(x => x.plays === "chess" || x.plays == "checkers")
        .map(x => `<li>${x.name}</li>`)
        .reduce((a, x) => [a[0] + x], [""])
        .map(x => `<div><ul>${x}</ul></div>`)
        .reduce((a, x) => x);

    console.log(list);

    // <div><ul><li>Fred</li><li>Barney</li><li>Wilma</li><li>Betty</li><li>Pebbles</li></ul></div>
-----------------














var myCounter = (function(initialValue = 0) {
let count = initialValue;
return function() {
count++;
return count;
};
})(77);


myCounter(); // 78
myCounter(); // 79
myCounter(); // 80



function ShowItself1(identity) {
this.identity = identity;
setTimeout(function() {
console.log(this.identity);
}, 1000);


function ShowItself2(identity) {
this.identity = identity;
let that = this;
setTimeout(function() {
console.log(that.identity);
}, 1000);
setTimeout(
function() {
console.log(this.identity);
}.bind(this),
2000
);
setTimeout(() => {
console.log(this.identity);
}, 3000);
}
var x = new ShowItself2("JavaScript");
// after one second, "JavaScript"




const once = func => {
let done = false;
return (...args) => {
if (!done) {
done = true;
func(...args);
}
};
};


function listArguments2(...args) {
console.log(args);
somethingElse(...args);
}

const altSum3 = x => y => z => x + y + z;
altSum3(1)(2)(3); // 6



function doAction(state = initialState, action) {
let newState = {};
switch (action.type) {
case "CREATE":
// update state, generating newState,
// depending on the action data
// to create a new item
return newState;
case "DELETE":
// update state, generating newState,
// after deleting an item
return newState;
case "UPDATE":
// update an item,
// and generate an updated state
return newState;
default:
return state;
}
}



const dispatchTable = {
CREATE: (state, action) => {
// update state, generating newState,
// depending on the action data
// to create a new item
return newState;
},
DELETE: (state, action) => {
// update state, generating newState,
// after deleting an item
return newState;
},
UPDATE: (state, action) => {
// update an item,
// and generate an updated state
return newState;
}
};




function doAction2(state = initialState, action) {
return dispatchTable[action.type]
? dispatchTable[action.type](state, action)
: state;
}




const shuffle = arr => {
 const len = arr.length;
 for (let i = 0; i < len - 1; i++) {
 let r = Math.floor(Math.random() * (len - i));
 [arr[i], arr[i + r]] = [arr[i + r], arr[i]];
 }
 return arr;
};
var xxx = [11, 22, 33, 44, 55, 66, 77, 88];
console.log(shuffle(xxx));
// [55, 77, 88, 44, 33, 11, 66, 22]



-----------------
const myArray = [22, 9, 60, 12, 4, 56];
const sum = (x, y) => x + y;
const mySum = myArray.reduce(sum, 0)
console.log(mySum)


const sumAndLog = (x, y) => {
 console.log(`${x}+${y}=${x + y}`);
 return x + y;
};
myArray.reduce(sumAndLog, 0);

----------------------
const average = arr => arr.reduce(sum, 0) / arr.length;
console.log(average(myArray)); 




const average3 = arr => {
 const sumCount = arr.reduce(
 (accum, value) => ({sum: value + accum.sum, count: accum.count + 1}),
 {sum: 0, count: 0}
 );
 return sumCount.sum / sumCount.count;
};
console.log(average3(myArray)); // 27.166667



------------------
const myArray = [22, 9, 60, 12, 4, 56];
const dup = x => 2 * x;
console.log(myArray.map(dup)); // [44, 18, 120, 24, 8, 112]
console.log(myMap(myArray, dup)); // [44, 18, 120, 24, 8, 112]
console.log(myArray); // [22, 9, 60, 12, 4, 56]


----------------
const apiAnswer = [
        {
            country: "AR",
            name: "Argentine",
            states: [
                {
                    state: "1",name: "Buenos Aires",
                    cities: [
                        {city: 3846864, name: "Lincoln"}
                    ],
                },
            ],
        },
            {
                country: "GB",
                name: "Great Britain",
                states: [
                    {
                        state: "ENG",
                        name: "England",
                        cities: [{city: 2644487, name: "Lincoln"}],
                    },
                ],
            },
            {
                country: "US",
                name: "United States of America",
                states: [
                    {
                        state: "CA",
                        name: "California",
                        cities: [
                            {city: 5072006, name: "Lincoln"},
                            {city: 5072002, name: "Vom"},
                            {city: 5072022, name: "Tree"},
                            {city: 5072045, name: "Other"},
                        ],
                    },
            {
                state: "IL",
                name: "Illinois",
                cities: [
                    {city: 4899911, name: "Lincoln Park"},
                    {city: 4899966, name: "Lincoln Square"},
                ],
            },
        ],
        },
        ];

         console.log(apiAnswer.map(x => x.states).flat().map(y => y.cities).flat());
         console.log(apiAnswer.map(x => x.states).flat());


    const gettysburg = [
        "Four score and seven years ago our fathers brought forth, ",
        "on this continent, a new nation, conceived in liberty, and ",
        "dedicated to the proposition that all men are created equal.",
        "Now we are engaged in a great civil war, testing whether that ",
        "nation, or any nation so conceived and so dedicated, can long ",
        "endure.",
        "We are met on a great battle field of that war.",
        "We have come to dedicate a portion of that field, as a final ",
        "resting place for those who here gave their lives, that that ",
        "nation might live.",
        "It is altogether fitting and proper that we should do this.",
        "But, in a larger sense, we cannot dedicate, we cannot consecrate, ",
        "we cannot hallow, this ground.",
        "The brave men, living and dead, who struggled here, have ",
        "consecrated it far above our poor power to add or detract.",
        "The world will little note nor long remember what we say here, ",
        "but it can never forget what they did here.",
        "It is for us the living, rather, to be dedicated here to the ",
        "unfinished work which they who fought here have thus far so nobly ",
        "advanced.",
        "It is rather for us to be here dedicated to the great task ",
        "remaining before us— that from these honored dead we take increased ",
        "devotion to that cause for which they here gave the last full ",
        "measure of devotion— that we here highly resolve that these dead ",
        "shall not have died in vain— that this nation, under God, shall have ",
        "a new birth of freedom- and that government of the people, by the ",
        "people, for the people, shall not perish from the earth.",
    ];
    
    console.log(gettysburg.flatMap(s => s.split(" ")).la);
    console.log(gettysburg.flatMap(s => s.split(" ")));


------------------------------------------------------------------------------
 const serviceResult = {
        accountsData: [
            {id: "F220960K",balance: 1024},
            {id: "S120456T",balance: 2260},
            {id: "J140793A",balance: -38},
            {id: "M120396V",balance: -114},
            {id: "A120289L",balance: 55000},
        ],
    };

    // Больше нуля
    const delinquent = serviceResult.accountsData.filter(v => v.balance > 0);
    console.log(delinquent);

    markers = [
        {name: "UY", lat: -34.9, lon: -56.2},
        {name: "AR", lat: -34.6, lon: -58.4},
        {name: "BR", lat: 2215.8, lon: 2247.9},
        {name: "BR", lat: -15.8, lon: -47.9},
        {name: "BR", lat: 115.8, lon: 147.9},
        {name: "BO", lat: -16.5, lon: -68.1}
    ];

    let brazilData = markers.find(v => v.name === "BR");
    console.log(brazilData);

    let brazilIndex = markers.findIndex(v => v.name === "BR");
    console.log(brazilIndex);




-------------
Поиск в массиве
const serviceResult = {
        accountsData: [
            {id: "F220960K",balance: 1024},
            {id: "S120456T",balance: 2260},
            {id: "J140793A",balance: -38},
            {id: "M120396V",balance: -114},
            {id: "A120289L",balance: 55000},
        ],
    };

    // Больше нуля
    const delinquent = serviceResult.accountsData.filter(v => v.balance > 0);
    console.log(delinquent);

    markers = [
        {name: "UY", lat: -34.9, lon: -56.2},
        {name: "AR", lat: -34.6, lon: -58.4},
        {name: "BR", lat: 2215.8, lon: 2247.9},
        {name: "BR", lat: -15.8, lon: -47.9},
        {name: "BR", lat: 115.8, lon: 147.9},
        {name: "BO", lat: -16.5, lon: -68.1}
    ];

    const delinquent1 = markers.filter(v => v.name == "BR");
    console.log(delinquent1);


    let brazilData = markers.find(v => v.name === "BR");
    console.log(brazilData);

    let brazilIndex = markers.findIndex(v => v.name === "BR");
    console.log(brazilIndex);




----------------------

    const testOdd = x => x % 2 === 1;
    const testUnderFifty = x => x < 50;
    const duplicate = x => x + x;
    const addThree = x => x + 3;


    const myArray = [22, 9, 60, 24, 11, 63];
    const a0 = myArray
        .filter(testOdd)
        .map(duplicate)
        .filter(testUnderFifty)
        .map(addThree);


      console.log(a0) -> [21, 25]

--------------------------
let bbb = [1, 2, , 5, 7, 8, 10, 21, 40];
console.log(bbb.reduce((x, y) => x + y, 0)); 

----------------

const traverseDom = (node, depth = 0) => {
 console.log(`${"| ".repeat(depth)}<${node.nodeName.toLowerCase()}>`);
 for (let i = 0; i < node.children.length; i++) {
 traverseDom(node.children[i], depth + 1);
 }
};

--------------
const myObj = { d: 22, m: 9 };
Object.freeze(myObj);
myObj.d = 12; // won't have effect...
myObj.m = 4;
console.log(myObj);
-------------------




const getByPath = (arr, obj) => {
 if (arr[0] in obj) {
 return arr.length > 1
 ? getByPath(arr.slice(1), obj[arr[0]])
 : deepCopy(obj[arr[0]]);
 } else {
 return undefined;
 }
};


let myObj3 = {
 d: 22,
 m: 9,
 o: {c: "MVD", i: "UY", f: {a: 56}}
};
deepFreeze(myObj3);
console.log(getByPath(["d"], myObj3)); // 22
console.log(getByPath(["o"], myObj3)); // {c: "MVD", i: "UY", f: {a: 56}}
console.log(getByPath(["o", "c"], myObj3)); // "MVD"
console.log(getByPath(["o", "f", "a"], myObj3)); // 56

-------------------
let myObj = {
        a: 111,
        b: 222,
        c: 333,
        d: {
            e: 444,
            f: 555,
            g: {
                h: 666,
                i: 777
            },
            j: [{k: 100}, {k: 200}, {k: 300}]
        }
    };


    console.log(myObj)
    console.log(myObj.d.j ); // false
    console.log(myObj.d.j[0] ); // true
    console.log(myObj.d.j[1] ); // false
    console.log(myObj.d.j[2] ); //


-----------------------------------







































































































