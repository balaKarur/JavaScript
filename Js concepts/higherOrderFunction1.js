//find radius
const radius = [3,1,2,4];
//Area:Math.PI*r2
//diamater :2*r
function calRadius (input){
    return Math.PI*input*input;
}
function calcCircumferance(input)
{
    //2*math.Pi*r
    return 2*Math.PI*input;
}
const calculate = function(callback,inputArr){
    var output=[];
    /*for(var i = 0; i < inputArr.length; i++ ){
        output.push(callback(inputArr[i]));
    }*/
    output =inputArr.map(i=>callback(i))
    return output;
}
/*
calRadius res : 28.274333882308138,3.141592653589793,12.566370614359172,50.26548245743669
higherOrderFunction1.js:22
calcCircumferance res : 18.84955592153876,6.283185307179586,12.566370614359172,25.132741228718345
*/
//var res = calculate(calRadius,radius);
//res = radius.map(i=>Math.PI*i*i);
//res = radius.map(i=>calRadius(i));
res = radius.map(i=> {
    return Math.PI*i*i;
})
console.log("calRadius res : "+res);
var res = calculate(calcCircumferance,radius);
console.log("calcCircumferance res : "+res);

