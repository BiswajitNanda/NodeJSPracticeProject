const student={
    firstName:"John",
    getName(){
        return this.firstName;
    },
};

const getName=student.getName; // this will get the address of the getName function
console.log(student.getName);

// only when we call the function with the object, the this keyword will work otherwise not


