/* 1. Write a "for" loop that loops through the array ["green tea", black tea, chai, oolong tea] and stops the loop when it finds "chai".
Store all teas before "chai" in a new array named "selectedTeas". */

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let t = 0; t < teas.length; t++) {
    if (teas[t] === "chai") {
        break;
    }
    selectedTeas.push(teas[t]);
}

// console.log(selectedTeas);


/* 2. Write a "for" loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris".
Store the cities in a new array named "visitedCities". */

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let c = 0; c < cities.length; c++) {
    if (cities[c] !== "Paris") {
        visitedCities.push(cities[c]);
    }
}
// console.log(visitedCities);


/* 3. Use a "for-of" loop to iterate through the array [1, 2, 3, 4, 5] and stops when the number  "4" is found.
Store the numbers before "4" in an array named "smallNumbers". */

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
    if (num === 4) {
        break;
    }
    smallNumbers.push(num);
}

// console.log(smallNumbers);


/* 4. Use a "for-of" loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea".
Store the other teas in an array named "preferredTeas". */

const specialTeas = ["chai", "green tea", "herbal tea", "black tea"];
const preferredTeas = [];

for (const tea of specialTeas) {
    if (tea !== "herbal tea")
    preferredTeas.push(tea);
}
// console.log(preferredTeas);


/* 5. Use a "for-in" loop to loop through an object containing city populations.
Stops the loop when the population of "Berlin" is found and store all previous cities population in a new object named "cityPopulations" 

let cityPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
}; */

let cityPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

let cityPopulations = {};

for (const key in cityPopulation) {
    // console.log(key);
    if (key == "Berlin") {;
        break;
    }
    cityPopulations[key] = cityPopulation[key];
}

// console.log(cityPopulations);


/* 6. Use a "for-in" loop to loop through an object containing city populations.
Skip any city with a population below 3 million and store the rest in a new object name "largeCities".

let worldCities = {
    "Sydney": 5000000,
    "London": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000,
    "Rome": 2870000
}
*/

let worldCities = {
    "Sydney": 5000000,
    "London": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000,
    "Rome": 2870000
};

let largeCities = {};

for (const city in worldCities) {
    if(worldCities[city] < 3000000) {
        continue;
    }
    largeCities[city] = worldCities[city];
}
// console.log(largeCities);


/* 7. Write a "forEach" loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"].
Stop the loop when "chai" is found and store all the previous tea types in an array named "availableTeas". */

let allTeas = ["earl grey", "green tea", "chai", "oolong tea"];

let availableTeas = [];

allTeas.forEach(tea => {
    if (tea === "chai") {
        return;
    }
    availableTeas.push(tea);
});
// console.log(availableTeas);


/* 8. Write a "forEach loop" that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"].
Skip the "Sydney" and store the other cities in a new array named "traveledCities". */

let allCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

allCities.forEach(city => {
    if (city === "Sydney") {
        return;
    }
    traveledCities.push(city);
})
// console.log(traveledCities);


/* 9. Write a "for" loop that iterates through the array [2, 5, 7, 9].
Skip the value 7 and multiply the rest by 2. Store the new numbers in an array named doubleNumbers.*/

let nums = [2, 5, 7, 9];
let doubleNumbers = [];

for (let n = 0; n < nums.length; n++) {
    if (nums[n] === 7) {
        continue;
    }
    doubleNumbers.push(nums[n] * 2)
}
// console.log(doubleNumbers);


/* 10. Use a "for-of" loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"] and stop when the length of the current tea name is greater than 10.
Store the teas iterated over in an array named "shortNameTeas". */

let collectionTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortNameTeas = [];

for (const teas of collectionTeas) {
    // console.log(teas.length);
    if (teas.length > 10 ) {
        break;
    }
    shortNameTeas.push(teas)
}
console.log(shortNameTeas);