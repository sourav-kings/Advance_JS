function User (theName, theEmail) {
    this.name = theName;
    this.email = theEmail;
    this.quizScores = [];
    this.currentScore = 0;
    this.showNameAndScores = function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    }
}

User.prototype = {
    constructor: User,
    saveScore:function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores2:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    },
    country: "unknown",
    getCountry: function(){
        return country;
    }
}

var sourav =  new User("Sourav", "souravkundu98@gmail.com");
sourav.saveScore(10);
console.log("Sourav:- ", sourav);

var aryan =  new User("Aryan", "aryan.kills@yahoo.com");
aryan.saveScore(50);
console.log("Aryan:- ", aryan);