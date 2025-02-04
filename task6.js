let apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(apiUrl)
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');   
    }
    return response.json();
})

.then (data => {
    console.log(data);
})
.catch(error => {
    console.error('There was a problem with the fetch opeartion:', error);
});
