//Debounsing
//In module

var Debounsing = (function(){
    const getSearchResult=function(key){
        console.log("get Data from server by key : "+key);
    }
    const getResult = function(){
        var timer;
        return function(){
            //On every keypress the timer will be cleared.
            clearTimeout(timer);
            //getSearchResult api will be called if there is delay on keyPress of 300ms
            timer = setTimeout(()=>{
                getSearchResult(arguments[0].value);
            },300);
        }
    }
    return{
        getResult:getResult 
    }
})();
var callChild = Debounsing.getResult();

/*getSearchResult=function(key){
    console.log("get Data from server by key : "+key);
}
const getResult = function(){
    var timer;
    return function(){
        //On every keypress the timer will be cleared.
        clearTimeout(timer);
        //getSearchResult api will be called if there is delay on keyPress of 300ms
        timer = setTimeout(()=>{
            getSearchResult(arguments[0].value);
        },300);
    }
}
var callChild = getResult();*/

//Throttling
/*const getSearhResult= function(key){
    console.log("getData from server : "+key);
}
const getResult = function(){
    var flag=true;
    return function(){
        if(flag)
        {
            flag = false;
            getSearhResult(arguments[0].value);
            setTimeout(()=>{
                flag =true;  
            },300);
        }
       
    }
}
var callChild = getResult();
*/
