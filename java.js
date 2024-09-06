let txtPassword = document.getElementById("password")
var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
var numbers = "0123456789"
let passwordCheck = false

function testWord(){
    
    if(txtPassword != null && txtPassword.length >= 8){
        if(specialChars.test(txtPassword)){
            if(numbers.test(txtPassword)){
                passwordCheck = true
            }
        }
    }
    if(passwordCheck = true){
        console.log("You got it!")
        document.getElementById("password").style.borderColor = '1px solid green'
    }
    else{
        console.log("Absolutely not")
        document.getElementById("password").style.borderColor = '1px solid red'
    }
}