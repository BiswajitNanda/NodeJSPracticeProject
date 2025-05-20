const student = {
    name: "John",
    siblings: ["Jane", "Jack"],
    showsiblings(){
        this.siblings.forEach(sibling => {console.log(`${this.name}'s sibling is ${sibling}`)});
    },
};

student.showsiblings();
