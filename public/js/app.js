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
    if (name.length < 5){
        console.log("name is too short, you need at least 5 charachters"); 
        return false
    }
    if (/\d/.test(name)){
        console.log("remove numbers from name")
        return false
    }
    if (/[@#\-+*/]/.test(name)) {
            console.log("remove special characters");
            
        return false
    }
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
