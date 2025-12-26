import { Router } from "express";
import { AuthController } from "../controller/auth.controller";

let authController =new AuthController();
const router=Router();

router.post("/register", authController.register)
// add remaing routers like login and logiut etc.


export default router;