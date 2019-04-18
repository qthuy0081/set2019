function deleteItem(event) {
    var item = event.currentTarget.parentElement
    var item1 = event.currentTarget.remove()
    item.innerHTML += '<button id="yes-button" onclick="deleteForever(event)">Yes</button>'
    item.innerHTML += '<button id="no-button" onclick="deleteFake(event)">No</button>'
}
function deleteForever(event) {
    var item2 = event.currentTarget.parentElement
    item2.remove()
}
function deleteFake(event) {
    var item = event.currentTarget.parentElement
    var item1 = event.currentTarget.remove()
    item.innerHTML = item.innerHTML.replace('<button id="yes-button" onclick="deleteForever(event)">Yes</button>','')
    item.innerHTML += '<button id="delete-button" onclick="deleteItem(event)">Delete</button>'
}
//dropDown fnc
function dropDown() {
    document.getElementById("dropDownList").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    
      }
    }
  }
}
//Dropdown fnc