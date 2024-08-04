let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is the resolved message after 2 seconds");
    }, 1000);
});

myPromise.then((message) => {
    console.log(message);
});