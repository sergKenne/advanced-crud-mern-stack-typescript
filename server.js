require("dotenv").config()
const express = require("express")
const app = express()

const dbConnect = require("./db")
dbConnect()

app.use(express.json())
//static Images Folder
app.use('/uploads', express.static('./uploads'))

//routers
app.use('/api/user', require('./router/userRouter'));



app.listen(5000, () => {
    console.log("app is running on port 5000");
})
