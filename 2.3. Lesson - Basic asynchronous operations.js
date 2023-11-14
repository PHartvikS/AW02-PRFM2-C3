// 2.3. Lesson - Basic asynchronous operations
/*
// Function sequence
function print(text) {
    document.getElementById("displayer").innerHTML = text;
}
print("Hello");

function print(text) {
    document.getElementById("displayer").innerHTML = text;
}
print("Hello");
print("My");
print("Dear");
print("Friend");

// Callbacks
function print(text) {
    document.getElementById("displayer").innerHTML = text;
}
function concat(name, surname, callback) {
    let result = name + " " + surname;
    callback(result);
}
concat("Steven", "Bottom", print);

// Timeouts
function print(text) {
    document.getElementById("displayer").innerHTML = text;
}
function calculator(a, b, callback) {
    let result =  a + b;
    callback(result);
}
print("Waiting for the calculation to end...")
setTimeout(() => calculator(1, 2, print), 5000);

//Intervals
function print(text) {
    document.getElementById("displayer").innerHTML = text;
}
function timer(callback) {
    counter++;
    callback(counter);
}
print("Waiting...")
var counter = 0;
setInterval(() => timer(print), 2000);

function print(text) {
    document.getElementById("displayer").innerHTML = text;
}
function timer(callback) {
    counter++;
    callback(counter);
}
print("Waiting...")
var counter = 0;
const id = setInterval(() => timer(print), 2000);
setTimeout(() => clearInterval(id), 30000);

// Promises
let promise = new Promise(function(resolve, reject) {
    // "Producing Code" (May take some time)

    resolve(); // when successful
    reject();  // when error
});
/*
// "Consuming Code" (Must wait for a fulfilled Promise)
promise.then(
    function(value) { /* code if successful },
    function(error) { /* code if some error  }
);
*/
/*
Pending: Our producing code is still executing, and we don’t have a result yet – promise.result equals undefined.
Fulfilled: The producing code is executed correctly, and the resolve function will execute – promise.result is a result value.
Rejected: The producing code produced an error, and the reject function will execute – promise.result is an error object.


console.log( 'a' );
new Promise( function ( ) {
    console.log( 'b' );
    setTimeout( function ( ) {
        console.log( 'D' );
    }, 0 );
} );
// Other synchronous stuff, that possibly takes a very long time to process
console.log( 'c' );

function print(text) {
    document.getElementById("displayer").innerHTML = text;
}
let promise = new Promise(function(resolve, reject) {
    let x = 0;
    if (x == 0) {
      resolve("OK");
    } else {
      reject("Error");
    }
  });
promise.then(
    function(value) {print(value);},
    function(error) {print(error);}
);

// Async/Await

function print(text) {
    document.getElementById("displayer").innerHTML = text;
}
async function display() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("Hello!");}, 3000);
    });
    const result = await myPromise;
    print(result);
    console.log(result); // "Hello!"
    console.log(myPromise); // Promise: ...
}
display();
*/