const express = require('express')
const usersRouter = require('./routes/usersRouter')

const app = express()
const PORT = process.env.PORT || 5000


//* Routes
app.use('/api/v1/users', usersRouter ) 

//! Starting the server
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))