var obj = {"name":"bala","age":"30"};
var obj1 = {"name":"any"};
//obj1.prototype = obj;
//obj1.__proto__ = obj;
obj1 = Object.create(obj);
console.log("name : "+obj1.name);
console.log("age : "+obj1.age);
