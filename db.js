const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URL, (err) => {
        if (err) {
            console.log('connection to database fail..');
        }
        console.log('database connected successfully...');
    });
};

module.exports = dbConnect;
