// var distance = 0;
// function (params) {
    
// }

// function checkPasswords() {
//     if ((password.value == passwordAgain.value) && (6 < password.value.lenght) && (passwordAgain.value.lenght <=10)) {
//         alert("password are correct , wellcome ")
//         return true;
//     }
//     alert("passwords are not the same , try again")
//     return false;
// }

// function birth_day() {
// var birth = document.getElementById("birth_day")
    
// }
var regex =/^[a-zA-Z]+$/;

function checkPasswords() {
    if(firstName() && birth_day() && _email() && phoneNum() && password() ){
        return true;
    }
    return false;   
}
    

function firstName() {
     regex = /^[a-zA-Z]+$/;
    if (regex.test(F_name.value) && regex.test(last_name.value)) {
       alert('yes');
       return true;
    } 
       alert('no');
       return false;
}
function birth_day() {
 var user_birth = new Date().getFullYear() - 
 document.getElementById("birth_day").value.slice(0,4);
   if (user_birth < 18) {
       alert('yes')
       return true;
   }
   alert('no');
   return false;
}
function _email() {
    var regex_email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (regex_email.test(mail_.value)) {
        alert('yes');
        return true;
    }
    alert('no')
    return false;
    
}
function phoneNum() {
    var userPhone = /^[050]\d+$/;
    if (userPhone.test(telephone.value)) {
        alert('yes');
        return true;
    }
    alert('no');
    return false;
}

function password() {
    var userPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.)/;
    if (userPass.test(userPassword.value) && userPass.test(userPassword.value == userPass.confirm_user.value)) {
        alert('yes');
        return true;
    }
     password_labal.innerHTML = '*<span> password is not strong</span>';
     confirm_labal.innerHTML = '*<span> password are not mach</span>';
     password_labal.style.color = 'red';
     confirm_labal.style.color = 'red';


        return false;  
     

}

// function checkwords() {
//     var userPass = /^[A-Z](?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=).{8,}$/;
//     if (userPass.test(userPassword.value) == userPass.test(confirm_user.value)) {
//         alert('yes');
//         return true;
//     }
//         alert('no');
//         return false;
// }

