import path from "path";
import fs from "fs";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "files_uploaded/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    const allowedImageTypes = [
      "image/jpeg",
      "image/png",
      "image/bmp",
      "image/tiff",
      "image/webp",
      "image/jpg",
    ];

    if (allowedImageTypes.includes(file.mimetype)) {
      console.log("Fichier sauvegardé");
      callback(null, true);
    } else {
      console.log("Erreur de format");
      callback(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 5, // 5 MB
  },
});

export default upload;
