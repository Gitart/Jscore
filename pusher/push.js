
var journal = [
{ events : [" work " , " touched tree " , " pizza " ," running " , " television "] ,squirrel : false } ,
{ events : [" work " , " ice cream " , " cauliflower " ," lasagna " , " touched tree " , " brushed teeth "] ,
squirrel : false } ,
{ events : [" weekend " , " cycling " , " break " ," peanuts " , " beer "] ,squirrel : true } ,
/* and so on ... */
];


// Add array
function addEntry ( events , didITurnIntoASquirrel ) {
  journal.push ({
    events : events ,
    squirrel : didITurnIntoASquirrel,
    times: "02-01-2022",
    }) ;
}


// Add element
function mass(){
         // alert("Ok");
          var a = ["aaa","ssssd","gggg", "melafon"];
           a.push("system","jobber", "hadumer");

          var s = {"aaa":"ssssd"};
          a.push(s) 

         addEntry (a,false);
         console.log(journal);

}

// Delete element
function masspop(){
       journal.pop();
       console.log(journal);

}


function Jn(){
     var a = ["aaa","ssssd","gggg", "melafon"];
     a.join (" ");
     console.log(a);

}



