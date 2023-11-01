const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const fetchTodo = () => {
    fetch(apiUrl + '?_limit=5')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((todo) => {
                addTodoToDOM(todo);
            });
        });
};

const addTodoToDOM = (todo) => {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(todo.title));

    if (todo.completed) {
        div.classList.add('done');
    }

    document.querySelector('#todo-list').appendChild(div);
};

const createTodo = (e) => {
    e.preventDefault();

    const newTodo = {
        title: e.target.firstElementChild.value,
        completed: false,
    };

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((data) => addTodoToDOM(data));
};

const init = () => {
    fetchTodo();
    document.querySelector('#todo-form').addEventListener('submit', createTodo);
};

init();
