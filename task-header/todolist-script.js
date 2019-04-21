var i = 0
let targetToEdit

function createTask(text) {
    i = i + 1

    var taskItem = document.createElement('div')
    taskItem.setAttribute("class", "task-item")
    
    var label = document.createElement('label')
    label.setAttribute('onclick','changeTaskState()')
    label.innerHTML += '<input type="checkbox" class="input-task-checkbox">'
    var id = 'task' + i
    label.innerHTML += '<div class="title-task-name" id=' + id +'>' +text+'</div>'

    taskItem.append(label)

    var edit = document.createElement('button')
    edit.setAttribute('id', 'edit-task-button')
    edit.setAttribute('onclick', 'editButtonClick()')
    edit.innerText = "EDIT"
    taskItem.append(edit)

    var del = document.createElement('button')
    del.setAttribute('id', 'del-task-button')
    del.setAttribute('onclick','deleteButtonClick ()' )
    del.innerText = "DELETE"
    taskItem.append(del)
    
    return taskItem
}

function changeTaskState() {
    let containerElement = event.currentTarget.parentElement
    let toBeLined = containerElement.children[0].children[1]
    let aCheckbox = containerElement.children[0].children[0]
    // let toBeLined = toBeLined.children[1]

    if (aCheckbox.checked) {
      toBeLined.style.textDecoration = 'line-through'
      let editButton = event.currentTarget.parentElement.children[1]
      editButton.style.display = 'none'
      let delButton = event.currentTarget.parentElement.children[2]
      delButton.style.display = 'none'
    } else {
      toBeLined.style.textDecoration = 'none'
      let editButton = event.currentTarget.parentElement.children[1]
      editButton.style.display = 'inline-block'
      let delButton = event.currentTarget.parentElement.children[2]
      delButton.style.display = 'inline-block'
    }
}

function modifyTask() {
    if (validate() == true) {
      addTask()  
      changeColor()
    } else {
      let annoucement = document.getElementById('validate-task-name')
      annoucement.innerText = '*This field is mandatory'
      annoucement.style.display = 'block'
      annoucement.style.color = 'red'
    }
}

function clearAllInforms() {
    let validateField = document.getElementById('validate-task-name')
    validateField.innerText = ""
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
    var item = event.currentTarget.parentElement
    targetToEdit = item.children[0].children[1]
    var inputTaskName = document.getElementById('input-task-name')
    inputTaskName.value = item.children[0].children[1].innerText

    var editButton = document.getElementById('edit-name-button')
    editButton.style.display = 'inline-block'

    var addButton = document.getElementById('add-task-button')
    addButton.style.display = 'none'
}
function changeName() {
  let taskName = document.getElementById('input-task-name')

  targetToEdit.innerText = taskName.value
  let editButtonHeader = event.currentTarget
  editButtonHeader.style.display = 'none'
  taskName.value = ''
  let addButton = document.getElementById('add-task-button')
  addButton.style.display = 'inline-block'
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
          task.style.backgroundColor = '#FFFFFF'
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
    editButton.style.display = 'inline-block'
    
    let deleteButton = containerElement.children[2]
    deleteButton.style.display = 'inline-block'

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
function displayinStatistic(){

}