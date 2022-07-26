const arr = [1,2,3,4,5];
const add = function(a,b){
    b === undefined ? b=0:b=b;
    let result = a+b;
    console.log(result);
    return result
}
const multiplication = function(a,b){
    b === undefined ? b=1:b=b;
    let result = a*b;
    console.log(result);
    return result
}
const calculate=function(math)
{
    let result;
    //for(let i=0;i<arr.length;i++)
    for(let i of arr)
    {
        let currentValue = i;
        result = math(currentValue,result);
    }
    console.log("Result  : "+result);

}
calculate(add);
//var result = arr.map(add);
var result1 = arr.map(i =>i*i)
result1
console.log("Add Result :"+result1);
//calculate(multiplication);

