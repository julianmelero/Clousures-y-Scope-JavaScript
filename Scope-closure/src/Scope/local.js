const helloWorld = () => {
    const hello ="Hello World!";
    console.log(`Local: ${hello}`);
};

helloWorld();

// No se puede acceder a la local
console.log(`Global: ${hello}`);



// Aunque tenga dos varibales con el mismo nombre, las dos tienen valores distintos en local y en global, ya que no son la misma variable.

var scope = "I'm global";

const functionScope = () => {
    var scope = "I'm local";

    const func = () => {
        return scope;
    }

    console.log(func());
}

functionScope();