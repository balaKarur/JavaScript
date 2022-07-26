arr = [3,6,1,8,2,10];
var res = 0;
var iseven = arr.filter(i=>i%2===0)
console.log("iseven : "+iseven);
var isodd = arr.filter(i=>i%2);
console.log("isodd : "+isodd);
//var findMax = arr.filter(i=>{return if(i>res){res=i}})
/*function maxNumber(i){
   var cond = false;
    if( i>res)
   {
     res = i;
   }
   if(i === arr[arr.length-1])
   {
    cond = true;
   }
   return cond;
}*/
/*function maxNumber(i){
    res = i>res?res:i;
    cond = i === arr[arr.length-1]?true:false
    return cond;
 }
var findMax = arr.filter(maxNumber);*/

var findMax = arr.reduce((acc,cur) => {
   return acc = cur > acc ?cur: acc ;
},0);
console.log("findMax : "+findMax);
var sumArr = arr.reduce(function(acc,cur){
   acc = acc +cur;
   return acc;
},0/**initial value */);
console.log("sumArr : "+sumArr);

//-------------------------------
const users = [
   {fName:"Bala",lName:"mani",age:20},
   {fName:"Bala1",lName:"mani1",age:40},
   {fName:"Bala2",lName:"mani2",age:30},
   {fName:"Bala3",lName:"mani3",age:20}
]
//{20:2,40:1,30:1}
var response = users.reduce((result,userObj)=>{
   
   if(result[userObj.age])
   {
      result[userObj.age]=++result[userObj.age];
   } else{
      result[userObj.age]=1; 
   }
   return result;
},{})
/*var response = users.reduce((result,userObj)=>{
   return result = result[userObj.age] !== undefined ? result[userObj.age] = ++result[userObj.age]:{userObj.age:1}; 
},{})*/
console.log("Response : "+ JSON.stringify(response));
//Find User with age 20 with its fisrt name

//var usrs = users.filter(usr => usr.age===20);

//var usrs = (users.filter(usr => usr.age===20)).map(ur=>ur.fName);
var usrs = users.reduce((acc,cur)=>{
   if(cur.age === 20){
      acc.push(cur.fName);
   }
   return acc;
},[])
console.log("Response : "+ JSON.stringify(usrs));



