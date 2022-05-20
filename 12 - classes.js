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



//constructors
//Classes

//object
const person = { name: 'Alex', email: 'alex@test.com' };

class Person {
  //constructor method
  constructor() {
    console.log('construtor invoked');
  }

  hello(){
    console.log("hello");
  }
}

let person1 = new Person();
person1.hello();



class Person {
  name;
  email;
  address;

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  displayName() {
    console.log(this.name);
  }
}

let person1 = new Person('Alex', 'alex@test.com');
person1.displayName();



class Person {
  name;

  set pname(n) {
    this.name = n;
  }

  get pname() {
    return this.name;
  }

  getName() {
    return this.name;
  }
}

let person1 = new Person();
person1.pname = "alex";
console.log(person1.pname);
console.log(person1.getName());

