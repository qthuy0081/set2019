function editButtonClick () {
    var titleTaskName = document.getElementById('title-task-name')
    document.getElementById('input-task-name').value = titleTaskName
}

function deleteButtonClick () {
    let item = event.currentTarget.parentElement
    var editButton = event.currentTarget
    editButton = document.getElementById('edit-task-button')
    editButton.style.display = 'none'
    
    let deleteButton = event.currentTarget
    deleteButton = document.getElementById('del-task-button')
    deleteButton.style.display = 'none'

    item.innerHTML += '<button id = "yes-button" onclick = "selectYes()">YES</button>'
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
    let editButton = event.currentTarget
    editButton = document.getElementById('edit-task-button')
    editButton.style.display = 'inline'
    
    let deleteButton = event.currentTarget
    deleteButton = document.getElementById('del-task-button')
    deleteButton.style.display = 'inline'

    let yesButton = event.currentTarget
    yesButton = document.getElementById('yes-button')
    yesButton.remove()

    let noButton = event.currentTarget
    noButton = document.getElementById('no-button')
    noButton.remove()
}

