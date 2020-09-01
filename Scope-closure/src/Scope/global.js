// Scope es el alcance de las variables

// Scope Global
var hello = "Hello!";
// Mala práctica
var hello = "Hello +";

let world = "Hello World!";
// Error, no se puede volver a reasignar con let y const
let world ="Hello";

const helloWorld = "Hello World!";


const anotherFunction = () => {
    console.log(hello);
    console.log(hello);
    console.log(helloWorld);    
}

anotherFunction();


// Mala práctica el declarar una global dentro de una función
const helloWorld = () => {
    globalVar = "I'm global";
}

helloWorld();
console.log(globalVar);