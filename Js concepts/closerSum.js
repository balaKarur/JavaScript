/*var sum = (a)=>{
    return  (b)=>{
        return b != undefined ? sum(a+b):a;
    }
}*/
var sum = a =>b=>b ? sum(a+b):a;
 //= calculate();
var result = sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(0);
console.log("Result : " +result);