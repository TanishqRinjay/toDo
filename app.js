let addButton = document.getElementById("add");
let addedTasks = document.querySelector(".addedTask");
let title = document.getElementById("title");
let description = document.getElementById("description");
let noOfTasks=0;
var taskNo=0;
if(taskNo<=0)
{
    showEmpty();
}
addButton.addEventListener('click', (e)=>{
    console.log(e);
    taskNo++;
    if(taskNo==1)
    {
        let noTask = document.querySelector(".noTask");
        noTask.remove();
    }
    addedTasks.innerHTML+=`<div class="tasks">
    <div class="content">
    <h2>${title.value}</h2>
    <p>${description.value}</p>
    </div>
    <div class="button">
    <button class="delete"><i class="fa-solid fa-trash"></i></button>
    </div>
    </div>`
    localStorage.setItem(`toDo-${taskNo}`, JSON.stringify([title.value, description.value]))
    var deleteBtn = document.querySelectorAll(".delete");
    console.log(taskNo);
    for(let i=0; i<deleteBtn.length; i++){
        deleteBtn[i].onclick = function(){
            this.parentNode.parentNode.remove();
            localStorage.removeItem(`toDo-${taskNo}`, JSON.stringify([title.value, description.value]))
            taskNo--;
            console.log(taskNo);
            if(taskNo==0)
            {
                showEmpty();
            }
        }
    }
})
function showEmpty(){
    addedTasks.innerHTML = `<h3 class="noTask">Entered tasks will be shown here</h3>`;
}