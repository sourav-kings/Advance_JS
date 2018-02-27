//"Prototype Pattern" way of creating an object.
function Employee() { }
Employee.prototype.firstName = "Sourav";
Employee.prototype.secondName = "Kings";

Employee.prototype.fullName = function () {
    return this.firstName + this.secondName;
}


var sourav = new Employee();
document.getElementById("result").innerHTML += "<hr/>" + sourav;//JSON.stringify(sourav);