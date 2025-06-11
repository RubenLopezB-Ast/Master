const colores = ["rojo", "amarillo","verde","azul"];

//ACCEDE
//POSICIONES -> INICES -> INDEX
console.log(colores[0]);
//LONGITUD
console.log(colores.length); //GO TO HELL
//SOBRE ESCRIBIR VALORES LLAMANDO A SUS POSICIONES
colores[0]="negro";
console.log(colores);

//METODOS QUE MODIFICAN EL ARRAY OTIGINAL
colores.push("blanco", "rojo");
console.log(colores);

colores.pop();
console.log(colores);

colores.unshift("morado");
console.log(colores);

colores.shift();
console.log(colores);

colores.sort();
console.log(colores);

colores.reverse;
console.log(colores);

colores.splice(1,3);
console.log(colores);

//METODOS CONSULTA
console.log(colores.indexOf("rojo"));
console.log(colores.includes("amarillo"));+

//MODIFICO PARA QUE HAYA MÁS
colores.push("rojo","azul","rosa");
console.log(colores);

console.log(colores.slice(2,4));

//CONCAT
const juegosRetro = ["Mario Bross","Tetris","Arkanoind"];
const juegosNuevos = ["Elden Ring", "Death Stranding", "GTA VI"];
const juegos = juegosRetro.concat(juegosNuevos);
console.log(juegos);

//Ejemplo -> Quitar Elden Ring
juegos.splice(juegos.indexOf("Elden Ring"));
juegos.splice(eldenRingPos, 1);
console.log(juegos);

//Array tridimensional
const arrayPsicopata =[1,2[3,4[5,6,[7,8]]]];
//Metodo flat es para aplanar un array
console.log(arrayPsicopata.flat(4));




