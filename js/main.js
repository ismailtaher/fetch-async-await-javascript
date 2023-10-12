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

/* const user = fetch("https://jsonplaceholder.typicode.com/users"); */

// Pending

/* console.log(user); */

// Using Fetch Correctly using Thenables

/* const user = fetch("https://jsonplaceholder.typicode.com/users")
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  });

console.log(user); */

// Async & Await

const myUser = {
  userList: [],
};

const myCoolFunction = async () => {
  const Response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await Response.json();
  return jsonUserData;
};

const anotherFunc = async () => {
  const data = await myCoolFunction();
  myUser.userList = data;
  console.log(myUser.userList);
};

anotherFunc();
console.log(myUser.userList);
