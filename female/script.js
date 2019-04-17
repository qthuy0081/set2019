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
    var age = getAge(Bdate.value)
    var myid = document.getElementById('myHobbies').selectedIndex 
    if( age > 18 &&  myid == '1'){
        document.getElementById('birthValid').style.display = "none"
        Bdate.style.border = "1px solid gray"
        alert('Alert can marry!!')
    }
    else if( age <= 18 &&  myid == '0'){
        document.getElementById('birthValid').style.display = "none"
        Bdate.style.border = "1px solid gray"
        alert('Still be a girl!!')
        alert(today)
    }
    return false;
}

function Back() {
    window.history.back()
}

function getAge(dateString) {

    var dates = dateString.split("-");
    var d = new Date();

    var useryear = dates[0];
    var usermonth = dates[1];
    var userday = dates[2];

    var curday = d.getDate();
    var curmonth = d.getMonth()+1;
    var curyear = d.getFullYear();

    var age = curyear - useryear;

    if((curmonth < usermonth) || ( (curmonth == usermonth) && curday < userday   )){
        age--;
    }
    return age;
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