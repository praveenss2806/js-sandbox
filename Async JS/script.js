const fetchData = (endpoint) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', endpoint);

        xhr.onreadystatechange = function () {
            if (this.status === 200 && this.readyState === 4) {
                resolve(JSON.parse(this.responseText));
            }
        };

        setTimeout(() => {
            xhr.send();
        }, Math.floor(Math.random() * 3000) + 1000);
    });
};

// fetchData('./actors.json')
//     .then((data) => {
//         console.log(data);
//         return fetchData('./directors.json');
//     })
//     .then((data) => {
//         console.log(data);
//         return fetchData('./movies.json');
//     })
//     .then((data) => {
//         console.log(data);
//     });

const actorPromise = fetchData('./actors.json');
const directorPromise = fetchData('./directors.json');
const moviesPromise = fetchData('./movies.json');

Promise.all([actorPromise, directorPromise, moviesPromise]).then((data) => {
    console.log(data);
});
