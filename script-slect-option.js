function slectOption() {
    // alert ('run')
    let selector = document.getElementById('select-box')
    let selection = selector[selector.selectedIndex].value

    if(selection == 'all') {
        displayAllTasks()
    } else if(selection == 'done') {
       displayTaskDone()
       
    } else {
        displayUndoneTasks()
    }
}
function displayTaskDone() {
    
    let toBeChecked = document.getElementsByClassName('input-task-checkbox')
    let numberOfTasks = toBeChecked.length
    
    for (var i = 0; i < numberOfTasks; i++) {
        let task = toBeChecked[i]
        if (!task.checked) {
            let elementToDisplay = task.parentElement.parentElement
            elementToDisplay.style.display = "none"
        }
    }
}
function displayAllTasks() {
    
    let toBeChecked = document.getElementsByClassName('input-task-checkbox')
    let numberOfTasks = toBeChecked.length
    for (var i = 0; i < numberOfTasks; i++) {
        let task = toBeChecked[i]
        let elementToDisplay = task.parentElement.parentElement
        elementToDisplay.style.display = "block"
    }
}
function displayUndoneTasks() {
    
    let toBeChecked = document.getElementsByClassName('input-task-checkbox')
    let numberOfTasks = toBeChecked.length
    for (var i = 0; i < numberOfTasks; i++) {
        let task = toBeChecked[i]
        if (task.checked) {
            let elementToDisplay = task.parentElement.parentElement
            elementToDisplay.style.display = "none"
        }
    }
}