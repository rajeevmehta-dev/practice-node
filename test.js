// Return unique number
let data = [1, 2, 3, 4];
let result = data.filter((item, index, arr) => arr.indexOf(item) === index);
console.log(result);

// Return on bases of particular field
let userData = [{
    name: "Rajeev", class: "Mscit"
}, {
    name: "Rajeev", class: "Mscit_Again"
}, {
    name: "Suraj", class: "Mscit"
}];

// Find the unique values
let result1 = userData.filter((item, index, arr) => {
    return arr.findIndex((innerItem) => innerItem.name === item.name) === index
});
console.log(result1);

let result2 = [...new Map(userData.map((item) => [item.class, item])).values()]
console.log(result2);

let mapData = new Map();
userData.forEach(((item) => {
    mapData.set(item.name, item)
}));
let result3 = [...mapData.values()].sort((a, b) => a.name > b.name ? -1 : (a.name < b.name ? 1 : 0));
console.log(result3)

// bubble sorting
let dataSort = [1, 1, 5, 3, 2, 1];
for (let i = 0; i < dataSort.length; i++) {
    for (let j = 0; j < dataSort.length - i - 1; j++) {
        if (dataSort[j] > dataSort[j + 1]) {
            const temp = dataSort[j];
            dataSort[j] = dataSort[j + 1];
            dataSort[j + 1] = temp;
        }
    }
}
console.log({dataSort});

// fibonacci series
const series = [];
const num = 50;
let n1 = 0;
let n2 = 1;
let nextTerm = 0;
for (let i = 0; i <= num && n1 <= num; i++) {
    series.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
console.log("Fibonacci series" + JSON.stringify({series}));

// factorial of number
let factN = 3;
let factorial = 1;
while (factN > 1) {
    factorial = factorial * factN;
    factN--;
}
console.log("Your factorial is", factorial);

// check for prime number;
const primNum = 7;
let i = 2;
let isPrime = true; // Assume the number is prime initially
while (i < primNum) {
    if (primNum % i === 0) {
        isPrime = false; // If we find a divisor, set isPrime to false
        break;
    }
    i++;
}
if (isPrime) {
    console.log('Number is prime');
} else {
    console.log('Number is not prime');
}

// basic question
console.log(1 > 4 > 5 > 7);
console.log(4 || 7 || 9);
console.log(4 && 7 && 9);


const mainData = [1, 2, 3, 4, 6, 5, 3];
console.log(mainData.splice(2, 1))
console.log(mainData)


// const array1 = [5, 12, 50, 130, 44];
//
// const found = array1.findLast((element) => element > 45);
//
// console.log(found);
// // Expected output: 130

let dataAgain = [1,2,3,4,5,6,8];

function getMissing(param) {
    let i = 1;
    while(i <= param.length) {
        // !param.includes(i)
        if (param.indexOf(i) === -1) {
            return i;
        }
        i++;
    }
    return "There is no missing number";
}

console.log(getMissing(dataAgain));


function rotateArray(param, duration) {
    while(duration > 0) {
        param.unshift(param.pop());
        duration--;
    }
    return param;
}
console.log(rotateArray([1,2,3,4,5,6,7,8],4));

// or

const bData = [1,2,3,4,5,6,7,8];
const k = 3;
const formattedData = [...bData.slice(-k), ...bData];
formattedData.splice(-k);
console.log("result is", formattedData);