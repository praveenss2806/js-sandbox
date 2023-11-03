const fetchPromise = fetch('./movies.json');

fetchPromise
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {});

const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
};

getUsers();
