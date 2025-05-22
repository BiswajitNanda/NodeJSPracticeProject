function three(){
 //   console.log(this);
}

three();

module.exports.student="John";

//console.log(this);
// this in global scope is equal to module.exports object

const arrowFunction= ()=>{
    console.log(this);
}
arrowFunction();
