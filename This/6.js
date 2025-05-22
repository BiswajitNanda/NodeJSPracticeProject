const obj_two={
    name:"Biswajit",
    two(){
        [1,2].forEach(()=>
        {
            console.log(this.name);
        });
    }

};

obj_two.two();