var srcMale = "../male/index.html"
var srcFemale = "../female/index.html"

function transit() {
    debugger
//    window.open("test.html", "_self");
    var gender = document.getElementsByName("gender");
    if (gender[0].checked) {
        window.open("../male/index.html")
    }
    else 
        if (gender[1].checked) {
            window.open("../female/index.html")
        }
}