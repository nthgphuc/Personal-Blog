var errors = [];

function namef() {
    var x = document.getElementById("yourname").value;
    if (x == "") {
        errors[0] = "*Please fill out your name.";
    } else if (x.length > 100) {
        errors[0] = "Your name should not exceed 100 characters.";
    } else {
        errors[0] = "";
    }
    document.getElementById("nameErr").innerHTML = errors[0];
}

function emailf() {
    var x = document.getElementById("youremail").value;
    if (x == "") {
        errors[1] = "*Please fill out your email.";
    } else if (x.length > 100) {
        errors[1] = "Your email should not exceed 100 characters.";
    } else {
        errors[1] = "";
    }
    document.getElementById("emailErr").innerHTML = errors[1];
}

function subjectf() {
    var x = document.getElementById("subject").value;
    if (x == "") {
        errors[2] = "*Please fill out the subject.";
    } else if (x.length < 50) {
        errors[2] = "Subject should not shorter than 50 characters.";
    } else if (x.length > 250) {
        errors[2] = "Subject should not exceed 250 characters.";
    } else {
        errors[2] = "";
    }
    document.getElementById("subjectErr").innerHTML = errors[2];
}

function messagef() {
    var x = document.getElementById("message").value;
    if (x == "") {
        errors[3] = "*Please fill out the message.";
    } else if (x.length > 500) {
        errors[3] = "Message should not exceed 500 characters.";
    } else {
        errors[3] = "";
    }
    document.getElementById("messageErr").innerHTML = errors[3];
}

function submitf() {
    namef();
    emailf();
    subjectf();
    messagef();
    document.getElementById("nameErr").innerHTML = errors[0];
    document.getElementById("emailErr").innerHTML = errors[1];
    document.getElementById("subjectErr").innerHTML = errors[2];
    document.getElementById("messageErr").innerHTML = errors[3];
    for (var i = 0; i < errors.length; i++) {
        if (errors[i] != "") {
            return false;
        }
    }
}