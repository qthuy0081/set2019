function checkInfo() {
    let birthday = document.getElementById('birthday-input')
    
    if (birthday.value == "") {
        document.getElementById('valid-birthday').innerText = "* This field is mandatory"
        return false
    }

    return true
}

function getDateToDay () {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    
    return today
}

function reset () {
    document.getElementById('valid-birthday').innerText = ""
}
function isAdult () {
    let birthYear = document.getElementById('birthday-input').value
    birthYear = parseInt( birthYear.substr(0,4))
    let birthMonth = document.getElementById('birthday-input').value
    birthMonth = parseInt( birthMonth.substr(5, 7))
    let birthDay = document.getElementById('birthday-input').value
    birthDay = parseInt( birthDay.substr(8, 10))
    
    let toDay = getDateToDay ()
    let currentYear = parseInt( toDay.substr(0, 4))
    let currentMonth = parseInt ( toDay.substr(5, 7))
    let currentDay = parseInt( toDay.substr(8, 10))

    if (currentYear - birthYear > 18) return true

    if (currentYear - birthYear == 18)  {
        if (birthMonth == currentMonth) {
            if (birthDay <= currentDay) return true
        }
        else {
            if (birthMonth < currentMonth) return true
        }
    }    
    
    return false
}
function submitPrivateInfo () {
    
    if (checkInfo () != true) return

    var boy = !isAdult()
    var hobby = document.getElementById('hobby-input').value

    if (boy == false && hobby == 'sport') {
        alert('Can be in jail')
    }
    else {
        alert('Still be a boy')
    }
}