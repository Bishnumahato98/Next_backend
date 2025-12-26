import { CreateUserDTO } from "../dtos/user.dto";
import { UserRepository } from "../reposotories/user.repository";
import bcryptjs from "bcryptjs"
import { HttpError } from "../errors/http-error";


let userRepository=new UserRepository();
export class UserService{
    async createUser(data:CreateUserDTO){
        const emailCheck=await userRepository.getUserByEmail(data.email);
        if(emailCheck){
            throw new HttpError(403, "Email already use");
        }
        const usernameCheck=await userRepository.getUserByUsername(data.username);
        if(usernameCheck){
            throw new HttpError(403,"Username already use");
        }

        const hashedPassword=await bcryptjs.hash(data.password, 10);
        data.password=hashedPassword;

        const newUser =await userRepository.createUser(data);
        return newUser;
    }

}
