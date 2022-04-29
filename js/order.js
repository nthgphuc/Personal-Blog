var errors = [];

function cakef() {
    var x = document.getElementById("cakename").value;
    if (x == "") {
        errors[0] = "*Please select our product.";
    } else {
        errors[0] = "";
    }
    document.getElementById("cakeErr").innerHTML = errors[0];
}

function namef() {
    var x = document.getElementById("yourname").value;
    if (x == "") {
        errors[1] = "*Please fill out your name.";
    } else if (x.length > 100) {
        errors[1] = "Your name should not exceed 100 characters.";
    } else {
        errors[1] = "";
    }
    document.getElementById("nameErr").innerHTML = errors[1];
}

function messagef() {
    var x = document.getElementById("message").value;
    if (x.length > 30) {
        errors[2] = "Message should not exceed 30 characters.";
    } else {
        errors[2] = "";
    }
    document.getElementById("messageErr").innerHTML = errors[2];
}

function datef() {
    var x = document.getElementById("deliverdate").value;
    var y = new Date(x);
    var z = new Date();
    if (x == "") {
        errors[3] = "*Please fill out the deliver date.";
    } else if (
        y.getFullYear() < z.getFullYear() ||
        (y.getFullYear() == z.getFullYear() && y.getMonth() < z.getMonth()) ||
        (y.getFullYear() == z.getFullYear() &&
            y.getMonth() == z.getMonth() &&
            y.getDate() < z.getDate())
    ) {
        errors[3] = "Delivery date should not be in the past";
    } else {
        errors[3] = "";
    }
    document.getElementById("dateErr").innerHTML = errors[3];
}

function addressf() {
    var x = document.getElementById("address").value;
    if (x == "") {
        errors[4] = "*Please fill out the address.";
    } else if (x.length > 500) {
        errors[4] = "Address should not exceed 500 characters";
    } else {
        errors[4] = "";
    }
    document.getElementById("addressErr").innerHTML = errors[4];
}

function submitf() {
    cakef();
    namef();
    messagef();
    datef();
    addressf();
    document.getElementById("cakeErr").innerHTML = errors[0];
    document.getElementById("nameErr").innerHTML = errors[1];
    document.getElementById("messageErr").innerHTML = errors[2];
    document.getElementById("dateErr").innerHTML = errors[3];
    document.getElementById("addressErr").innerHTML = errors[4];
    for (var i = 0; i < errors.length; i++) {
        if (errors[i] != "") {
            return false;
        }
    }
}