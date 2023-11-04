const fetchPromise = fetch('./movies.json');

fetchPromise
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {});

const getUsers = async () => {
    try {
        const res = await fetch('http://httpstat.us/404');
        if (!res.ok) {
            throw new Error('Reqest Failed');
        }
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};

getUsers();
