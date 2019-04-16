var Bdate = document.getElementById('myDate');
var Hobby = document.getElementById('myHobbies');
function validate() {
    if(Bdate.value == '') {
        Bdate.style.border = "2px solid red"
        document.getElementById('Bvalid').innerText = '*this field is madatory'
    }
    if( Hobby.selectedIndex == '0') {
        Hobby.style.border = "2px solid red"
        document.getElementById('Hvalid').innerText = '*this field is madatory'
    }
}

function condition() {
    var str = Bdate.value.split("-")
    var a = str[0]
    var myid = document.getElementById('myHobbies').selectedIndex 
    if('2019'- a > 18 &&  myid == '1'){
        alert('Alert can marry!!')
    }
    else if('2019'- a <= 18 &&  myid == '1'|| '2019'- a <= 18 &&  myid == '2' || '2019'- a <= 18 &&  myid == '3' || '2019'- a <= 18 &&  myid == '4' 
            || '2019'- a > 18 &&  myid == '2' || '2019'- a > 18 &&  myid == '3' || '2019'- a > 18 &&  myid == '4' ){
        alert('Still be a girl!!')
    }
    return false;
}
function Back() {
    window.history.back()
}