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

/* const myUser = {
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
 */

// Workflow Function

/* const getAllUserEmails = async () => {
  const Response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await Response.json();
  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });
  postToWebPage(userEmailArray);
};

const postToWebPage = (data) => {
  console.log(data);
};

getAllUserEmails();
 */

// 2nd parameter of fetch() is an object

// Posting an Object

/* const jokeObj = {
  id: "lqWgFlyPusc",
  joke: "What do you call an Argentinian with a rubber toe? Roberto",
};

const postData = async (jokeObj) => {
  const Response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });
  const jsonResponse = await Response.json();

  console.log(jsonResponse);
};

postData(jokeObj); */

// Sending Data through the URL in Fetch() using "GET" method

const requestJoke = async (category) => {
  const response = await fetch(
    `http://api.chucknorris.io/jokes/random?category=${category}`
  );

  const jsonResponse = await response.json();

  console.log(jsonResponse);
};

requestJoke("science");

// The Categories are = ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]
