function validateForm(){

    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value.trim();

    if(fname.length < 2){
        alert("First name must be at least 2 characters");
        return false;
    }

    if(lname.length < 2){
        alert("Last name must be at least 2 characters");
        return false;
    }

    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
        alert("Enter valid email address");
        return false;
    }

    if(password.length < 8){
        alert("Password must be at least 8 characters");
        return false;
    }

    var phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if(!phone.match(phonePattern)){
        alert("Phone number must be 123-456-7890 format");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
