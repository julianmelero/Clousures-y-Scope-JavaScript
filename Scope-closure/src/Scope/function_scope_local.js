const fruits = () => {
    var fruit = "Apple";
    console.log(fruit);
};

fruits();
console.log(fruit);


const anotherFunction = () => {
    var x = 1;
    // Se reescribe, ya que es local
    var x = 2;
    let y = 1;
    // Error, reasignar let
    // let y = 2;
    console.log(x);
    console.log(y);
}

anotherFunction();