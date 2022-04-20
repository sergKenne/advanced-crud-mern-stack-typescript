require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()

const dbConnect = require("./db")
dbConnect()

app.use(cors())
app.use(express.json())
//static Images Folder
app.use('/uploads', express.static('./uploads'))

//routers
app.use('/api/user', require('./router/userRouter'));


if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("app is running on port 5000");
})
