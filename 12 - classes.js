//Classes

//object
const person = {name: "Alex", email: "alex@test.com"};

class Person{
  name;
  email;
  dob;

  age(){
    //TODO
    return 2022 - this.dob;
  }
}

let person1 = new Person();
person1.name = "alex";
person1.email = "alex@test.com";
person1.dob = 2001;

console.log(person1);
console.log(person1.age()); //21

let person2 = new Person();
person2.name = "benn";
person2.email = "ben@test.com";
person2.dob = 2002;

console.log(person2);
console.log(person2.age()); //20

