let person = {
    //property
    //key: value pair
    fName: "Mighy Joe",
    //name: value
    lName: "Young",
    //3rd property of person obj
    //a property whose value is a function like this...
    //is called a method
    fullName: function(){
        return `${this.fName} ${this.lName}`;
    },
};

console.log(person.fName);
//running the method fullname
console.log(person.fullName());