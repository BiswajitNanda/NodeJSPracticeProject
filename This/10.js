const student={
    firstName:"John",
    talk(){
        console.log(this.firstName,"talks");
    },
};

const teacher ={
    firstName:"Biswajit",
};

// the question is how to assign this to teacher object

const bound=student.talk.bind(teacher);
bound();
