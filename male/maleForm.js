var bDate = document.getElementById('DoB')      //DoB=DateOfBirth in HTML
var hobbySelector = document.getElementById('hobby').selectedIndex

function validated() {
    let flag = true
    if(bDate.value == '') {
        bDate.style.border = "2px solid red"
        document.getElementById('bValid').innerText = '* This field is madatory!'
        flag = false
    } else if(hobbySelector == '0' || hobbySelector == isNaN) {
        hobby.style.border = "2px solid red"
        document.getElementById('hobby').innerText = '* This field is mandatory!'
        flag = false
    }
    return flag
}

function submitAlert() {
    let dOB = bDate.value.split('-')    //dOB=dateOfBirth
    let dStr = dOB[0]                   
    //let hobbyID = document.getElementById('hobby').selectedIndex

    if(('2019' - dStr) >= 18) {
        alert('Can go to JAIL')
    }else if (('2019' - dStr) < 18) {
        alert('Still be a BOY')
    }
    return false;
}

function Back() {
    window.history.back()
}