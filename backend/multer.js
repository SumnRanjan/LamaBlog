import multer from "multer";
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from "./cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'myAppUploads',
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

const parser = multer({ storage: storage });


export default parser;