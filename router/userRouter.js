const express = require("express")
const router = express.Router()
const { check, validationResult } = require('express-validator/check');

const { getAllUser, addUser, editUser, deleteUser, updateUser } = require("../controllers/userController");
const uploadFile = require("../uploadFile");

router.get("/", getAllUser)

router.get('/:id', editUser);

router.post(
    '/',
    uploadFile.single("image"),
    [
        check('name').not().isEmpty().withMessage('Name must have more than 5 characters'),
        check('email', 'Your email is not valid').not().isEmpty().isEmail(),
        check('phone', 'Phone field can not be empty').not().isEmpty(),
        //check('image', 'please choose image').not().isEmpty(),
    ],
    
    addUser,
);

router.put(
    '/:id',
    uploadFile.single("image"),
    [
        check('name').not().isEmpty().withMessage('Name must have more than 5 characters'),
        check('email', 'Your email is not valid').not().isEmpty().isEmail(),
        check('phone', 'Choose a weekday').not().isEmpty(),
        // check('image', 'please choose image').not().isEmpty(),
    ],
    updateUser,
);

router.delete('/:id', deleteUser);

module.exports = router