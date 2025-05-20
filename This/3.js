console.log(this); // we get an empty object this refers to module.exports
module.exports.nickName="Biswajit";
console.log(this); // now here we have an assigned value for the property nickName
global.age=20; // global object
function hi(){
    console.log(this.age);
}
hi();

console.log(this);




