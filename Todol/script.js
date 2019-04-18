function editButtonClick () {
    var titleTaskName = document.getElementById('title-task-name')
    document.getElementById('input-task-name').value = titleTaskName
}

function deleteButtonClick () {    
    let item = event.currentTarget.parentElement
    item.innerHTML = item.innerHTML.replace('<button id="del-task-button" onclick="deleteButtonClick()">DELETE</button>','') 
    item.innerHTML = item.innerHTML.replace('<button id="edit-task-button" onclick="editButtonClick()">EDIT</button>','') 
    item.innerHTML += '<button id = "yes-button" onclick = "selectYes()">YES</button> '
    item.innerHTML += '<button id = "no-button" onclick = "selectNo()">NO</button>'
}

function changeColor() {
    let tasksList = document.getElementsByClassName('task-item')
    let numberOfTasks = tasksList.length

    for (var i = 0 ; i < numberOfTasks;i++) {
        let task = tasksList[i]
        if (i % 2 == 0) {
            task.style.backgroundColor = '#CCCCCC'
        } 
    }
}

function selectYes () {
    let item = event.currentTarget.parentElement
    item.remove()
    changeColor()
}

function selectNo () {
    let item = event.currentTarget.parentElement
    
    let yesButton = event.currentTarget
    yesButton = document.getElementById('yes-button')
    yesButton.remove()
    
    let noButton = event.currentTarget
    noButton = document.getElementById('no-button')
    noButton.remove()
    
    item.innerHTML += '<button id="edit-task-button" onclick="editButtonClick()">EDIT</button> '
    item.innerHTML += '<button id="del-task-button" onclick="deleteButtonClick()">DELETE</button>'
}

