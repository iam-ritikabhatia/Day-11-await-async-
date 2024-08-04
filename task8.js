const promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json());
const promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2').then(response => response.json());
const promise3 = fetch('https://jsonplaceholder.typicode.com/posts/3').then(response => response.json());

Promise.all([promise1, promise2, promise3])
.then(results => {
    console.log('Results:', results);
})

.catch(error => {
    console.error('Error:', error);
})