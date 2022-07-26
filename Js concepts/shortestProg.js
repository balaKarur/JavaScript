var a=10;
var b= function(){
    let x=20;
    xVal=function(){
        return x;
    }
    return {xVal:xVal}
}
var b1= (function(){
    let x=20;
    xVal=function(){
        return x;
    }
    return {xVal:xVal}
})()
console.log(a);
console.log(typeof(b));
console.log(typeof(b1))
console.log(b1.xVal());
console.log(b1.prototype);
b.prototype.x2=function()
{
    console.log("x2");
}
b.prototype.xVal();