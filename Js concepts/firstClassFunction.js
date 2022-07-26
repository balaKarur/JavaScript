function b(fun)
{
    fun();
}
b(function(){
    console.log("a");
})


function a1(){
    return function (){
        console.log("a2");
    }
}
a1()();