import {Router} from "express";

import { AdminUserController } from "../../controller/admin/user.controller";
import { adminOnlyMiddleware, authorizedMiddleware } from "../../middlewares/authorized.middleware";


let adminUserController =new AdminUserController();
const router=Router();

router.get("/:id",authorizedMiddleware, adminOnlyMiddleware, adminUserController.getOneUser);


export default router;

