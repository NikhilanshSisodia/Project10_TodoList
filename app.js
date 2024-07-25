const input = document.querySelector('#input-box');
const listContainer = document.querySelector('.list-container');

function addTask(){
    if(input.value === ''){
        alert('You must write something!');
    }else{
        let li = document.createElement('li');
        let span = document.createElement('span');

        li.innerHTML = input.value;
        span.innerHTML = '\u00d7';

        li.appendChild(span);
        listContainer.appendChild(li);
    }

    input.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();