const express = require('express')
const usersRouter = require('./routes/usersRouter')
require("./utils/connectDB")()
const app = express()
const PORT = process.env.PORT || 5000
// usr: marvelcomicuniverse12
// usrPass: Q5H5YPgu57baqQcl

//* Middlewares
app.use(express.json()); // passing incomming payload

//* Routes
app.use('/api/v1/users', usersRouter ) 

//! Starting the server
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))