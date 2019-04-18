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
    let numberOfTasks = toBeChecked.length
    let toBeChecked = document.getElementsByClassName('input-task-checkbox')
    for (var i = 0; i < numberOfTasks; i++) {
        let task = numberOfTasks.toBeChecked[i]
        if (task.checked) {
            task.style.display = "block"
        }
    }
}
function displayAllTasks() {
    let numberOfTasks = toBeChecked.length
    let toBeChecked = document.getElementsByClassName('input-task-checkbox')
    for (var i = 0; i < numberOfTasks; i++) {
        let task = numberOfTasks.toBeChecked[i]
        task.style.display = "block"
    }
}
function displayUndoneTasks() {
    let numberOfTasks = toBeChecked.length
    let toBeChecked = document.getElementsByClassName('input-task-checkbox')
    for (var i = 0; i < numberOfTasks; i++) {
        let task = numberOfTasks.toBeChecked[i]
        if (!task.checked) {
            task.style.display = "block"
        }
    }
}
function submitInitialForm () {
    if(validate()){
        clearInvalid()
        document.getElementById('nameAndAdressForm').style.display = 'none'
        if(GenderMale.checked)    
            document.getElementById('maleHobbyAndDobForm').style.display = 'block'
        else
            document.getElementById('femaleHobbyAndDobForm').style.display = 'block'
    }
}