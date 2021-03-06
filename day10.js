const data = require("fs").readFileSync("input.txt", "utf8");
const parsedInput = data.split(/\r\n/g).map(x => parseInt(x.split(" "))).sort((x, y) => x - y)

var storage = {};

const damschkie = (arr, storage) => {
    const key = arr.toString();
    if (key in storage) return storage[key]
    let sum = 1;
    for(var i = 0 ; i < arr.length; i++){
        if (arr[i+2]-arr[i] <= 3) {
            sum += damschkie([arr[i],...arr.slice(i+2)], storage)
        }
    }
    storage[key] = sum;
    return sum
}
let z = damschkie([0,...parsedInput],storage)
