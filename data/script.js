var srcMale = '../male/index.html'
var srcFemale = '../female/index.html'

function transit() {
    var gender = document.getElementsByName("gender");
    if (gender[0].checked) {
        window.open(srcMale, '_self')
    }
<<<<<<< HEAD
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
=======
    else 
        if (gender[1].checked) {
            window.open(srcFemale, '_self')
        }
    return false
}
function changeForm()
{
    window.open('../female/index.html','_self')
>>>>>>> DOM_Homework_Team1
    return false;
}