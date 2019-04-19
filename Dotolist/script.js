//add
function add() {
    var check = document.getElementById('header-taskname')
    if(check.value.trim() != '') {
        var taskList = document.getElementById('task-list')
        var add = document.getElementById('header-taskname')
        var item = document.createElement('li')
        item.innerHTML += '<label><input type="checkbox"/>'+add.value.trim()+'</label>'
        item.innerHTML += '<button id="edit-button" onclick="editTaskName(event)">Edit</button>'
        item.innerHTML += '<button id="delete-button" onclick="deleteItem(event)">Delete</button>'
        taskList.append(item)
        document.getElementById('header-taskname').value = ''
    }
} 

function validate() {
    var checkValidate = document.getElementById('header-taskname')
    if (checkValidate.value.trim() == '') {
        document.getElementById('valid').style.display = 'block'
        document.getElementById('valid').innerText = '*this field is madatory'
    }
}

function deleteAttention() {
    var checkBorder = document.getElementById('header-taskname')
    if( document.getElementById('valid').style.display=='block'){
        document.getElementById('valid').style.display='none'
        checkBorder.style.border = "default"
    }
}

function deleteItem(event) {
    if(document.getElementById('valid').style.display == 'block'||document.getElementById('valid-edit').style.display == 'block'){
        document.getElementById('valid').style.display = 'none'
        document.getElementById('valid-edit').style.display = 'none'
    }
    var item = event.currentTarget.parentElement
    var a=item.childNodes[0]
    var b=a.childNodes[0]
    if(b.checked==true){
       item.innerHTML = item.innerHTML.replace('<label><input type="checkbox">','<label><input type="checkbox" checked="true">')
    }
    item.innerHTML = item.innerHTML.replace('<button id="delete-button" onclick="deleteItem(event)">Delete</button>','')
    item.innerHTML+='<button id="yes-button" onclick="deleteForever(event)">Yes</button>'
    item.innerHTML+='<button id="no-button" onclick="deleteFake(event)">No</button>'
        
    
}

function deleteForever(event) {
    var item = event.currentTarget.parentElement
    item.innerHTML += 'check'
    var checkDisplay = document.getElementById('header')
    if( checkDisplay.style.display == 'none') {
        if(item.innerHTML == document.getElementById('task-list').childNodes[document.getElementById('save').value].innerHTML){
            checkDisplay.style.display = 'block'
            document.getElementById('save-edit').style.display = 'none'
            document.getElementById('header-taskname-edit').value=''
        }
        else {
            item.innerHTML = item.innerHTML.replace('check','')
            item.innerHTML += 'delete'
            var taskList = document.getElementById('task-list')
            for ( var i = 0 ; i<taskList.childNodes.length;i++) {
                if ( item.innerHTML == taskList.childNodes[i].innerHTML)
                {
                    if ( i < document.getElementById('save').value)
                    {
                        document.getElementById('save').value--
                        break
                    }
                }
            }
        }
    }
    item.remove()
}

function deleteFake(event) {
    var item = event.currentTarget.parentElement
    event.currentTarget.remove()
    item.innerHTML = item.innerHTML.replace('<button id="yes-button" onclick="deleteForever(event)">Yes</button>','')
    item.innerHTML += '<button id="delete-button" onclick="deleteItem(event)">Delete</button>'
}

//save
function saveTask() {
    var checkValidate = document.getElementById('header-taskname-edit')
    if (checkValidate.value.trim() != '') {
        var saveIndex = document.getElementById('save')
        var taskList = document.getElementById('task-list')
        var liSave = taskList.childNodes[saveIndex.value]
        var a=liSave.childNodes[0]
        var b=a.childNodes[0]
        if(b.checked==true)
        {
            liSave.innerHTML  = '<label><input type="checkbox" checked="true">'+checkValidate.value.trim()+'</label>' 
        }
        else
        {
            liSave.innerHTML  = '<label><input type="checkbox">'+checkValidate.value.trim()+'</label>'     
        }
        liSave.innerHTML += '<button id="edit-button" onclick="editTaskName(event)">Edit</button>'
        liSave.innerHTML += '<button id="delete-button" onclick="deleteItem(event)">Delete</button>'
        document.getElementById('header').style.display = 'block'
        document.getElementById('save-edit').style.display = 'none'
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
    if( document.getElementById('valid-edit').style.display=='block')
    {
        document.getElementById('valid-edit').style.display='none'
        checkBorder.style.border = "default"
    }
}

function editTaskName(event) {
    if(document.getElementById('header').style.display == 'none')
    {
        alert('Have to save before edit next')
    }

    else {
    var item = event.currentTarget.parentElement
    var item1 = event.currentTarget.parentElement.innerHTML
    item1 = item1.replace('<label><input type="checkbox" checked="true">','')
    item1 = item1.replace('<label><input type="checkbox">','')
    item1 = item1.replace('</label>','')
    item1 = item1.replace('<button id="yes-button" onclick="deleteForever(event)">Yes</button>','')
    item1 = item1.replace('<button id="no-button" onclick="deleteFake(event)">No</button>','')
    item1 = item1.replace('<button id="edit-button" onclick="editTaskName(event)">Edit</button>','')
    item1 = item1.replace('<button id="delete-button" onclick="deleteItem(event)">Delete</button>','')
    var transit = document.getElementById('header-taskname-edit')
    transit.value = item1
    var item2 = event.currentTarget
    item2.innerHTML +='hello'
    document.getElementById('header').style.display = 'none'
    document.getElementById('save-edit').style.display = 'block'
    var taskList = document.getElementById('task-list')
    var i = 0
    for( i; i< taskList.childNodes.length;i++){
        if(taskList.childNodes[i].innerHTML == item.innerHTML)
        {
            break;
        }
    }
    item2.innerHTML = item2.innerHTML.replace('hello','')
    var saveIndex = document.getElementById('save')
    saveIndex.value=i
    }
}
