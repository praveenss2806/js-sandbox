const fetchUser = () => {
    fetch('https://randomuser.me/api')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data.results[0]);
            displayUser(data.results[0]);
        });
};

const displayUser = (user) => {
    if (user.gender === 'male') {
        document.body.style.backgroundColor = 'steelblue';
    } else {
        document.body.style.backgroundColor = 'purple';
    }
};

fetchUser();
