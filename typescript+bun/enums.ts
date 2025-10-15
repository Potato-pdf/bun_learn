enum errorTypes{
    UNAUTHORIZED,
    NOT_FOUND
}

function mostrarMensaje (error: errorTypes){
    if (error === errorTypes.UNAUTHORIZED)
        console.log("no authorizado")
}

