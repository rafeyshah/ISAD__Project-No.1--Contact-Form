var check = function () {
    if (document.getElementById('pass').value == document.getElementById('c_pass').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
    } 
    else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';
    }
}

var myFunction1 = function (){
    var x = document.getElementById("f_name");
    x.classList.add("focus");
}

var myFunction2 = function (){
    var x = document.getElementById("l_name");
    x.classList.add("focus");
}

var myFunction3 = function (){
    var x = document.getElementById("email");
    x.classList.add("focus");
}

var myFunction4 = function (){
    var x = document.getElementById("password");
    x.classList.add("focus");
}

var myFunction5 = function (){
    var x = document.getElementById("confirm_password");
    x.classList.add("focus");
}