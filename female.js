var bDate = document.getElementById('myDate');
function validate() {
    let flag =true
    if(bDate.value == '') {
        bDate.style.border = "2px solid red"
        document.getElementById('bValid').innerText = '*this field is madatory'
        flag = false
    }
    return flag
}

function condition() {
    var str = bDate.value.split("-")
    var a = str[0]
    var myid = document.getElementById('hobbies').selectedIndex 
    if('2019'- a > 18 &&  myid == '1'){
        alert('Can marry then!!')
    }
    else if('2019'- a <= 19 &&  myid == '0,1,2,3'){
        alert('Still be a girl!!')
    }
}