const users = [
    {fName:"Bala",lName:"mani",age:20},
    {fName:"Bala1",lName:"mani1",age:65},
    {fName:"Bala2",lName:"mani2",age:61},
    {fName:"Bala3",lName:"mani3",age:20}
 ]
 Array.prototype.myReduce=function(callback,cur){
    var values = this;s
    values.forEach(usr =>  { 
        cur =  usr.age === 20 ? callback(cur,usr):usr
     } );
     return cur;
 }
 /*var usrs = users.reduce((acc,cur)=>{
    if(cur.age === 20){
       acc.push(cur.fName);
    }
    return acc;
 },[])*/
 //var usrs = users.myReduce(acc,cur);
 //console.log("Response : "+ JSON.stringify(usrs));
 Array.prototype.myForEach=function(cb){
   var arrItem = this;
    for(i in arrItem){
        cb(arrItem[i],i,this); 
    }

 }
 users.myForEach(function(item){
    console.log(item.fName);
})

/*Array.prototype.mymap=function(cb){
    var arrItem = this;
     for(i of arrItem){
         cb(i); 
     }
  }
  //identify user young or old
  users.mymap(function(item){
    item =  item.age>60?item.seniorCitizen="yes":item.seniorCitizen="no";

})*/
Array.prototype.myMap=function(cb)
{
    var arrItem = this;
    var result =[];
    for(i of arrItem)
    {
        result.push(cb(i));
    }
    return result;
}
var myMapValue = users.myMap(function(item){
      item.age>60?item.seniorCitizen="yes":item.seniorCitizen="no";
      return item;
})
console.log("updated myMap : "+JSON.stringify(myMapValue));

Array.prototype.myFilter=function(cb){
    var arrItem = this;
    var result =[];
     for(i in arrItem){
        cb(arrItem[i],i,this)=== true ? result.push(arrItem[i]):''
     }
     return result;
  }
  //identify only  old user
  var myFilterRes = users.myFilter(function(item){
    return item.age>60;

})
console.log("updated myFilter myFilterRes : "+JSON.stringify(myFilterRes));

Array.prototype.myReduce=function(cb,result){
    var arrItem = this;
   for(i of arrItem){
    cb(result,i);
   }
   return result
}
//{20:2,60:1,65:1}
var myReduceResponse = users.myReduce(function(acc,cur){
    if(acc[cur["age"]] !== undefined )
     {
       acc[cur["age"]] = acc[cur["age"]]+1;
     }else{
        acc[cur["age"]] = 1;
     }

},{})

console.log("updated myReduceResponse : "+JSON.stringify(myReduceResponse));