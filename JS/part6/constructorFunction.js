function Human(name, gender){
    this.name = name
    this.gender = gender
    this.greet = function() {
        return `Hello ${name}, how are you as you are ${this.gender}.`
    }
}

let person1 = new Human("Siddhesh", "male");
let person2 = new Human("Paula", "female");
// console.log(person1.greet());
// console.log(person2.greet());



function Chai(name){
    this.name = name;
    this.drinking = function() {
        return `I am drinking a ${name} tea. It's my favorite.`
    }
}

let tea = new Chai("lemon");
// console.log(tea.drinking());

 
/* function sumOfNumbers(arr) {
    let sum = 0;
    arr.forEach(item => {
        sum += item;
    })
    console.log(sum);
}

sumOfNumbers([3,2,1]); */


/* function findLargestNumber(arr){
    return Math.min(...arr)
}

let lNum = findLargestNumber([1,5,3,9,2]);
console.log(lNum); */


/* function reverseString(str) {
    let newStr = str.split("").reverse().join("");
    console.log(newStr);
}

reverseString("hello"); */

let vowels = ["a", "e", "i", "o", "u"];
function countVowels(str) {
    let newStr = str.split("");
    if (newStr === vowels){
        console.log("none");
    }
}

countVowels("javascript")
