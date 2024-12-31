import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
cloudinary.config({
  cloud_name:"duthu0r3j",
  api_key:"144852565252598",
  api_secret:"yIcqB0oJitbQW-yG_uV6o2SXtlM" ,
});
// console.log("i reached here c cofig");
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Directory to store files
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname); // Unique filename
//   },
// });
const storage=new CloudinaryStorage({
  cloudinary: cloudinary,
  params:
  {
      folder:"RandomUpload",
      allowedFormats: ["jpg", "png","jpeg","pdf","mp4"],
  },
  public_id: (req, file) => {
    return  file.originalname+"-"+Date.now(); // Custom filename
  }
});
// Multer upload configuration
export const upload = multer({ storage: storage });
export default { cloudinary };