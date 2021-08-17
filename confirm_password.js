
//Password Confirmation
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


/***************Transition Permanent***************/
var myFunction1 = function () {
    var x = document.getElementById("f_name");
    x.classList.add("focus");
}
var myFunction2 = function () {
    var x = document.getElementById("l_name");
    x.classList.add("focus");
}
var myFunction3 = function () {
    var x = document.getElementById("email");
    x.classList.add("focus");
}
var myFunction4 = function () {
    var x = document.getElementById("password");
    x.classList.add("focus");
}
var myFunction5 = function () {
    var x = document.getElementById("confirm_password");
    x.classList.add("focus");
}




/********************* Another Page *********************/
var anotherPage = function () {

    /********************* Transfering Values *********************/

    let f_name = document.getElementById("first_name").value;
    var l_name = document.getElementById("last_name").value;
    var e = document.getElementById("e").value;
    var birthday = document.getElementById("birthday").value;
    var country = document.getElementById("country").value;

    // Session storage stores value until window is closed
    sessionStorage.setItem("f_name", f_name); 
    sessionStorage.setItem("l_name", l_name);
    sessionStorage.setItem("e", e);
    sessionStorage.setItem("birthday", birthday);
    sessionStorage.setItem("country", country);
    
    window.location.href = "/result.html";

    // document.getElementById("p1").innerHTML = sessionStorage.getItem("f_name");
    // document.getElementById("p1").innerHTML = sessionStorage.getItem("l_name");
    // document.getElementById("p2").innerHTML = sessionStorage.getItem("e");
    // document.getElementById("p3").innerHTML = sessionStorage.getItem("birthday");
    // document.getElementById("p4").innerHTML = sessionStorage.getItem("country");
}


