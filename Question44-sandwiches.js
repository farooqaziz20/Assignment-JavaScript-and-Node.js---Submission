function makesandwich(items){
    var summary="";
    items.map((item)=>{
        summary+=item+", ";
    })
    console.log("Person wants "+summary+" on his sandwich")

}

makesandwich(["Cheese","Onion","Chicken"])
makesandwich(["Cheese","Hard-boiled egg","Fried Egg"])
makesandwich(["Cheese","Onion","Fried Egg"])  