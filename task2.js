let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("This is the error  message after 2 seconds"));
    }, 2000);
});

myPromise.catch((error) => {
    console.error(error.message);
});