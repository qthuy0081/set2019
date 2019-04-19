function createTask(text) {
    var taskItem = document.createElement('div')
    taskItem.setAttribute("class", "task-item")
    
    var label = document.createElement('label')

    label.innerHTML += '<input type="checkbox" class="input-task-checkbox">'
    label.innerHTML += '<div class="title-task-name">'+text+'</div>'

    taskItem.append(label)

    var edit = document.createElement('button')
    edit.setAttribute('id', 'edit-task-button')
    taskItem.append(edit)

    var del = document.createElement('button')
    del.setAttribute('id', 'del-task-button')
    taskItem.append(del)

    var yes = document.createElement('button')
    yes.setAttribute('id', 'yes-button')
    taskItem.append(yes)

    var no = document.createElement('button')
    no.setAttribute('id', 'no-button')
    taskItem.append(no)
    
    return taskItem
  }
  function modifyTask() {
    if (validate() == true) {
      addTask()  
    } else {
      let annoucement = document.getElementById('validate-task-name')
      annoucement.innerText = '*This field is mandatory'
      annoucement.style.border = '1px solid red'
      annoucement.style.color = 'red'
    }
  }
  function clearAllInforms() {
    let validateField = document.getElementById('validate-task-name')
    validateField.innerText = ""
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