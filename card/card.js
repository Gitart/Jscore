
// Products
var products = [
    {id: 1, articul:13434528, title: "Кросовки ",      qty:1,  color:"белый",   size:12, price: 12.01,   url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" },
    {id: 2, articul:12343562, title: "Наушники ",      qty:12, color:"голубой", size:14, price: 17.01,   url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" },
    {id: 3, articul:12343452, title: "Мозги    ",      qty:14, color:"зеленый", size:16, price: 1117.01, url: "https://plus.unsplash.com/premium_photo-1682124680071-1cb26719c541?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUQwJTlEJUQwJUI1JUQwJUI5JUQxJTgwJUQwJUJFJUQxJTgxJUQwJUI1JUQxJTgyJUQwJUI4JTIwJUQwJUI4JUQxJTgxJUQwJUJBJUQxJTgzJUQxJTgxJUQxJTgyJUQwJUIyJUQwJUI1JUQwJUJEJUQwJUJEJUQxJThCJUQwJUI5JTIwJUQwJUI4JUQwJUJEJUQxJTgyJUQwJUI1JUQwJUJCJUQwJUJCJUQwJUI1JUQwJUJBJUQxJTgyfGVufDB8fDB8fHww"},
    {id: 4, articul:78994413, title: "Одеколон ",      qty:5,  color:"синий",   size:17, price: 127.01,  url: "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fHww"},
    {id: 5, articul:13456672, title: "Kрем женский ",  qty:2,  color:"черный",  size:19, price: 127.01,  url: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fHww"},
];

var card =[];

$(document).ready(function() {

    JournalOrders();
   
    products.forEach(function(product){
        // console.log(product)
        
        var tmpl= `<div class="col maincard shadow">
                   <b>${product.title}</b>
                   <img src="${product.url}">
                   <small>${product.color}</small>
                   <div class=""><b>${product.price}</b> Грн.</div>
                   <button type="button" class="btn btn-dark float-end m-2" onclick="AddToCard(${product.id})">🛒</button>
                   <button type="button" class="btn btn-dark float-end m-2" onclick="DeleteFromCard(${product.id})">❤</button>
                 </div>`
            
            $("#bodyproduct").append(tmpl);
        }
    )


    $("#cartdeleted").on("click", function(){
        JurnalDelete();
    })
     
})

// Function to write an array to local storage
// Convert the array to a JSON string
// Store the JSON string in local storage under the specified key
function writeToLocalStorage(key, array) {
    var jsonString = JSON.stringify(array);
    localStorage.setItem(key, jsonString);
}

// Add to Cart product
function AddToCard(id){
    var p = products[id-1]

    var product = {
        id:      p.id,
        articul: p.articul,
        date:    Date.now(),
        title:   p.title,
        qty:     1,
        price:   p.price,
        size:    p.size,
        color:   p.color,
        sum:     p.price
    }

   var idProd   = `Id_${id}`;
   var getprod  = localStorage.getItem(idProd);
   var currQty  = 0;

   if (getprod!=null){
        var prd = JSON.parse(getprod)
        product.qty   = prd.qty + 1
        product.price = product.price.toFixed(2) 
        product.sum   = (product.price * (prd.qty+1)).toFixed(2) 
   }       

    // var prcard = JSON.stringify(product);
    // Write the products array to local storage with a specified key
    writeToLocalStorage(idProd, product);

    // console.log(id);
    console.log(card);
    JournalOrders()
}

// Function to delete data from local storage
// Remove the item from local storage using the specified key
function deleteFromLocalStorage(key) {
         localStorage.removeItem(key);
}

// Delete the products data from local storage using the key "products"
function DeleteCard(){
         deleteFromLocalStorage("products");
}

// Журнал 
function JournalOrders(){
    var totalSum = 0.00;
        $("#cart").empty()
   
        var keys = [];
        for (var i = 0; i < localStorage.length; i++) {
             var key = localStorage.key(i);

            if (key.startsWith("Id_")) {
                var t   = localStorage.getItem(key)
                var prd = JSON.parse(t)
                var tmp = `<tr id="idprod_${prd.id}" class="border rounded-3 p-2 m-2">
                               <th>${prd.title}</th>
                               <td style="text-align: right;">${prd.color}</td>
                               <td style="text-align: right;">${prd.size}</td>
                               <td style="width: 50px; text-align: right;">${prd.qty}</td>
                               <td style="width:100px; text-align: right;">${prd.price}</td>
                               <td style="text-align: right;">${prd.sum}</td>
                               <td id="del_${prd.id}" class="delstyle" onclick="deleteproduct('Id_${prd.id}')">❌</td>
                           </tr>`

                $("#cart").append(tmp)
                totalSum = totalSum + (prd.qty*prd.price);
            }
        }

        $("#totalsum").html(totalSum.toFixed(2)) 
        $("#totalbycart").html(totalSum.toFixed(2)) 
        
}

// Clear Card
function JurnalDelete(){

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
    
        console.log("delete -> " + key)

        if (key.startsWith("Id_")) {
             localStorage.removeItem(key);
        }
    }
    JournalOrders()
}

// Delete id product
function deleteproduct(id){
    console.log(id)
    localStorage.removeItem(id);
    JournalOrders()
}
