function Employee (name, profession) {
    this.name = name;
    this.profession = profession;
}

var richard = new Employee ("Richard", "Developer");

console.log(richard.name); //richard
console.log(richard.profession); // Developer