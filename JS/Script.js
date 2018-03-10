//"Prototype Pattern" way of creating an object.
function Employee() { }
Employee.prototype.firstName = "Sourav";
Employee.prototype.secondName = "Kings";

Employee.prototype.fullName = function () {
    return this.firstName + this.secondName;
}


var sourav = new Employee();
document.getElementById("result").innerHTML += "<hr/>" + sourav;//JSON.stringify(sourav);



readFile("fileName")
    .then(function (text) {
        return tokenize(text);
    }).then(function (tokens) {
        return parse(tokens);
    }).then(function (parseTree) {
        return optimize(parseTree);
    }).then(function (optimizedTree) {
        return evaluate(optimizedTree);
    }).then(function (output) {
        console.log(output);
    });
