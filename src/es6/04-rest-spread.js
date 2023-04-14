//arrays destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a,fruits[1]);

//object destructuring
let user = {userName: "Gilberto", age: 22, };
let {userName, age} = user;
console.log(userName, user.age);

// spread operator
let person = {name: "Gilberto", age: 22};
let country = "Mexico"
let data = {id:1, ...person, country};
console.log(data);

//rest
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);