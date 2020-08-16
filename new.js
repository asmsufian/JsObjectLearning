// class theke new use kore object banano jay shetai dekhano hoise


class Person{
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('balam', 'sazid', 2000);
console.log(heroPerson);
const friendlyPerson = new Person('salam', 'sazid', 15000);
console.log(friendlyPerson);

function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1('grand', 'papa', 1200);
 console.log(oldPerson);