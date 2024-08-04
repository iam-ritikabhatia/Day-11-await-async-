function fetchData(url){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, 2000);
    });
}

async function fetchAndLogData() {
    try {
        let data1 = await fetchData("server1.com");
        console.log(data1);

        let data2 = await fetchData("server2.com");
        console.log(data2);

        let data3 = await fetchData("server3.com");
        console.log(data3);

        console.log("All data fetched and logged");
    }
    catch(error) {
        console.log(error);
    }
}

fetchAndLogData();