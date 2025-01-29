let computer = { cpu: 12 }
let lenovo = {
    desktop: "FullHD",
    __proto__: "computer"
}
let hardware = {
    machine: computer
}

// console.log(lenovo.__proto__);
// console.log(hardware.machine);

const object = {};
object.property1 = 34;

// console.log(object.hasOwnProperty('property1'));
// console.log(object.hasOwnProperty('toString'));
// console.log(object.hasOwnProperty('hasOwnProperty'));