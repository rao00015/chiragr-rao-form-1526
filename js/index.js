function validate() {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let button = document.getElementById("button").button;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let data = {};
    let error = [];


    if (fullname !== "") {
        data.fname = fullname;
    } else {
        error.push("Please enter Firstname");
    }

    if (email !== "") {
        if (regex.test(email)) {
            data.email = email;
        } else {
            error.push("Invalid email!");
        }
    } else {
        error.push("Please enter email");
    }

    if (message !== "") {
        data.message = message;
    } else {
        error.push("Please type message");
    }

    if (error.length > 0) {
        console.log(error);
    } else {
        console.log(data);
    }
}

button.addEventListener("click", validate);
