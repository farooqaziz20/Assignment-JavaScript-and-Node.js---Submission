let name = 'farooq';
console.log(name != 'farooq')
console.log(name == 'farooq')

let lowerCase="LowerCase"
console.log(lowerCase.toLowerCase() == 'lowercase')

let aNumber=10;
console.log(aNumber==10)
console.log(aNumber!=10)
console.log(aNumber<10)
console.log(aNumber>=10)
console.log(aNumber<=10)


console.log(aNumber==10 || aNumber==5)
console.log(aNumber==10 && aNumber==5)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
var flagExist=false;
fruits.map((fruitItem)=>{
    if(fruitItem=="Banana")
        flagExist=true
})
if(flagExist){
    console.log("Exist")
}else{
    console.log("Not Exist")
}

var flagExist1=false;
fruits.map((fruitItem)=>{
    if(fruitItem=="Graps")
        flagExist1=true
})
if(flagExist1){
    console.log("Exist")
}else{
    console.log("Not Exist")
}


