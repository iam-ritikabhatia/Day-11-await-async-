async function handlePromise() {
    try {
        let result = await someAsyncFunction();
        console.log(result);
    }
    catch (error){
        console.log("Error:", error.message);
    }
}

function someAsyncFunction() {
    return new Promise((_, reject) => {
        reject(new Error("Something went wrong!"));
    });
}

handlePromise();
