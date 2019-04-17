// Female Form
var bDate = document.getElementById('myDate');


function validateFemaleForm() {
    let flag =true
    if(bDate.value == '') {
        bDate.style.border = "2px solid red"
        document.getElementById('bValid').innerText = '*this field is madatory'
        flag = false
    }
    return flag
}

function checkAge() {
    let currentYear = new Date().getFullYear()
    let dateOfBirth = bDate.value.split('-')
    let yearOfBirth = dateOfBirth[0]
    let hobbyId = document.getElementById('hobbies').selectedIndex

    if(currentYear - parseInt(yearOfBirth) > 18 && hobbyId == 1) {
        alert('Can marry then !!')
    }else{
        alert('Still be a girl !!')
    }
}

function submitFemaleForm () {
    if(validateFemaleForm()){
        checkAge()
    }
}

// Initial Form
var Address = document.getElementById('address-input')
var GenderMale = document.getElementById('genderMale')
var GenderFemale = document.getElementById('genderFemale')
var Name = document.getElementById("name-input")

function validate() {
    let flag = true

    if(Name.value == ""){
        Name.style.border = "2px solid red"
        document.getElementById('nameValid').innerText = '*this field is mandatory'
        flag = false
    }

    if(Address.value == ""){
        Address.style.border = "2px solid red"
        document.getElementById('addressValid').innerText = '*this field is mandatory'
        flag = false
    }

    if(GenderMale.checked == GenderFemale.checked){
        document.getElementById('genderValid').innerText = '*this field is mandatory'
        flag = false
    }

    return flag
}

function clearInvalid() {
    Name.style.border = "1px solid rgba(128, 128, 128, 0.486)"
    Address.style.border = "1px solid rgba(128, 128, 128, 0.486)"

    document.getElementById("nameValid").innerText = ""
    document.getElementById("addressValid").innerText = ""
    document.getElementById("genderValid").innerText = ""
}

function submitInitialForm () {
    if(validate()){
        clearInvalid()
        document.getElementById('nameAndAdressForm').style.display = 'none'
        if(GenderMale.checked)    
            document.getElementById('maleHobbyAndDobForm').style.display = 'block'
        else
            document.getElementById('femaleHobbyAndDobForm').style.display = 'block'
    }
}

function back () {
    document.getElementById('nameAndAdressForm').style.display = 'block'
    if(GenderMale.checked)    
        document.getElementById('maleHobbyAndDobForm').style.display = 'none'
    else
        document.getElementById('femaleHobbyAndDobForm').style.display = 'none'
}

//Male Form

function checkInfo() {
    let birthday = document.getElementById('birthday-input')
    
    if (birthday.value == "") {
        document.getElementById('valid-birthday').innerText = "*this field is mandatory"
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

function submitPrivateInfo () {
    let birthYear = document.getElementById('birthday-input').value
    birthYear = parseInt( birthYear.substr(0,4))
    let birthMonth = document.getElementById('birthday-input').value
    birthMonth = parseInt( birthMonth.substr(5, 7))
    let birthDay = document.getElementById('birthday-input').value
    birthDay = parseInt( birthDay.substr(8, 10))
    
    let toDay = getDateToDay ()
    let currentYear = parseInt( toDay.substr(0, 4))
    let agePoint = currentYear - 18
    let currentMonth = parseInt ( toDay.substr(5, 7))
    let currentDay = parseInt( toDay.substr(8, 10))
    
    if (checkInfo () != true) {
        return
    }

    if (birthYear < agePoint) {
        alert ('Can be in jail')
    } else {
        if (birthYear == agePoint) {
            if (birthMonth <= currentMonth) {
                if (birthDay <= currentDay) {
                    alert ('Can be in jail')
                } else {
                    alert ('still be a boy')
                }
                return
            } else {
                alert ('still be a boy')
            }
        } else {
            if (birthYear < agePoint) {
                alert ('Can be in jail')
            } else {
                alert ('still be a boy')
            }
        }
    }
}