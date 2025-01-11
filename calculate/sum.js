// Modules protects their variables and functions from leaking

console.log("Sum module executed");
var x= "HEllo World"
function calSum(a,b){
    const sum = a+b;

    console.log(sum);
}


// module.exports= calSum;


// for multiple exports
module.exports ={
    x:x,
    calSum:calSum,
};