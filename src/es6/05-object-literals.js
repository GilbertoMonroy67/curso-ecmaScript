//  enahced object literals

function newUser (user, age, country, uId){
    return{
        user,
        age,
        country,
        uId
    }
}

console.log(newUser("Gilberto", 22, "Mexico", 1));