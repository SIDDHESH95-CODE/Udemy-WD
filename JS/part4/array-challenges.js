/* Shift + Alt + A. :- for commenting a code or text more than one line. */


/* 1. Access the first element of the array and store it in a variable named 'firstTea'. */
let teaFlavours = ["ginger", "lemon", "green tea"];

let firstTea = teaFlavours[0];
// console.log(`Name of the first tea flavour is "${firstTea}".`);


/* 2. Declare an array named 'cities' containing "London", "Tokyo", "Paris" and "New York".
Access the third element in the array and store it in a variable named 'favoriteCity'. */
const cities = new Array("London", "Tokyo", "Paris", "New York");

const favoriteCity = cities[2];
// console.log(favoriteCity);


/* 3. You have an array named "teaTypes" containing "herbal tea", "white tea" and "masala chai".
Change the second element of the array to "jasmine tea" */ 
const teaTypes = ["herbal tea", "white tea", "masala chai"];
// console.log(teaTypes);

const newTeaType = "jasmine tea";
teaTypes[1] = newTeaType;
// console.log(teaTypes);


/* 4. Declare an array named "citiesVisited" containing "Mumbai" and "Sydney".
Add "Berlin to the array using the 'push' method". */
const citiesVisited = ["Mumbai", "Sydney"];
// console.log(citiesVisited);

citiesVisited.push("Berlin");
// console.log(citiesVisited);


/* 5. You have an array named "teaOrders" with "chai", "iced tea", "matcha" and "earl grey".
Remove the last element of the array using the 'pop' method and store it in a variable named "lastOrder". */
const teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
// console.log(teaOrders);

const lastOrder = teaOrders.pop();
// console.log(lastOrder);
// console.log(teaOrders);


/* 6. You have an array named "popularTeas" containing "green tea", "oolong tea", "chai".
Create a soft copy of this array named "softCopyTeas". */
const popularTeas = ["green tea", "oolong tea", "chai"];
// console.log(popularTeas);

const softCopyTeas = popularTeas;
softCopyTeas.pop()
// console.log(softCopyTeas); 
// console.log(popularTeas);


/* 7. You have an array named "topCities" containing "berlin", "singapore", "New York", "Mumbai".
Create a hard copy of this array named "hardCopyCities". */
const topCities = ["berlin", "singapore", "New York", "Mumbai"];
// console.log(topCities);

const hardCopyCities = [...topCities];
hardCopyCities.pop();
// console.log(hardCopyCities);
// console.log(topCities);


/* 8. You have two arrays: "europeanCities" containing "Paris", "Rome" and "asianCities" containing "Tokyo", "Bangkok".
Merge these two array into a new array named "worldCities". */
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let westernCities = ["France", "Belgium"]

let worldCities = europeanCities.concat(asianCities, westernCities);

// console.log(worldCities);



/* 9. You have an array named "teaMenu" containing "masala chai", "oolong tea", "green tea", "earl grey".
Find the length of the array & store it in a variable named "menuLength". */ 
const teaMenu = ["masala chai", "oolong tea", "green tea", "ear grey"];

const lengthTeaMenu = teaMenu.length;
// console.log(lengthTeaMenu);


/* 10. You have an array named "cityBucketList" containing "Kyoto", "London", "Cape Town", "Vancouver".
Check if "London" is in the array & store the result in a variable named "isLondonInList". */
const cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

const isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);