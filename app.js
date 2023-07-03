const textDOM = document.querySelector('.text');
const addDOM = document.getElementById('btn-add')
const clearDOM = document.getElementById('btn-clear');
const listDOM = document.getElementById('list');
let counterDOM = document.querySelector('.counter');



addDOM.addEventListener('click', () => {
    if (textDOM.value.trim() !== '') {

        let newList = document.createElement('p');
        let deleteIcon = document.createElement('i');
        let checkIcon = document.createElement('i');

        newList.innerHTML = textDOM.value.charAt(0).toUpperCase() + textDOM.value.slice(1);
        textDOM.value = '';

        newList.append(deleteIcon);
        deleteIcon.classList.add('fa-solid', 'fa-trash-can', 'fa-xs');
        deleteIcon.addEventListener('click', () => {
            newList.remove();
            savelocal();
            decreaseCounter();
        });

        newList.append(checkIcon);
        checkIcon.classList.add('fa-solid', 'fa-check', 'fa-sm');
        checkIcon.addEventListener('click', () => {
            newList.style.textDecoration = 'line-through';
            savelocal();
        });

        listDOM.append(newList);
        savelocal();
        counter();
    }
});

clearDOM.addEventListener('click', () => {
    listDOM.innerHTML = '';
    localStorage.removeItem('todoList');
    clearCounter();
    localStorage.removeItem('counter');
});

loadLocal();