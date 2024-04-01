const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

document.querySelector(".startbtn").addEventListener("click",function(){
    document.querySelector(".todo_list").style.display = "block";
    document.querySelector(".img").style.display = "none";
    document.querySelector(".heading").style.display = "none";
})
function addTask(){
    if(taskInput.value === ''){
        alert("You must enter the task!!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    taskInput.value = "";
    saveData();
}

taskList.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();