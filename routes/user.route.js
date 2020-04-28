const { Router } = require('express')
const router = Router();

const {
    cancelService,
    createService,
    returnListOfServices,
    returnSpecificService,
    updateService
} = require('../controllers/user.controller')

//  Movile and Browser

router.get('/', returnListOfServices )

//  Movile only



module.exports = router;