interface IStudent{
    name: String,
    age: Number
}

class Student{
    constructor(public name: String, public age: Number){
        this.name = name;
        this.age = age;
    }
}

const std1 = new Student("Nada", 23);
console.log(std1);
