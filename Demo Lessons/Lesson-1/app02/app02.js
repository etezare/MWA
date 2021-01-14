require("./instantHello");
// const talk = require("./talk");
var goodbye=require("./talk");
goodbye.greeting("essey");
goodbye.intro();

var question=require("./talk/question");
var answer=question.ask("What is the meaning of life");
console.log(answer);