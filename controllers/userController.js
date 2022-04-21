const User = require("../models/user")
const { check, validationResult } = require('express-validator/check');
const fs = require('fs');
const path = require('path')

const getAllUser = async(req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({
            users,
            msg: "users fetch sucessfully..."
        })
    } catch (error) {
        res.status(400).json({
            msg: error.message
        }) 
    }
}

const addUser = async (req, res) => {
    const { email, name, phone } = req.body;
    const image = req.file.filename;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).jsonp(errors.array()[0]);
    }
    if (!req.file) {
        return res.status(422).json({ msg: 'please choose the image' });
    }

    //res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    //res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    try {
        const user = new User({ email, image, name, phone });
        await user.save().then((result) => {
            res.status(200).json({
                msg: 'user added successfully ',
                user: result,
            });
        });
    } catch (error) {
        res.status(400).json({
            msg: error.message,
        });
    }
};;

const updateUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    }
    
    try {
        const updateUser = await User.findOne({ _id: req.params.id });
        const { name, phone, email } = req.body;
        const pathFile = path.join('client/public/uploads', updateUser.image);
        const opts = { new: true, upsert: true };

        if (req.file) {
            const image = req.file.filename;
            let doc = await User.findOneAndUpdate(
                { _id: updateUser._id },
                { name, phone, email, image },
                opts,
            );

            fs.unlinkSync(pathFile);

            res.status(200).json({
                msg: 'user updated successfully',
                user: doc,
            });
            
        } else {
            let doc = await User.findOneAndUpdate(
                { _id: updateUser._id },
                { name, phone, email },
                opts,
            );
            res.status(200).json({
                msg: 'user updated successfully',
                user: doc,
            });
        }
        

    } catch (error) {
        res.status(400).json({
            msg: error.message,
        });
    }
}

const editUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        res.status(200).json({
            user,
            msg: 'request success',
        });
    } catch (error) {
        res.status(400).json({
            msg: error.message,
        });
    }
};

const deleteUser = async(req, res) => {

    try {
        const user = await User.findOne({ _id: req.params.id });
        if (!user) {
            return res.status(402).json({ msg: err.message }); 
        }

        const pathFile = path.join('client/public/uploads', user.image);
        const userDelete = await User.findByIdAndDelete(req.params.id);
        fs.unlinkSync(pathFile);
        res.status(200).json({
            msg: ' user deleted successfully...',
            user: userDelete,
        });
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
}

module.exports = {
    getAllUser,
    addUser,
    updateUser,
    editUser,
    deleteUser,
};