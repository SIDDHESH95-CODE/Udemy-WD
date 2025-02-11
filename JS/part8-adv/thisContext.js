let person = {
    name: "Ritesh",
    
    greet() {
        console.log(`Hi ${this.name}, how are you?`);
    }
}

person.greet();

const greetFnc = person.greet.bind({name: "John"});
greetFnc();
