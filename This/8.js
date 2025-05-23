//
module.exports.name="Biswajit";
const student={
    name:"John",
    siblings: ["Adam","Smita"],
    showsiblings: ()=> {
        console.log(this);
    },
};

student.showsiblings();
