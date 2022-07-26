var name={fn:"name","ln":"mani"};
getUserDetails = function(state,city,place){
    console.log(`${this.fn} ${this.ln} ${state} ${city} ${place}`);
}
Function.prototype.myBind = function(...args){
    var obj = this;//getUserDetails ref 
    var param =args.slice(1);
    return function(...arg1s){
        obj.apply(args[0],[...param,...arg1s]);
    }
}

var ud = getUserDetails.myBind(name,"KA");
ud("Blore","EWW");