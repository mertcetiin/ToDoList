const textDOM = document.querySelector('.text');
const addDOM = document.getElementById('btn-add')
const clearDOM = document.getElementById('btn-clear');
const listDOM = document.getElementById('list');
let counterDOM = document.querySelector('.counter');




function savelocal() {
    let todoListHtml = listDOM.innerHTML
    localStorage.setItem('todoList', todoListHtml)
};

function loadLocal() {
    const savedList = localStorage.getItem('todoList');
    if (savedList) {
        listDOM.innerHTML = savedList;

        const deleteIcons = document.querySelectorAll('.fa-trash-can');
        deleteIcons.forEach((deleteIcon) => {
            deleteIcon.addEventListener('click', () => {
                deleteIcon.parentNode.remove();
                savelocal();
                decreaseCounter()
            });
        });

        const checkIcons = document.querySelectorAll('.fa-check');
        checkIcons.forEach((checkIcon) => {
            checkIcon.addEventListener('click', () => {
                checkIcon.parentNode.style.textDecoration = 'line-through'
                savelocal();
            });
        });

        const savedCount = localStorage.getItem('counter');
        if (savedCount) {
            count = parseInt(savedCount);
            counterDOM.innerHTML = count;
        }
    }
}

let count = 0;
function counter() {
    counterDOM.innerHTML = ++count
    saveCounter();
}
function decreaseCounter() {
    counterDOM.innerHTML = --count;
    saveCounter();
}
function clearCounter() {
    count = 0;
    counterDOM.innerHTML = count;
}



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