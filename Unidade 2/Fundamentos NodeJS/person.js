class Person{
    constructor(name){
        this.name = name;
    }

    sayMyName(){
        return `\nMy name is ${this.name}!`;
    }
}

module.exports = {
    Person,
};