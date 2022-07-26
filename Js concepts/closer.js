/*const mycloser = function()
{
    var i=1;
    return function(){
        var interva = setInterval(()=>{
            if(i==6)
            {
                clearInterval(interva);
            }
            console.log(i);
            i=i+1;
        },i*1000);
        
       
    }
}


var mycloser1 = mycloser();
mycloser1();*/
function callChild(i){
    setTimeout(()=>{
     console.log(i);
    },i*1000)
    }
const mycloser = function()
{
    for(var i=1;i<=5;i++){
        
            callChild(i);
        }
       
}
mycloser();