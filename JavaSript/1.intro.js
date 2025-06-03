// Variables (Variables y Constantes)
//let const
//Scope general - Ambito general esta fúera del ámbito de bloque
let firstName = "Byron";
let name = "Mike";
console.log(firstName);
console.log(name);

//Scope de bloque - Ambito de bloque
if(true){
    console.log("Hola")
}

// Se pueden declarar del general al bloque pero no se puede al reves del ámbito de bloque al general

//Let permite reasignar el valor
let name2 = "Lor";
console.log(name2);
name2 = "Rita";
console.log(name2);

//Const no permite reasignar el valor
const movie = "The Evil Dead";

