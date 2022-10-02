let car;
const add_car_value = (manf_name, model, color, price, ...arbitary_val) => { //arbitary is an arr
    car = {
        manufacturer: manf_name,
        model: model,
        color: color,
        price: price,
        statement: arbitary_val
    }
}
add_car_value("Suzuki", 2021, "red", 2100000, "new", "modern", "used")
console.log(car);
