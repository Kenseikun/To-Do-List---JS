// Date
const date = () => {
    const time = new Date();
    const seconds = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    const hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[time.getDay()];

    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const month = months[time.getMonth()];



    const allDate = document.querySelector("div.date").textContent = `${day} / ${month} ${hours}:${minutes}:${seconds}`
}

setInterval(date, 1000);

// Form

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const taskNumber = document.querySelector("h1 span");
const listItems = document.getElementsByClassName("task");
const input = document.querySelector("input");

const h1 = document.querySelector(".h1__tasks");


const removeTask = function (e) {
    console.log(e);
    console.log(this);
    e.target.parentElement.remove();
    taskNumber.textContent = listItems.length;
}

const addTask = (e) => {
    e.preventDefault();

    const titleTask = input.value;
    console.log(titleTask);

    if (titleTask === "") return;

    const task = document.createElement("li");
    task.className = 'task';
    task.innerHTML = titleTask + '<button><i class="far fa-trash-alt"></i></button>';
    ul.appendChild(task);

    input.value = "";

    taskNumber.textContent = listItems.length;

    task.querySelector("button").addEventListener("click", removeTask);

}

form.addEventListener("submit", addTask);


