const fruits = () => {
    // Empieza el bloque
    if(true) {
        var fruits1 = "Apple";
        let fruits2 = "Banana";
        const fruits3 = "Kiwi";
        // Se puede acceder
        console.log(fruits1);        
        console.log(fruits2);        
        console.log(fruits3);
    }
            
        console.log(fruits1);
        // No se puede acceder a let y const
        console.log(fruits2);        
        console.log(fruits3);
};

fruits();

let x = 1;
{
    let x = 2;
    console.log(x); // 2
}

console.log(x); // 1


