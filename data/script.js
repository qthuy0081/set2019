var srcMale = '../male/index.html'
var srcFemale = '../female/index.html'

function transit() {
    var gender = document.getElementsByName("gender");
    if (gender[0].checked) {
        window.open(srcMale, '_self')
    }
    else {
        if (gender[1].checked) {
            window.open(srcFemale, '_self')
        }
    }
    return false
}