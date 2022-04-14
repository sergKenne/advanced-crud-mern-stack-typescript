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
    const { email, name, phone } = req.body
    const image = req.file.filename
    // console.log(image);
    // console.log(req.body);

    const errors = validationResult(req);
     
    if (!errors.isEmpty()) {
         return res.status(422).jsonp(errors.array()[0]);
    } 
    if (!req.file) {
        return res.status(422).json({msg:"please choose the image"});
    }
    
   
    try {
        const user = new User({ email, image, name, phone }) 
        user.save().then(result => {
            res.status(200).json({
                msg: "user added successfully ",
                user: result
            })
        })
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
    
}

const updateUser = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    }
    if (!req.file) {
        return res.status(422).json({ msg: 'please choose the image' });
    }

    try {
        const { name, phone, email } = req.body;
        const image = req.file.filename;
        const { id } = req.params

        const oldUser = await User.findOne({ _id: id });
        const pathFile = path.join('uploads', oldUser.image);

        //DELETE FILE
        fs.unlinkSync(pathFile);
        console.log('Successfully deleted the file.');

        const newUser = await User.findByIdAndUpdate(id, { name, phone, email, image })
        if (newUser) {
            res.status(200).json({
                msg: 'user updated successfully',
                user: newUser,
            }); 
        }
        
    } catch (error) {
        res.status(400).json({
            msg: err.message,
        });

    }


    // const { name, phone, email } = req.body;
    // const image = req.file.filename;
/*
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    } 
    if (!req.file) {
        return res.status(422).json({ msg: 'please choose the image' });
    }

    User.findOne({ _id: req.params.id }).then(user => {
        const pathFile = path.join('uploads', user.image);
        console.log('path', pathFile);
        fs.unlink(pathFile, function (err) {
            if (err) {
                throw err;
            } else {
                console.log('Successfully deleted the file.');
            }
        });

        const { name, phone, email } = req.body;
        const image = req.file.filename;

        User.findByIdAndUpdate(
            req.params.id, { name, image, phone, email }
        ).then(result => {
            res.status(200).json({
                msg: 'user updated successfully',
                user: result,
            }); 
        }) 
    }).catch(err => {
        res.status(400).json({
            msg: err.message,
        });
    })
*/
    
    
    
    
    
/*
    try {


        const user = await User.findOne({ _id: req.params.id });
        const pathFile = path.join('uploads', user.image);
        console.log('path', pathFile);
        fs.unlink(pathFile, function (err) {
            if (err) {
                throw err;
            } else {
                console.log('Successfully deleted the file.');
            }
        });
        
        const updateUser = await User.findByIdAndUpdate(
            req.params.id, { name, image, phone, email }
        );
        res.status(200).json({
            msg: "user updated successfully",
            user: updateUser
        })    
  
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }

    */
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

        const pathFile = path.join("uploads", user.image);
        console.log("path", pathFile);
        const userDelete = await User.findByIdAndDelete(req.params.id);

        fs.unlink(pathFile, function (err) {
            if (err) {
                throw err;
            } else {
                console.log('Successfully deleted the file.');
            }
        });

        res.status(200).json({
            msg: ' user deleted successfully...',
            user: userDelete
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