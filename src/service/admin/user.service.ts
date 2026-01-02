import { CreateUserDTO } from "../../dtos/user.dto";
import { UserRepository } from "../../reposotories/user.repository";
import bcryptjs from "bcryptjs"
import { HttpError } from "../../errors/http-error";
let userRepository =new UserRepository();
export class AdminUserService{
    async createUser(data:CreateUserDTO){
        // same as src/service/user.service.ts

    }
    async getAllUsers(){
        const users =await userRepository.getAllUsers();
        return users;
    }
    async getOneUser(id:string){
        const user=await userRepository.getUserById(id);
        if(!user){
            throw new HttpError(404, "User not found");
        }
        return user;
    }
}