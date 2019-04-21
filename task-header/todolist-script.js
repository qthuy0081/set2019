var i = 0
var targetToEdit

function createTask (taskName) {
    i = i + 1

    var taskItem = document.createElement('div')
    taskItem.setAttribute("class", "task-item")
    
    var label = document.createElement('label')
    label.setAttribute('onclick','changeTaskState()')
    label.innerHTML += '<input type="checkbox" class="input-task-checkbox">'
    var id = 'task' + i
    label.innerHTML += '<div class="title-task-name" id=' + id + '>' + taskName +'</div>'

    taskItem.append(label)

    var del = document.createElement('button')
    del.setAttribute('id', 'del-task-button')
    del.setAttribute('onclick', 'deleteButtonClick ()' )
    del.innerText = "DELETE"
    taskItem.append(del)

    var edit = document.createElement('button')
    edit.setAttribute('id', 'edit-task-button')
    edit.setAttribute('onclick', 'editButtonClick()')
    edit.innerText = "EDIT"
    taskItem.append(edit)

    return taskItem
}

function changeToEditButtonHeader () {
    var editButton = document.getElementById('edit-name-button')
    editButton.style.display = 'inline'

    var addButton = document.getElementById('add-task-button')
    addButton.style.display = 'none'
}

function changeToAddButtonHeader () {
    var editButton = document.getElementById('edit-name-button')
    editButton.style.display = 'none'

    var addButton = document.getElementById('add-task-button')
    addButton.style.display = 'inline'
}

function removeButtonByParent (item) {
    var editButton = item.children[2]
    editButton.style.display = 'none'

    var delButton = item.children[1]
    delButton.style.display = 'none'
}

function displayButtonByParent (item) {
    var editButton = item.children[2]
    editButton.style.display = 'inline'

    var delButton = item.children[1]
    delButton.style.display = 'inline'
}

function isEditingTask (doneTask) {
    if (doneTask === targetToEdit) {
      let inputTaskName = document.getElementById('input-task-name')
      inputTaskName.value = ''
      changeToAddButtonHeader()
    }
}

function changeTaskState () {
    let parent = event.currentTarget.parentElement
    let toBeLined = parent.children[0].children[1]
    let checkbox = parent.children[0].children[0]

    if (checkbox.checked) {
      toBeLined.style.textDecoration = 'line-through'
      isEditingTask(toBeLined)
      removeButtonByParent(parent)

    } else {
      toBeLined.style.textDecoration = 'none'
      displayButtonByParent(parent)
    }
}

function modifyTask () {
    if (validate()) {
      addTask()  
      changeColor()
    }
}

function clearAllInforms () {
    let validateField = document.getElementById('validate-task-name')
    validateField.innerText = ""
}

function addTask () {
    var taskInput = document.getElementById('input-task-name')
    var taskName = taskInput.value.trim()
    var taskList = document.getElementById('task-list')

    taskList.appendChild(createTask(taskName))
    taskInput.value = ''
}

function validate () {
    let inputTaskName = document.getElementById('input-task-name')

    if (inputTaskName.value == '') {
      let annoucement = document.getElementById('validate-task-name')
      annoucement.innerText = '*This field is mandatory'
      annoucement.style.color = 'red'
      return false
    }

    return true
}

function editButtonClick () {
    var item = event.currentTarget.parentElement
    targetToEdit = item.children[0].children[1]
    var inputTaskName = document.getElementById('input-task-name')
    inputTaskName.value = item.children[0].children[1].innerText

    changeToEditButtonHeader()
}

function changeName () {
    if (!validate()) return false
    
    let taskName = document.getElementById('input-task-name')
    targetToEdit.innerText = taskName.value
    taskName.value = ''

    changeToAddButtonHeader()
}

function deleteButtonClick () {
    let item = event.currentTarget.parentElement
    removeButtonByParent(item)

    item.innerHTML += '<button id="no-button" onclick="selectNo()">NO</button>'
    item.innerHTML += '<button id="yes-button" onclick="selectYes()">YES</button>'    
}

function changeColor () {
    let tasksList = document.getElementsByClassName('task-item')
    let numberOfTasks = tasksList.length
    let displayNone = 0;

    for (var i = 0 ; i < numberOfTasks;i++) {
        let task = tasksList[i]

        if (task.style.display == 'none') {
          displayNone = displayNone + 1
        } else if ((i + displayNone) % 2 == 0) {
          task.style.backgroundColor = '#CCCCCC'
        } else {
          task.style.backgroundColor = '#FFFFFF'
        }
    }

    displayNone = 0
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

function selectOption() {

  let selector = document.getElementById('select-box')
  let selection = selector[selector.selectedIndex].value

  if (selection == 'all') {
      displayAllTasks()
  }
  
  if (selection == 'done') {
     displayTaskDone()     
  }
  
  if (selection == 'undone') {
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