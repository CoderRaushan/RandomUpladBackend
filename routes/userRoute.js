import express from "express";
import {Addpost,GetPost,GetSpecificPost,AllRandomPost} from "../controllers/userController.js";
// import {cloudinary,storage} from "../CloudCongi/CloudConfig.js";
import { upload } from "../CloudCongi/CloudConfig.js";
// import cloudinary from "../CloudCongi/CloudConfig.js";
const router=express.Router();
router.post("/post",upload.single("file"),Addpost);
router.get("/get/",GetPost);//AllRandomPost
router.get("/AllRandomPost",AllRandomPost);
router.get("/specificPost/:postid",GetSpecificPost);
export default router;