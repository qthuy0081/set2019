var bDate = document.getElementById('myDate');
var hobby = document.getElementById('myHobbies');
function validate() {
    if(bDate.value == '') {
        document.getElementById('birthValid').style.display='block'
        bDate.style.border = "2px solid red"
        document.getElementById('birthValid').innerText = '*this field is madatory'
    }
}

function condition() {
    var age = getAge(bDate.value)
    if (age < 0) return false;
    if(bDate.value!= '') {
        
        var myid = document.getElementById('myHobbies').selectedIndex 
        if( age > 18 &&  myid == '1') {
            document.getElementById('birthValid').style.display='none'
            bDate.style.border = '1px solid gray'
            alert('Can be in Jail !!')
        }
        else if( age <= 18 || myid == '0') {
                document.getElementById('birthValid').style.display='none'
                bDate.style.border = '1px solid gray'
            alert('Still be a boy !!')
        }
    }
    return false;
}

function Back() {
    window.history.back()
}

function getAge(dateString) {

    var dates = dateString.split("-");
    var curentDate = new Date();

    var userYear = dates[0];
    var userMonth = dates[1];
    var userDay = dates[2];

    var curentDay = curentDate.getDate();
    var curentMonth = curentDate.getMonth()+1;
    var curentYear = curentDate.getFullYear();

    var age = curentYear - userYear;

    if((curentMonth < userMonth) || ( (curentMonth == userMonth) && curentDay < userDay)){
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