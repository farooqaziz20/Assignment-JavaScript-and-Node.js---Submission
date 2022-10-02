
let current_users = ["Farooq", "ali", "usman", "rahat", "faizi", "rehan"]
let new_user = ["ahmed", "zeshan", "Nusrat", "ali", "usman"]
new_user.forEach((item) => {
    if (current_users.includes(item)) {
        console.log(`${item} has already been used`)
    } else {
        console.log(`${item} is available`)
    }
})


