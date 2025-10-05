import express from 'express';
import {  loginUser, refreshAccessToken, registerUser } from '../controllers/UserController.js';
const router=express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
// router.get("/getUserDetails",getUserDetails);
// router.post("/logout",logout);
router.get("/refresh",refreshAccessToken)

export default router;