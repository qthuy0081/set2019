var Name = document.getElementById("name-input")
var Address = document.getElementById('address-input')
var GenderMale = document.getElementById('gender-male')
var GenderFemale = document.getElementById('gender-female')

function validateSpecialCharacterName () { 
    var allowedCharacters = /^[A-Za-z ]+$/
    if (Name.value.match(allowedCharacters)){
        return true;
    }else{
        return false;
    }
}

function validateSpecialCharacterAddress () {
    var allowedCharacter = /^[ A-Za-z0-9,./-]+$/
    if (Address.value.match(allowedCharacter)){
        return true;
    }else{
        return false;
    }
}

function validate () {
    let flag = true
    if (Name.value.trim() == "") {
        Name.style.border = "2px solid red"
        document.getElementById('nameValid').innerText = '* This field is mandatory'
        flag = false
    }

    if (Address.value.trim() == "") {
        Address.style.border = "2px solid red"
        document.getElementById('addressValid').innerText = '* This field is mandatory'
        flag = false
    }

    if (GenderMale.checked == GenderFemale.checked) {
        document.getElementById('genderValid').innerText = '* This field is mandatory'
        flag = false
    }

    if (Name.value != "" && !validateSpecialCharacterName()) {
        Name.style.border = "2px solid red"
        document.getElementById('nameValid').innerText = '* Invalid input, only alphabet characters allowed'
        flag = false
    }

    if (Address.value != "" && !validateSpecialCharacterAddress()) {
        Address.style.border = "2px solid red"
        document.getElementById('addressValid').innerText = '* Invalid input, only alphabet characters and numbers allowed'
        flag = false
    }

    return flag
}

function submitForm () {
    if(validate()) {
        if (GenderMale.checked) window.location.href = 'male.html'
        if (GenderFemale.checked) window.location.href = 'female.html'
    }
}

function resetName () {
    document.getElementById('nameValid').innerText = ""
    Name.style.border = "1px solid rgba(128, 128, 128, 0.486)"
}

function resetAddress () {
    document.getElementById('addressValid').innerText = ""
    Address.style.border = "1px solid rgba(128, 128, 128, 0.486)"
}

function resetGender () {
    document.getElementById('genderValid').innerText = ""
}


