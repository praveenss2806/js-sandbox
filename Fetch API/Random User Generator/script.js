const fetchUser = () => {
    fetch('https://www.randomuser.me/api')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            putUserData(data.results[0]);
        });
};

const putUserData = (user) => {
    if (user.gender === 'male') {
        document.body.style.backgroundColor = '#4682b4';
    } else {
        document.body.style.backgroundColor = 'purple';
    }

    const userContent = document.querySelector('#user');

    userContent.innerHTML = `
      <div id="user" class="mt-6">
         <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${user.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.title} ${user.name.first} ${user.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.location.city}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${user.registered.age}</p>
            </div>
          </div>
        </div>
      </div>
    `;
};

fetchUser();
const generateUser = document
    .querySelector('button')
    .addEventListener('click', fetchUser);
