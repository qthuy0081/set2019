function createTask(text) {
    var taskItem = document.createElement('div')
    taskItem.setAttribute("class", "task-item")
    
    var label = document.createElement('label')
    label.setAttribute('onclick','changeTaskState()')
    label.innerHTML += '<input type="checkbox" class="input-task-checkbox">'
    label.innerHTML += '<div class="title-task-name">'+text+'</div>'

    taskItem.append(label)

    var edit = document.createElement('button')
    edit.setAttribute('id', 'edit-task-button')
    edit.setAttribute('onclick', 'editButtonClick()')
    edit.innerText = "edit"
    taskItem.append(edit)

    var del = document.createElement('button')
    del.setAttribute('id', 'del-task-button')
    del.setAttribute('onclick','deleteButtonClick ()' )
    del.innerText = "del"
    taskItem.append(del)

    // var yes = document.createElement('button')
    // yes.setAttribute('id', 'yes-button')
    // taskItem.append(yes)

    // var no = document.createElement('button')
    // no.setAttribute('id', 'no-button')
    // taskItem.append(no)
    
    return taskItem
  }
  
  function modifyTask() {
    if (validate() == true) {
      addTask()  
      changeColor()
    } else {
      let annoucement = document.getElementById('validate-task-name')
      annoucement.innerText = '*This field is mandatory'
      annoucement.style.display = 'block'
      annoucement.style.border = '1px solid red'
      annoucement.style.color = 'red'
    }
  }
  function clearAllInforms() {
    let validateField = document.getElementById('validate-task-name')
    validateField.innerText = ""
    validate.style.block = 'none'
    validateField.style.border = '1px solid'
    validateField.style.color = 'black'
  }
  function addTask() {
    var taskInput = document.getElementById('input-task-name')
    var taskTxt = taskInput.value.trim()
    var taskList = document.getElementById('task-list')
  
    if (taskTxt === '') { 
      return 
    }
    taskList.appendChild(createTask(taskTxt))
    taskInput.value = ''
  }
  function validate() {
    let inputTaskName = document.getElementById('input-task-name')
    if (inputTaskName.value == '') {
      return false
    }
    return true
  }
  function editButtonClick () {
    var titleTaskName = document.getElementsByClassName('title-task-name')
    document.getElementById('input-task-name').value = titleTaskName.innerHTML
    alert(titleTaskName.innerHTML)

}

function deleteButtonClick () {
    let item = event.currentTarget.parentElement
    var editButton = item.children[1]
    editButton.style.display = 'none'


    let deleteButton = item.children[2]
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
        } else {
          task.style.backgroundColor = 'white'
        }
    }

}
function selectYes () {
    let item = event.currentTarget.parentElement
    item.remove()
    changeColor()
}

function selectNo () {
    let containerElement = event.currentTarget.parentElement

    let editButton = containerElement.children[1]
    editButton.style.display = 'inline'
    
    let deleteButton = containerElement.children[2]
    deleteButton.style.display = 'inline'

    let yesButton = containerElement.children[3]
    yesButton.remove()

    let noButton = containerElement.children[3]
    noButton.remove()
}

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
  changeColor()
}
function displayTaskDone() {
  
  let toBeChecked = document.getElementsByClassName('input-task-checkbox')
  let numberOfTasks = toBeChecked.length
  
  for (var i = 0; i < numberOfTasks; i++) {
      let task = toBeChecked[i]
      if (!task.checked) {
          let elementToDisplay = task.parentElement.parentElement
          elementToDisplay.style.display = "none"
      } else {
        let elementToDisplay = task.parentElement.parentElement
        elementToDisplay.style.display = "block"
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
      } else {
        let elementToDisplay = task.parentElement.parentElement
          elementToDisplay.style.display = "block"
      }
  }
}