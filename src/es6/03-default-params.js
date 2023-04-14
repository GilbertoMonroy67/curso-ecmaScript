function newUser (name, age, country){
    var name = name || "Gilberto";
    var age = age || 22;
    var country = country || "Mexico";
    console.log(name, age, country);
}

newUser();
newUser("David", 12, "EUA");

function newAdmin(name = "Gilberto", age = 22, country = "Mexico"){
    console.log(name, age, country);
}

newAdmin();
newAdmin("Ana", 28, "Peru");