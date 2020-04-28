const createService = (req, res) => {
    console.log("Creating service")
    
}

const returnListOfServices = (req, res) => {

    var list = require("../data.json")
    console.log(list)
    res.json(list)
    
    console.log("Returning list of services")
}

const returnSpecificService = () => {
    console.log("Returning specific service")
}

const cancelService = () => {
    console.log("Canceling service")
}

const updateService = () => {
    console.log("Updating service")
}

module.exports = {
    createService,
    returnListOfServices,
    returnSpecificService,
    cancelService,
    updateService
}