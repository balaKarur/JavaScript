function parent(){
    function child(i)
    {
        setTimeout(function(){
            console.log("in :"+i); 
        },1000*i)
    } 
    for(var i=1;i<=5;i++)
    {
        child(i);
    }
    
}
parent();