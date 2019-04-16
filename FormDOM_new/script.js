var Name = document.getElementById("name-input")
var Address = document.getElementById('address-input')
var GenderMale = document.getElementById('gender-male')
var GenderFemale = document.getElementById('gender-female')

function validate() {
    let flag = true
    if(Name.value == ""){
        Name.style.border = "2px solid red"
        document.getElementById('nameValid').innerText = '* This field is mandatory'
        flag = false
    }
    if(Address.value == ""){
        Address.style.border = "2px solid red"
        document.getElementById('addressValid').innerText = '* This field is mandatory'
        flag = false
    }
    if(GenderMale.checked == false && GenderFemale.checked == false){
        document.getElementById('genderValid').innerText = '* This field is mandatory'
        flag = false
    }

    return flag
}

function submitForm () {
    if(validate()){
        if (GenderMale.checked) window.location.href = 'male.html'
        if (GenderFemale.checked) window.location.href = 'female.html'
    }
}

function resetName () {
    document.getElementById('nameValid').innerText = ""
}

function resetGender () {
    document.getElementById('genderValid').innerText = ""
}

function resetAddress () {
    document.getElementById('addressValid').innerText = ""
}

