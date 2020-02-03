let ul = document.getElementById('tasks');
let arrTasks = [],
    arrTasksDone = [];

let beforeTask = document.querySelector('.todo');
let afterTask = document.querySelector('.done');

let loadTodo = () => {

    fetch("https://rn-todo-app-c27d4.firebaseio.com/todos.json")
    .then(res => res.json())
    .then(res => {
        if(res){
            for(let item in res){
               createTask(res[item].title);
            }
            beforeTask.innerHTML = arrTasks.length;
            afterTask.innerHTML = 0;
        }
    })
}

let createTask = (item) => {
    let li = document.createElement('li');
    let iconDelete = document.createElement("svg"); 
    let iconChosen = document.createElement("svg"); 

    let spanText = document.createElement('span');
    let spanDelete = document.createElement('span');
    let spanChosen = document.createElement('span');

    spanText.classList.add('text');
    spanDelete.classList.add('delete');
    spanChosen.classList.add('chosen');

    iconDelete.classList.add('far', 'fa-trash-alt'); 
    iconChosen.classList.add('far', 'fa-star');

    spanDelete.append(iconDelete);
    spanChosen.append(iconChosen);


    li.setAttribute('class', 'list-group-item');
    spanText.innerHTML = item;
    spanText.setAttribute('style', 'text-decoration: none');

    ul.appendChild(li).append(spanChosen, spanDelete, spanText);

    deleteTask(spanDelete);
    taskDone(spanText);
    chooseTask(spanChosen);

    arrTasks.push(li);

    beforeTask.innerHTML = arrTasks.length;

}


let deleteTask = (elem) => {
    elem.addEventListener("click", function(){
        if(elem.nextSibling.style.textDecoration == "line-through") {
            arrTasksDone.pop();
            afterTask.innerHTML = arrTasksDone.length;
            elem.parentElement.remove();
        }
        if(elem.nextSibling.style.textDecoration == "none") {
            arrTasks.pop();
            beforeTask.innerHTML = arrTasks.length;
            elem.parentElement.remove();
        }
    })
}

let chooseTask = (elem) => {
    elem.addEventListener("click", function(){
        if(elem.firstChild.getAttribute('data-prefix') == 'far'){
            elem.firstChild.setAttribute('data-prefix', 'fas');
            elem.nextSibling.nextSibling.style.color = "#052F6D";
            elem.nextSibling.nextSibling.style.fontWeight = "bold";
        }else {
            elem.firstChild.setAttribute('data-prefix', 'far');
            elem.nextSibling.nextSibling.style.color = "black";
            elem.nextSibling.nextSibling.style.fontWeight = "normal";
        }
    })
}

let addTask = () => {
    let input = document.getElementById('inputAdd');
    let btn = document.getElementById('btnAdd');

    btn.addEventListener('click', function(){
        createTask(input.value);
    })
}

let taskDone = (elem) => {
    elem.addEventListener('click', function(){
        if(elem.style.textDecoration == "none") {
            elem.style.textDecoration = "line-through";

            arrTasksDone.push(elem.parentElement);
            arrTasks.pop();

            afterTask.innerHTML = arrTasksDone.length;
            beforeTask.innerHTML = arrTasks.length;
        } else {
            elem.style.textDecoration = "none";

            arrTasks.push(elem.parentElement);
            arrTasksDone.pop();
            
            afterTask.innerHTML = arrTasksDone.length;
            beforeTask.innerHTML = arrTasks.length;
        }
    })
}

let filter = () => {
    let input = document.getElementById('filter-input');

    input.addEventListener('keyup', function(){
        let filter = input.value.toLowerCase();
        let filterElements = document.querySelectorAll("#tasks li .text");
        
        filterElements.forEach(item => {
            if(item.innerHTML.toLowerCase().indexOf(filter) > -1) {
                item.parentElement.style.display = '';
            } else {
                item.parentElement.style.display = 'none';
            }
        })
    })
}

let btnTasks = () => {
    let allBtn = document.querySelector('.allBtn');
    let activeBtn = document.querySelector('.activeBtn');
    let doneBtn = document.querySelector('.doneBtn');

    allBtn.addEventListener('click', function() {
        allBtn.className = 'btn btn-primary allBtn';
        activeBtn.className = 'btn btn-outline-secondary activeBtn';
        doneBtn.className = 'btn btn-outline-secondary doneBtn';
        
        let filterElements = document.querySelectorAll("#tasks li .text");
        filterElements.forEach(item => {
            item.parentElement.style.display = 'block';   
        })
    })

    activeBtn.addEventListener('click', function() {
        allBtn.className = 'btn btn-outline-secondary allBtn';
        activeBtn.className = 'btn btn-primary activeBtn';
        doneBtn.className = 'btn btn-outline-secondary doneBtn';

        let filterElements = document.querySelectorAll("#tasks li .text");

        filterElements.forEach(item => {
            item.parentElement.style.display = 'block';
            if(item.style.textDecoration == "line-through") {
                item.parentElement.style.display = 'none';   
            }
        })
    })

    doneBtn.addEventListener('click', function() {
        allBtn.className = 'btn btn-outline-secondary allBtn';
        activeBtn.className = 'btn btn-outline-secondary activeBtn';
        doneBtn.className = 'btn btn-primary doneBtn';
        
        let filterElements = document.querySelectorAll("#tasks li .text");

        filterElements.forEach(item => {
            item.parentElement.style.display = 'block';
            if(item.style.textDecoration == "none") {
                item.parentElement.style.display = 'none';   
            }
        })
    })
}

btnTasks();
filter();
loadTodo();
addTask();