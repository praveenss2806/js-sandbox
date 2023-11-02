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
    div.classList.add('todo');
    div.setAttribute('data-id', todo.id);
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

const toggleTodo = (e) => {
    if (e.target.classList.contains('todo')) {
        e.target.classList.toggle('done');

        console.log();
        updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
    }
};

const updateTodo = (id, completed) => {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ completed }),
        headers: {
            'content-type': 'application/json',
        },
    });
};

const deteteTodo = (e) => {
    if (e.target.classList.contains('todo')) {
        const id = e.target.dataset.id;
        fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
        });
        e.target.remove();
    }
};

const init = () => {
    fetchTodo();
    document.querySelector('#todo-form').addEventListener('submit', createTodo);
    document.querySelector('#todo-list').addEventListener('click', toggleTodo);
    document
        .querySelector('#todo-list')
        .addEventListener('dblclick', deteteTodo);
};

init();
