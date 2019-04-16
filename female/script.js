var Bdate = document.getElementById('myDate');
function validate() {
    let flag =true
    if(Bdate.value == '') {
        Bdate.style.border = "2px solid red"
        document.getElementById('Bvalid').innerText = '*this field is madatory'
        flag = false
    }
    return flag
}

function condition() {
    var str = Bdate.value.split("-")
    var a = str[0]
    var myid = document.getElementById('myHobbies').selectedIndex 
    if('2019'- a > 18 &&  myid == '1'){
        alert('Alert can marry!!')
    }
    else if('2019'- a <= 18 &&  myid == '0,4,2,3'){
        alert('Still be a girl!!')
    }
}