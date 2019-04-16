function transit() {
    
//    window.open("test.html", "_self");
    var gender = document.getElementsByName("gender");
    if (gender[0].checked) {
        window.open('../male/index.html', '_self')
    }
    else 
        if (gender[1].checked) {
            window.open('../female/index.html', '_self')
        }
    return false
}