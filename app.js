let addButton = document.getElementById("add");             //Add button to add Task
let addedTasks = document.querySelector(".addedTask");      //Parent div to append task blocks
let title = document.getElementById("title");               //Title of Task that is added
let description = document.getElementById("description");   //Description of Task that is added
var taskNo=0;                                               //To count no. of task that is added

function fillFromLocal(){       //Function to fill-in previously added task on local Storage
    if(localStorage.length!=0){
        for(let i=1; i<=localStorage.length; i++){
            
            //Converting Local Storage String to Array
            
            let lArray = JSON.parse(localStorage.getItem(`toDo-${i}`));
            
            //Adding previously added tasks that was saved on LocalStorage

            addedTasks.innerHTML+=`<div class="tasks">
            <div class="content">
            <h2>${lArray[0]}</h2>
            <p>${lArray[1]}</p>
            </div>
            <div class="button">
            <button class="delete"><i class="fa-solid fa-trash"></i></button>
            </div>
            </div>`
            taskNo++;   //  To increase task no. at start

            //Adding delete button on task entered by LocalStorage
            var deleteBtn = document.querySelectorAll(".delete");
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
        }
        console.log(localStorage.getItem(`toDo-1`))
    }
}
fillFromLocal();        //Calling funtion to fill-in task from LocalStorage


function showEmpty(){       //Funtion to show text when no task is there
    addedTasks.innerHTML = `<h3 class="noTask">Entered tasks will be shown here</h3>`;
}


if(taskNo<=0)       //To show "Added task will be shown here" line
{
    showEmpty();
}

//      Add button funtionality added
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
    title.value = "";
    description.value = "";
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