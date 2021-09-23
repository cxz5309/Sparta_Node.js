const isReady = true;
// 1. Producer
const promise = new Promise((resolve, reject) => {
  console.log("Promise is created!");
  if (isReady) {
    resolve("It's ready");
  } else {
    reject("Not ready");
  }
});

// 2. Consumer
promise
  .then(messsage => {
    console.log(messsage);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("Done");
  });

// Promise is created!
// It's ready
// Done