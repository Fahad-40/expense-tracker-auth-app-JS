function signUp() {
    let userName = document.querySelector("#signUp-username").value;
    let userPassword = document.querySelector("#signUp-password").value;

    if (!userName || !userPassword) {
        document.querySelector("#msg").innerText = "Please fill both fields!";
        return;
    }

    localStorage.setItem("username", userName);
    localStorage.setItem("userpassword", userPassword);

    let msgArea = document.querySelector("#msg")
    msgArea.innerText = "Account created! Redirecting to logIn... ";
    
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);

}

// function logIn() {
//     let userName = document.querySelector("#logIn-username").value;
//     let userPassword = document.querySelector("#logIn-password").value;
    
//     let savedUser = localStorage.getItem("username");
//     let savedPassword = localStorage.getItem("userpassword");

//     let msgArea = document.querySelector("#msg")
    
//     localStorage.setItem("isLoggedIn" , true);

//     if (userName == savedUser && userPassword == savedPassword) {
//         window.location.href = "appDashboard.html";
//     }
//     else {
//         msgArea.innerText = "Invalid Username or Password! Try again...";
//     }

// }

function logIn() {
    let userName = document.querySelector("#logIn-username").value;
    let userPassword = document.querySelector("#logIn-password").value;

    let savedUser = localStorage.getItem("username");
    let savedPassword = localStorage.getItem("userpassword");

    let msgArea = document.querySelector("#msg");

    if (userName === savedUser && userPassword === savedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "appDashboard.html";
    } else {
        msgArea.innerText = "Invalid Username or Password! Try again...";
    }
}


function logOut() {
    localStorage.setItem("isLoggedIn" , false);
    window.location.href = "logIn.html";
}
