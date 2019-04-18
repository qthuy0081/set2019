function createTask(text) {
    var taskItem = document.createElement('div')
    taskItem.setAttribute("class", "task-item")
    
    var label = document.createElement('label')

    label.innerHTML += '<input type="chec">'
  
    chkbox.type = 'checkbox'
    chkbox.value=1
    span.className='strike'
    span.appendChild(document.createTextNode(text))
    li.appendChild(chkbox)
    li.appendChild(span)
  
    return li
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