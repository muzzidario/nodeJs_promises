const estatusPedido = () => {
    return Math.random() < 0.8;
}


const miPedidoDePizza = new Promise((resolve, reject) =>{
    setTimeout(() => {
        if(estatusPedido()){
            console.log('Su pedido fue realizado!');
        }else{
            console.log('Ocurrió un error, por favor intente nuevamente');
        }
    },3000);
});

//OPCIÓN 1
// const manejarPedido = (mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
// };

// const manejarError = (mensajeDeError) => {
//     console.log(mensajeDeError);
// };

// miPedidoDePizza.then(manejarPedido,manejarError);

//OPCIÓN 2

miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .then(null, (mensajeDeError) => {
        console.log(mensajeDeError);
    });