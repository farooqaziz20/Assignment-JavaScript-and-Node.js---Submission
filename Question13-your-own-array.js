var transportation = [];
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

getData()

function getData() {
    rl.question("Enter Transportation Mode (*Enter empty string to print data): ", function (answer) {
        if (answer !== "") {
            transportation.push(answer)
            getData()
            // console.log(`I would like to own a ${answer}`);
        }
        else {
            // console.log("Closing the interface");
            rl.close();
            console.log("Your List data is: ")
            transportation.forEach((value, index) => {
                console.log("I would like to own a " + value)
            });
        }
    });
}