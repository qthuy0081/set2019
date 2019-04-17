var Bdate = document.getElementById('myDate');
var Hobby = document.getElementById('myHobbies');

function validate() {
    if(Bdate.value == '') {
        document.getElementById('birthValid').style.display = "block"
        Bdate.style.border = "2px solid red"
        document.getElementById('birthValid').innerText = '*this field is madatory'
    }
}

function condition() {
    var str = Bdate.value.split("-")
    var a = str[0]
    var myid = document.getElementById('myHobbies').selectedIndex 
    if('2019'- a > 18 &&  myid == '1'){
        document.getElementById('birthValid').style.display = "none"
        Bdate.style.border = "1px solid gray"
        alert('Alert can marry!!')
    }
    else if('2019'- a <= 18 &&  myid == '1'|| '2019'- a <= 18 &&  myid == '2' || '2019'- a <= 18 &&  myid == '3' || '2019'- a <= 18 &&  myid == '4'
            ||'2019'- a > 18 &&  myid == '2'|| '2019'- a > 18 &&  myid == '3' || '2019'- a > 18 &&  myid == '4' ){
        document.getElementById('birthValid').style.display = "none"
        Bdate.style.border = "1px solid gray"
        alert('Still be a girl!!')
    }
    return false;
}

function Back() {
    window.history.back()
}

//set max DoB
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("myDate").setAttribute("max", today);