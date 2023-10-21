const fetchPromise = fetch('./movies.json');

fetchPromise
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });
