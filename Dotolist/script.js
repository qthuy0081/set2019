//add
function add() {
    var check = document.getElementById('header-taskname')
    if(check.value.trim() != '') {
        var taskList = document.getElementById('task-list')
        var add = document.getElementById('header-taskname')
        var item = document.createElement('li')
        item.innerHTML += '<label><input type="checkbox" onclick="disabledButton(event)"/>'+add.value.trim()+'</label>'
        item.innerHTML += '<button class="delete-button" onclick="deleteItem(event)">Delete</button>'
        item.innerHTML += '<button class="edit-button" onclick="editTaskName(event)">Edit</button>'
        taskList.append(item)
        document.getElementById('header-taskname').value = ''
    }
} 

function validate() {
    var checkValidate = document.getElementById('header-taskname')
    if(checkValidate.value.trim() == '') {
        document.getElementById('valid').style.display = 'block'
        document.getElementById('valid').innerText = '*this field is madatory'
    }
}

function deleteAttention() {
    var checkBorder = document.getElementById('header-taskname')
    if(document.getElementById('valid').style.display=='block') {
        document.getElementById('valid').style.display='none'
        checkBorder.style.border = "default"
    }
}

function deleteItem(event) {
    if(document.getElementById('valid').style.display == 'block'|| document.getElementById('valid-edit').style.display == 'block') {
        document.getElementById('valid').style.display = 'none'
        document.getElementById('valid-edit').style.display = 'none'
    }
    var item=event.currentTarget.parentElement
    var a=item.childNodes[0]
    var b=a.childNodes[0]
    if(b.checked == true) {
       item.innerHTML = item.innerHTML.replace('<label><input type="checkbox onclick="disabledButton(event)">','<label><input type="checkbox" checked="true">')
    }
    item.innerHTML = item.innerHTML.replace('<button class="edit-button" onclick="editTaskName(event)">Edit</button>','')
    item.innerHTML = item.innerHTML.replace('<button class="delete-button" onclick="deleteItem(event)">Delete</button>','')
    item.innerHTML+='<button class="no-button" onclick="deleteFake(event)">No</button>'
    item.innerHTML+='<button class="yes-button" onclick="deleteForever(event)">Yes</button>'
}

function deleteForever(event) {
    var item=event.currentTarget.parentElement
    item.innerHTML += 'check'
    var checkDisplay=document.getElementById('header')
    if(checkDisplay.style.display == 'none') {
        if(item.innerHTML == document.getElementById('task-list').childNodes[document.getElementById('save').value].innerHTML) {
            checkDisplay.style.display = 'block'
            document.getElementById('save-edit').style.display = 'none'
            document.getElementById('header-taskname-edit').value=''
        }
        else {
            item.innerHTML = item.innerHTML.replace('check','')
            item.innerHTML += 'delete'
            var taskList = document.getElementById('task-list')
            for ( var i = 0 ; i<taskList.childNodes.length;i++) {
                if(item.innerHTML == taskList.childNodes[i].innerHTML) {
                    if(i < document.getElementById('save').value) {
                        document.getElementById('save').value--
                        break
                    }
                }
            }
        }
    }
    item.remove()
    var count = 0
}

function deleteFake(event) {
    var item = event.currentTarget.parentElement
    event.currentTarget.remove()
    item.innerHTML = item.innerHTML.replace('<button class="yes-button" onclick="deleteForever(event)">Yes</button>','')
    item.innerHTML += '<button class="delete-button" onclick="deleteItem(event)">Delete</button>'
    item.innerHTML += '<button class="edit-button" onclick="editTaskName(event)">Edit</button>'
}

//save
function saveTask() {
    var checkValidate = document.getElementById('header-taskname-edit')
    if(checkValidate.value.trim() != '') {
        var saveIndex=document.getElementById('save')
        var taskList=document.getElementById('task-list')
        var liSave=taskList.childNodes[saveIndex.value]
        var a=liSave.childNodes[0]
        var b=a.childNodes[0]
        if(b.checked==true) {
            liSave.innerHTML  = '<label><input type="checkbox" onclick="disabledButton(event)" checked="true">'+checkValidate.value.trim()+'</label>' 
        }
        else {
            liSave.innerHTML  = '<label><input type="checkbox" onclick="disabledButton(event)">'+checkValidate.value.trim()+'</label>'     
        }
        liSave.innerHTML += '<button class="delete-button" onclick="deleteItem(event)">Delete</button>'
        liSave.innerHTML += '<button class="edit-button" onclick="editTaskName(event)">Edit</button>'
        document.getElementById('header').style.display = 'block'
        document.getElementById('save-edit').style.display = 'none'
        document.getElementById('valid-edit').style.display = 'none'
    }
}

function validateEdit() {
    var checkValidate = document.getElementById('header-taskname-edit')
    if(checkValidate.value.trim() == '') {
        document.getElementById('valid-edit').style.display='block'
        document.getElementById('valid-edit').innerText = '*this field is madatory'
    }
}

function deleteAttentionEdit() {
    var checkBorder = document.getElementById('header-taskname-edit')
    if(document.getElementById('valid-edit').style.display=='block') {
        document.getElementById('valid-edit').style.display='none'
        checkBorder.style.border = "default"
    }
}

function editTaskName(event) {
    if(document.getElementById('header').style.display == 'none') {
        alert('Have to save before edit next')
    }

    else {
        var item = event.currentTarget.parentElement
        var item1 = event.currentTarget.parentElement.innerHTML
        item1 = item1.replace('<label><input type="checkbox" onclick="disabledButton(event)" checked="true">','')
        item1 = item1.replace('<label><input type="checkbox" onclick="disabledButton(event)">','')
        item1 = item1.replace('</label>','')
        item1 = item1.replace('<button class="yes-button" onclick="deleteForever(event)">Yes</button>','')
        item1 = item1.replace('<button class="no-button" onclick="deleteFake(event)">No</button>','')
        item1 = item1.replace('<button class="edit-button" onclick="editTaskName(event)">Edit</button>','')
        item1 = item1.replace('<button class="delete-button" onclick="deleteItem(event)">Delete</button>','')
        var transit = document.getElementById('header-taskname-edit')
        transit.value = item1
        var item2 = event.currentTarget
        item2.innerHTML +='hello'
        document.getElementById('header').style.display = 'none'
        document.getElementById('save-edit').style.display = 'block'
        var taskList = document.getElementById('task-list')
        var i = 0
        for(i; i<taskList.childNodes.length; i++) {
            if(taskList.childNodes[i].innerHTML == item.innerHTML) {
                break;
            }
        }
        item2.innerHTML = item2.innerHTML.replace('hello','')
        var saveIndex = document.getElementById('save')
        saveIndex.value=i
    }
}

function disabledButton(event) {
    var check = event.currentTarget.parentElement
    var checkParent = check.parentElement
    if (checkParent.innerHTML.includes('checked="true"')==true) {
       checkParent.innerHTML = checkParent.innerHTML.replace('checked="true"','')
       checkParent.innerHTML += '<button class="delete-button" onclick="deleteItem(event)">Delete</button>'
       checkParent.innerHTML += '<button class="edit-button" onclick="editTaskName(event)">Edit</button>'
       checkParent.innerHTML = checkParent.innerHTML.replace('<strike>','') 
       checkParent.innerHTML = checkParent.innerHTML.replace('</strike>','') 
       var taskList = document.getElementById('task-list')
        var item = document.createElement('li')
        item.innerHTML = checkParent.innerHTML
        taskList.append(item)
        checkParent.remove()

    }
    else {
        var onsave = document.getElementById('header')
        if(onsave.style.display!='none') {
        checkParent.innerHTML = checkParent.innerHTML.replace('(event)"','(event)" checked="true"')
        checkParent.innerHTML = checkParent.innerHTML.replace('<button class="yes-button" onclick="deleteForever(event)">Yes</button>','')
        checkParent.innerHTML = checkParent.innerHTML.replace('<button class="no-button" onclick="deleteFake(event)">No</button>','')
        checkParent.innerHTML = checkParent.innerHTML.replace('<button class="edit-button" onclick="editTaskName(event)">Edit</button>','')
        checkParent.innerHTML = checkParent.innerHTML.replace('<button class="delete-button" onclick="deleteItem(event)">Delete</button>','')
        var checkInner = checkParent.innerText
        checkParent.innerHTML = checkParent.innerHTML.replace(checkInner,'<strike>'+checkInner+'</strike>')
        var doneList = document.getElementById('done-list')
        var item = document.createElement('li')
        item.innerHTML = checkParent.innerHTML
        doneList.append(item)
        checkParent.remove()
        }
        else{
            var checkValidate = document.getElementById('header-taskname-edit')
            document.getElementById('valid-edit').style.display='block'
            document.getElementById('valid-edit').innerText = 'Saving before changing'
            check.childNodes[0].checked = false
        }
    }
}

function dropDown() {
    document.getElementById("dropdown-list").classList.toggle("show");
}

window.onclick = function(event) {
  if(!event.target.matches('.drop-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for(i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if(openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function allShow() {
    var listTask = document.getElementById('task-list')
    var doneList = document.getElementById('done-list')
    listTask.style.display = 'block'
    doneList.style.display = 'block'
}

function doneShow() {
    var listTask = document.getElementById('task-list')
    var doneList = document.getElementById('done-list')
    listTask.style.display = 'none'
    doneList.style.display = 'block'
}

function undoneShow() {
    var listTask = document.getElementById('task-list')
    var doneList = document.getElementById('done-list')
    listTask.style.display = 'block'
    doneList.style.display = 'none'
}