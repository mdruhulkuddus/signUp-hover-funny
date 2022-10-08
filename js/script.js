$('#successBtn').hide();
function checkUserName(){
    var userNameValue = $('#userName').val();
    var regExp = /^[a-zA-Z-1-9\.]{5,15}$/; // small, capital and range 2 to 25 are allowed otherwise false
    if(regExp.test(userNameValue))
    {
        $('#userNameError').text(' ');
        return true;
    }
    else{
        $('#userNameError').text('User Name should be 5 to 10 character');
        return false;
    }
}

function checkPassword(){
    var passwordValue = $('#password').val();
    if(passwordValue.length > 6 ){
        $('#passwordError').hide();
        return true;
    }
    else{
        $('#passwordError').text('Password Length should be 6 up');
        return false;
    }
}
function checkConfirmPassword(){
    var confirmPasswordValue = $('#confirmPassword').val();
    var passwordValue = $('#password').val();
    if(confirmPasswordValue ==  passwordValue){
        $('#ConfirmEmailError').hide();
        $('#submitBtn').hide();
        $('#successBtn').show();
        $('#ConfirmEmail').text('Password Matched');
        return true;
    }
    else{
        $('#ConfirmEmailError').text('Password should be same');
        return false;
    }
}

$('#userName').keyup(function(){
    checkUserName();
});

$('#password').keyup(function(){
    checkPassword();
});
$('#confirmPassword').keyup(function(){
    checkConfirmPassword();
});

$('#registerForm').submit(function(){

    if(checkUserName() == true && checkPassword() == true && checkConfirmPassword() == true){
        return true;
    }
    else
    return false;
});