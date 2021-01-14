module.exports=function(){
    console.log("GoodBye");
}
var filename="index.js";
var hello=function(name){
    console.log("Hello "+name);
}
var intro=function(){
    console.log("I'm a node file called "+filename);
}
module.exports={
    greeting:hello,
    intro:intro
}