// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables and Async/Await

// Callbacks

/* function firstfunction(parameters, callback) {
  // do stuff
  callback();
}

// AKA "callback hell"
firstfunction(parameters, function () {
  secondfunction(parameters, function () {
    thirdfunction(parameters, function () {});
  });
});
 */

// Promises

// 3 states: Pending, Fullfilled, Rejected

/* const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes! resolved the promise");
  } else {
    reject("No! rejected the promise");
  }
});

console.log(myPromise);

myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.error(err);
  });


const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("myNextPromise resolved!");
  }, 3000);
});

myNextPromise.then((value) => {
  console.log(value);
});

myPromise.then((value) => {
  console.log(value);
});
 */

const user = fetch("https://jsonplaceholder.typicode.com/users");

// Pending

console.log(user);
