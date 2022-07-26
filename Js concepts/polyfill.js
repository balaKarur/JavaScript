/*var name={fn:"bala",
          ln:"mani"};
getFullName = function(state,city,place){
    console.log(this.fn + " "+this.ln+" "+state+" "+city,+" "+place);
}


Function.prototype.myBind=function(...args)//Spread operator
{
    var myapi = this;
   // var args = arguments.slice(1);
   var params = args.slice(1);
    return function(...args2){
        //myapi.call(args[0]);
        //var paramList = params.concat(args2);
        myapi.apply(args[0],[...params,...args2]);
    }
}
var fullName = getFullName.myBind(name,"KA");
fullName("Blore","EWW");

*/

var name = {fn:"bala",ln:"main"};
getUserDetails=function(state,city,place){
   console.log(`${this.fn} ${this.ln} ${state} ${city} ${place}`);
}
Function.prototype.myBind = function(...args){
    var params = args.slice(1);
    //var params1 = arguments.slice(1);
    return function(...args2){
        getUserDetails.apply(args[0],[...params,...args2]);
    }
}

//var udetails = getUserDetails.bind(name);//register getUserDetails api
var udetails = getUserDetails.myBind(name,"KA");//register getUserDetails api
udetails("blore","EWW");