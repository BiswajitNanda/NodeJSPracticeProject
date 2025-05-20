const student = {
    firstName: "John",
    lastName: "Doe",
    //Here this will not work as it is function scope
    // getFullName(){
    //     return firstName + " " + lastName;
    // },
    getFullName(){
        return this.firstName + " " + this.lastName;
    },
};

console.log(student.getFullName());

// this keyword refers to the object it is called on

