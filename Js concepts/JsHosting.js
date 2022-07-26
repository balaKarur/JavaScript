var x=10;
console.log(10);
//
getName();
//function declaration
function getName(){
    var a=10;
    console.log("A: "+ this.a);
    console.log("Bala");
}
//This will thru error as getName1 not a function reason ,
//getName1 value is set as undefined at the time of initializeing memory 
//getName1();
//Function Expression
var getName1 = function(){
    console.log("Bala1");
}
console.log("X: "+ this.x);