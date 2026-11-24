const inputTask = document.querySelector("#input-task");
const btnSumbit = document.querySelector("#btn-sumbit");
const ulTask = document.querySelector("#task-list");
let isDone = false;

const addTask = () => {
    const text = inputTask.value;
    if (text == '') {
        alert("Please type the task first alright hehe");
        return;
    }
    const newTask = document.createElement("li");
    newTask.textContent = text;
    newTask.addEventListener("click", () => {
        const message = isDone ? "Cancel approved status for this task?" : "Are you sure this task is completed?";
        if (confirm(message)) {
            if(!isDone) {
                isDone = true;
            } else {
                isDone = false;
            }
            newTask.classList.toggle("selesai");   
        }
    })
    ulTask.appendChild(newTask);
    inputTask.value = '';
};

btnSumbit.addEventListener("click", addTask);
inputTask.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        addTask();
    }
})