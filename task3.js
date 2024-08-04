function fetchData(url){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data from %{url}`);
        }, 2000);
    });
}

fetchData("server1.com")
.then((data1) => {
    console.log(data1);
    return fetchData("server2.com");
})
.then((data2) => {
    console.log(data2);
    return fetchData("server3.com");
})
.then((data3) => {
    console.log(data3);
    console.log("All data fetched in sequence");
})
.catch((error) => {
    console.log(error);
});