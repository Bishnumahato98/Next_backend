import { AdminUserService } from "../../service/admin/user.service";
import { Request, Response } from "express";
import z from "zod";

let adminUserService = new AdminUserService();

export class AdminUserController {
    async createUSer(req: Request, res: Response) {
        // const users = await AdminUserService.getAllUser();
        // return users;
    }

    async getOneUser(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const user = await adminUserService.getOneUser(userId);
            return res.status(200).json({ data: user, message: "User fetched successfully" });

        } catch (error: Error | any) {

            return res.status(error.statusCode || 500).json({ message: error.message || "Internal Server Error" });
        }
    }
}