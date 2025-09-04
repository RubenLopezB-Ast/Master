//Promesas
const miPromesa = new Promise((resolve, 
reject)=>{
    const exito = true;

    if (exito){
        resolve("Me he resuelto");
    }else{
        reject("Me he rechazado");
    }
    });

// Gestión de la promesa
miPromesa
    .then((resultado)=>{
        console.log("Resultdado", resultado);
    })
    .catch((error)=>{
        console.error("Error", error);
    })

//Try catch finally
let x = 10;

try{
    x += 5
    console.log("He sumado")
}catch (error) {
    console.log("Ha fallado-", error.
    message)
}finally{
    console.log("Terminado")
}