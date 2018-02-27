function Employee() { }

Employee.prototype.firstName = "Sourav";
Employee.prototype.lastName = "Kundu";
Employee.prototype.fullName = function () {
    console.log(this.firstName + " " + this.lastName);
};

​var abhijit = new Employee () //​
console.log(abhijit.fullName()); // Abhijit Patel​
console.log(abhijit.signedNDA); // true