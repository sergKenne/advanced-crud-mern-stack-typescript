const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './client/public/uploads');
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
