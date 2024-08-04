async function fetchData() {
    try {
        const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    }
    catch (error){
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchData();