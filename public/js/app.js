let data_users = []

class Users {
    constructor(name, email, age, password) {
        this.name = name
        this.email = email
        this.age = age
        this.password = password
        this.moneybalance = 1000
        this.history = []
    }
}

console.log(data_users);


// validname function
function validName(name) {
    if (name.length < 5) {
        console.log("name is too short, you need at least 5 charachters");
        return false
    }
    if (/\d/.test(name)) {
        console.log("remove numbers from name")
        return false
    }
    if (/[@#\-+*/]/.test(name)) {
        console.log("remove special characters");

        return false
    }
    return true
}

// validemail
function isValidEmail(email) {
    if (email.length < 10) {
        console.log("email is too short, you need at least 10 charachters");

        return false
    }
    if (email.includes(" ")) {
        console.log("remove spaces");

        return false
    }
    if (email.split("@").length !== 2)
        return false

    // Check if email already exists in data_users
    let emailexist = data_users.find(user => user.email === email);
    if (emailexist) return false;

    return true;
}

// validage
function isValidAge(age) {
    if (!/^\d+$/.test(age))
        return false
    if (age < 18 || age >= 100)
        return false
    return true
}

// validpassword
function isValidPassword(password) {
    if (password.includes(" "))
        return false
    if (password.length < 7)
        return false
    if (!/[@#\-+*/]/.test(password))
        return false
    return true
}

function sign_up() {
    let name = prompt("Enter your Name").toLocaleLowerCase().trim()
    if (!validName(name)) {
        alert("invalid name, the name should > 5 character & no number and no symbol")
        return
    }
    let email = prompt("Enter valid Email").trim().toLocaleLowerCase()
    if (!isValidEmail(email)) {
        alert("Invalid email. Make sure it's correct and not already used.");
        return;
    }
    let age = parseInt(prompt("how old are you?").trim())
    if (!isValidAge(age)) {
        alert("Invalid age. Must be a number with less than 3 digits.");
        return;
    }
    let password = prompt("Enter Password").trim()
    if (!isValidPassword(password)) {
        alert("Invalid password. Must be 7+ characters with one special symbol (@, #, -, +, *, /)");
        return;
    }
    let confirm_password = prompt("Confirm your Password").trim()
    if (password !== confirm_password) {
        alert("password inccorect, try again")
        sign_up()
    }

    let newuser = new Users(name, email, age, password)
    data_users.push(newuser)
    alert("welcome to bank lfo9ara")
}

function login() {
    let email = prompt("Enter your email").toLowerCase().trim()
    let password = prompt("Enter your password").trim()
    let user = data_users.find(user => user.email === email)

    if (user && user.password === password) {
        alert("Login success! Welcome to bank lfo9ara")
        menu(user)

    } else {
        alert("Login failed. Please try again or register.")
    }
}

function change_password() {
    let email = prompt("enter your email")
    let user = data_users.find(user => user.email === email)
    if (!user) {
        alert("email not exist, you need to register")
        return
    }
    let newpassword = prompt("enter the new password")
    let newconfirmpassword = prompt("confirm the new password")

    while (newpassword.replace(/\s+/g, '').length !== newpassword.length || newpassword.length < 7 || !/[#@\-+*/]/.test(newpassword) || /\s/.test(newpassword) || newpassword !== newconfirmpassword) {
        if (newpassword !== newconfirmpassword) {
            alert("The password do not match")
        } else {
            alert("Invalid password. It must contain at least 7 characters and one special character")
        }
        newpassword = prompt("enter the new password")
        newconfirmpassword = prompt("confirm the new password")
    }

    user.password = newpassword
    alert("Password changed successfully!")
    console.table(data_users)
}

let user_function = ""
while (user_function !== "4") {
    user_function = prompt("hello, welcome to bank lfo9ara \nsetting: \n1 - sign up \n2 - login \n3 - change password \n4 - exit")
    if (user_function === null) {
        continue
    }
    switch (user_function) {
        case "1":
            sign_up();
            break;

        case "2":
            login();
            break;

        case "3":
            change_password()
            break;

        default:
            alert("enter the information")
            break;
    }

    console.table(data_users);
}


// function Deposit(money) {
//     if (!isNaN(money)) {
//         if (money < 1000) {
//             this.moneybalance += money;
//             this.history.push(" deposit " + money + " DH to bank" )
//             alert(this.name + " deposit " + money + " DH to bank" )
//         } else {
//             console.log("you don't have enough money to deposit");
//         }
//     }
// }

function Deposit() {
    let askMoney = parseInt( prompt(`how much you want to deposite`))
    if (askMoney <= 1000) {
        this.moneybalance += askMoney
        // this.history.push(" deposit " + askMoney)
        alert(this.name + " deposit " + askMoney + " DH to bank" )
    } else {
        console.log(`the max is 1000 dh`);
    }
}

function menu(user) {
    let menubank = ""
    while (menubank !== "4"){
        menubank = prompt("What do you want to do in the bank:\n1 - Deposit\n2 - Withdraw\n3 - Historie\n4 - Logout")
    if (menubank === null) {
        continue
    }
    switch (menubank) {
        case "1":
            Deposit();
            break;

        case "2":
            Withdraw();
            break;

        case "3":
            Historie()
            break;

        default:
            alert("enter the information")
            break;
    }
    }
}