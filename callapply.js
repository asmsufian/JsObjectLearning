//  jodi kno object thake tahole shetake access korar jonno this.variable name use korte hobe
// ar jodi shetake object er baire theke access korte chai tahole use korte hobe variablename.jeta chai





const normalPerson = {
    firstName : "rahim",
    lastName : "uddin",
    salary : 15000,
    getFullName : function(){
        console.log(this.firstName, this.lastName );
    }, 
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
console.log(normalPerson.firstName);
normalPerson.chargeBill(150);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);

