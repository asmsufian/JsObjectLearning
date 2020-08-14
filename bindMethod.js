const normalPerson = {
    firstName: "rahim",
    lastName: "uddin",
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tips, tax) {
        console.log(this)
        this.salary = this.salary - amount - tips- tax;
        return this.salary;
    }
}


const heroPerson = {
    firstName: 'sufian',
    lastname: 'sazid',
    salary: 25000,

}
const friendlyPerson = {
    firstName: 'Sahid',
    lastname: 'hossain',
    salary: 25000,

}
// normalPerson.chargeBill();

// const heroChargeBill =  normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);


// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(1500);


// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 150);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 1000, 200, 100);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 1000, 50] );
normalPerson.chargeBill.apply(heroPerson,[4000, 120, 60] );
console.log(heroPerson.salary);







// call use korle , diye shob lekha jay
// apply use korle array [] er vitore shob dite hoy