// Importing necessary modules
import multer from "multer";

// Multer middleware for file uploading
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public");
  },
  filename: (req, file, cb) => {
    const uniquename = Date.now() + "_" + file.originalname;
    cb(null, uniquename);
  },
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'audio/mpeg'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only images and .mp3 files are allowed'), false);
    }
};

const uploadMedia = multer({
    storage: storage,
    limits: { fileSize: 15 * 1024 * 1024 },
    fileFilter: fileFilter,
});

export { uploadMedia };