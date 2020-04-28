const returnListOfDoneServices =  () => {
    console.log("Retornar los servicios terminados")
}

const returnSugestedServices = () => {
    console.log("Regresar los servicios sugeridos (por aceptar)")
}

const returnCurrentServices = () => {
    console.log("Retornar los servicios activos (aceptados pero no terminados)")
}

module.exports = {
    returnCurrentServices,
    returnListOfDoneServices,
    returnSugestedServices
}