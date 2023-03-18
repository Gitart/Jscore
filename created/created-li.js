// Generate UL
// <div><ul><li>Fred</li><li>Barney</li><li>Wilma</li><li>Betty</li><li>Pebbles</li></ul></div>

function Ftch(){

    var characters = [
        { name: "Fred", plays: "bowling" },
        { name: "Barney", plays: "chess" },
        { name: "Wilma", plays: "bridge" },
        { name: "Betty", plays: "checkers" },
        { name: "Pebbles", plays: "chess" }
    ];

    let list = characters
        //.filter(x => x.plays === "chess" || x.plays == "checkers")
        .map(x => `<li>${x.name}</li>`)
        .reduce((a, x) => [a[0] + x], [""])
        .map(x => `<div><ul>${x}</ul></div>`)
        .reduce((a, x) => x);

    console.log(list);

   
}
