/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
//Constructor Function:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}

//prototypes:
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.stomach = [];
};

Person.prototype.eat = function (food) {
  if (this.stomach.length < 10) {
    this.stomach.push(food);
  }
};

Person.prototype.poop = function () {
  this.stomach = [];
};

Person.prototype.toString = function () {
  return `My name is ${this.name} and I am ${this.age}`;
}


const Jeff = new Person("Jeff", 23);
["candy", "popcorn", "icecream", "lint", "soda", "cake", "hamburger", "pizza"].forEach(i => Jeff.eat(i));

// console.log(Jeff.age);
// console.log(Jeff.stomach);
// console.log(Jeff.toString());


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons) {
  this.tank += gallons;
}

Car.prototype.drive = function (distanceMiles) {
  this.odometer += distanceMiles;
  this.tank -= (distanceMiles / this.milesPerGallon);
  if (this.thank <= 0) {
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
};

const lambo = new Car("lambo", 60);

// console.log(lambo.model);
// console.log(lambo.milesPerGallon);
// lambo.fill(20);
// console.log(lambo.tank);
// lambo.drive(240);
// console.log(lambo.odometer, lambo.tank);



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  // Call to copy parent's properties
  Person.call(this, name, age);
  // Baby's personal argument
  this.favoriteToy = favoriteToy;
}

// Set the child's prototype equal to parent's
Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function () {
  return `${this.name} is now playing with ${this.favoriteToy}`
};

const babyPace = new Baby("Baby Pace", 1, "Stretch Armstrong");

console.log(babyPace);
console.log(babyPace.play());

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window/ Global Object Binding = If "this" is not inside of an object (global scope) it refers to the window or global object. 
  2. Implicit Binding = If "this" is inside of an object where it would preced a function or helps to define a key valu pair inside of a constructor than it is refering to the object it is preceding. 
  3. New Binding = "this" refers to the new object being created and passed into the constructor function.
  4. Explicit binding = when the call or apply method is used "this" refers to the object being passed.  
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo() {
  return 'bar';
}

export default {
  foo,
  Person,
  Car,
  Baby
}