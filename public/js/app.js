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


// data_users.push(user)
function sign_up() {
    let name = prompt("Enter your Name").toLocaleLowerCase().trim();
    let email = prompt("Enter valid Email").trim();
    let age = prompt("how old are you?").toLocaleLowerCase().trim()
    let password = prompt("Enter Password").trim();
    let confirm_password = prompt("Confirm your Password").trim();

    if (password !== confirm_password) {
        alert("password inccorect")
        return
    }

    let newuser = new Users(name, email, age, password)
    data_users.push(newuser)
}

function login(username) {
    let email = prompt("Enter your email").toLocaleLowerCase().trim();
    let password = prompt("enter your password");
    for (let index = 0; index < data_users.length; index++) {
        if (email === data_users[index] && password === data_users[index]) {
            return alert("Login success! Welcome to bank lfo9ara")
        }
    }
    alert("login failed please register")
}

let user_function = prompt("hello, welcome to bank lfo9ara \nsetting: \n1 - sign up \n2 - login \n3 - withdraw \n4 - Deposit \n5 - exit")
// while (user_function) {

//     if (user_function === "1") {
//         sign_up();
//     } else if (user_function === "2") {
//         login()
//     }
    
// }






// function sign_up() {
//     let name = prompt("Enter your Name").toLocaleLowerCase().trim();

//     let email = prompt("Enter valid Email").trim();
//     let age = prompt("how old are you?").toLocaleLowerCase().trim()
//     let password = prompt("Enter Password").toLocaleLowerCase().trim();
//     let confirm_password = prompt("Confirm your Password").toLocaleLowerCase().trim();

//     if (password !== confirm_password) {
//         alert("password inccorect")
//         return
//     }

//     let newuser = new Users(name, email, age, password)
//     data_users.push(newuser)
// }

// function login(username) {
//     let email = prompt("Enter your Name").toLocaleLowerCase().trim();
//     let password = prompt("enter your password");
//     for (let index = 0; index < data_users.length; index++) {
//         if (email === data_users[index] && password === data_users[index]) {
//             return alert("Login success! Welcome to bank lfo9ara")
//         }
//     }
//     alert("login failed please register")
// }


console.table(data_users);





