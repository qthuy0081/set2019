var Bdate = document.getElementById('myDate');
var Hobby = document.getElementById('myHobbies');
function validate() {
    if(Bdate.value == '') {
        document.getElementById('birthValid').style.display='block'
        Bdate.style.border = "2px solid red"
        document.getElementById('Bvalid').innerText = '*this field is madatory'
    }
}

function condition() {
    var str = Bdate.value.split("-")
    var a = str[0]
    var myid = document.getElementById('myHobbies').selectedIndex 
    if('2019'- a > 18 &&  myid == '1'){
        document.getElementById('birthValid').style.display='none'
        Bdate.style.border = '1px solid gray'
        alert('Can be in Jail !!')
    }
    else if('2019'- a <= 18 &&  myid == '1'|| '2019'- a <= 18 &&  myid == '2' || '2019'- a <= 18 &&  myid == '3' || '2019'- a <= 18 &&  myid == '4'
    ||'2019'- a > 18 &&  myid == '2'|| '2019'- a > 18 &&  myid == '3' || '2019'- a > 18 &&  myid == '4'){
            document.getElementById('birthValid').style.display='none'
            Bdate.style.border = '1px solid gray'
        alert('Still be a boy !!')
    }
    return false;
}
function Back() {
    window.history.back()
}