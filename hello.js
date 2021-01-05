// prints hello 'name' to console
const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("JD");

// as above, prints hello to console
const sayHelloToConsole = function (name) {
  console.log("Hello " + name);
}

sayHelloToConsole("Daniel");

// example using return
const returnSayHello = function (name ) {
  return "hello, " + name;
}

// function saved as variable
const greeting = returnSayHello('John');
console.log(greeting);
