// In a normal function, this keyword refers to object that the function is called on

const obj_one={
    name:"Biswajit",
    one(){
        console.log(this.name);
    },
};
obj_one.one();

// Arrow function do not have their own bindings so when this is accessed from
// inside, its taken from outside


