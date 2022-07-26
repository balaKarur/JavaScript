//This is not scallable
/*function counter(){
    let count=0;
    return function innerCounter(){
       console.log(count++);
    }
}*/
//for more scallable need to use constructor function
function Counter(){
    let count=0;
    this.increamentCounter=function(){
        count++;
        console.log(count);
    }
    this.decreamentCounter=function(){
        count--;
        console.log(count);
    }
}

var count1 = new Counter();
count1.increamentCounter();
count1.increamentCounter();
count1.decreamentCounter();
count1.decreamentCounter();
/*var count2 = counter();
count2();
count2();*/