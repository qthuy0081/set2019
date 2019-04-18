function newTask(text) {
    var li = document.createElement('li');
    var chkbox = document.createElement('input');
    var span = document.createElement('span');
  
    chkbox.type = 'checkbox';
    chkbox.value=1;
    span.className='strike'
    span.appendChild(document.createTextNode(text));
    li.appendChild(chkbox);
    li.appendChild(span);
  
    return li;
  }
  
  function addTask() {
    var taskInput = document.getElementById('input-task-name');
    var taskTxt = taskInput.value.trim();
    var taskList = document.getElementById('taskList');
  
    if (taskTxt === '') { return; }
    taskList.appendChild(newTask(taskTxt));
    taskInput.value = '';
  }