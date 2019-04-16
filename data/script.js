function transit() {
    debugger
    var Gender = document.getElementsByName("gender").value;
    if (Gender == undefined) {
        alert("Anata no seibetsu?")
    }
    else {

    }
}
function changeForm()
{
    var check = document.getElementById('male').checked
    if( check == true) {
        window.open('../male/index.html','_self')
    }
    else {
        window.open('../female/index.html','_self')
    }
    return false;
}