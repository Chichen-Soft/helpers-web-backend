const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(morgan('dev'))
app.use(require('./routes/user.route'))
app.use(express.urlencoded({extended: false}))
app.use(express.json)

app.listen(3000, () => {
    console.log("running on port 3000")
})