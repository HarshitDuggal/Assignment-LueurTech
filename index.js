function signUp(event){
    event.preventDefault();
    var email  = document.getElementById("emailid").value;
    var password  = document.getElementById("password").value;
    if(email==="" && password===""){
        document.getElementById("err2").innerHTML="Please Fill The Inputs"
    }
    else if(email!=="" && password===""){
        document.getElementById("err2").innerHTML="Please enter a password"
    }
    else if(email==="" && password!==""){
        document.getElementById("err").innerHTML="Please enter an email"
    }
    else if(password.length<"6"){
        document.getElementById("err2").innerHTML="Enter a strong password"
    }
    else{
        document.getElementById("users").innerHTML=email;
        document.getElementById("pass").innerHTML=password;
    }
}