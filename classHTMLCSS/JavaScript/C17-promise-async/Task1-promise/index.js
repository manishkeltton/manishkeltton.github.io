// var myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve({ id: 1, title: "Event 1" }), 5000);
// });

// myPromise
//   .then((res) => console.log("success => ", res))
//   .catch((error) => console.log("reject =>", error))
//   .finally((data) => console.log("done!"));

// var myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => reject({ id: 1, title: "Event 1" }), 5000);
// });

// myPromise
//   .then((res) => console.log("success => ", res))
//   .catch((error) => console.log("reject =>", error))
//   .finally((data) => console.log("done!"));

// var events = {
//     id: 1,
//     title: 'Event 1',
// };
var events;

var myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (events) {
      resolve(events);
    } else {
      reject("No events");
    }
  }, 2000);
});

myPromise
  .then((res) => console.log("Success >", res))
  .catch((e) => console.log("Failed >", e))
  .finally(() => console.log("Done"));

console.log("A");

// Fetch

var promise = fetch(
  "https://609e833333eed80017958b6c.mockapi.io/api/list/events"
);
promise
  .then((res) => res.json())
  .then((res) => {
    console.log("Previous Then > ", res);
    throw new Error("Something went wrong");
    return {};
  })
  .then((res) => console.log("Final Then", res))
  .catch((e) => console.log(e));
  
