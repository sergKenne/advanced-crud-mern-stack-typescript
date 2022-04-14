const multer = require('multer');
const path = require('path');

// 8. Upload Image Controller

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const fileFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
        return cb(null, true);
    }
    cb('Give proper files formate to upload');
};

const uploadFile = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: fileFilter,
});
module.exports = uploadFile;
