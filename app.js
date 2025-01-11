// var name= "Hiamnshu Sengar"

var a = 10;
var b = 20;

// console.log(name);
// console.log(a+b);

// console.log(global)

// console.log(globalThis)

// console.log(this)
// require("./xyz.js")
// console.log(globalThis === global) //---->>>>true

// require("./sum") ----->>>> wrong way of import
// const calSum=require("./sum.js")
// calSum(a,b); // this will give error we cannot directly acess variable,functions from another module

// but what if we have to use these functions are variables then we have to specially export the function from the module and import in another module where it is required


//---->>>> and for multiple imports---->>
// const obj = require("./calculate/sum.js");
// const {calculateMultiply}=require("./calculate/multiply");




// another way of getting calMulti and calSum by making whole calculate module

const {calSum,calculateMultiply}=require("./calculate")

calculateMultiply(a,b)

// obj.calSum(a,b);
// console.log(obj.x);
calSum(a,b)

