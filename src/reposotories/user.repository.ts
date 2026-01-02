import { UserModel, IUser } from "../model/user.model";
export interface IUserRepository {
    createUser(userData: Partial<IUser>): Promise<IUser>;
    getUserByEmail(email: string): Promise<IUser | null>;
    getUserByUsername(username: string): Promise<IUser | null>;
    //additional
    getUserById(id : string): Promise<IUser | null>;
    getAllUsers(): Promise<IUser[]>;
    updateUserId(id: string, updateData: Partial<IUser>): Promise<IUser | null>;
    
}
// MongoDb Implementation of UserRepository

export class UserRepository implements IUserRepository {
    async updateUserId(id: string, updateData: Partial<IUser>): Promise<IUser | null> {
        const updatedUser= await UserModel.findByIdAndUpdate(
            id, updateData, {new: true}
        );
        return updatedUser;
    }
    async createUser(userData: Partial<IUser>): Promise<IUser> {
        const user = new UserModel(userData); 
        return await user.save();
    }
    async getUserByEmail(email: string): Promise<IUser | null> {
        const user = await UserModel.findOne({ "email": email })
        return user;
    }
    async getUserByUsername(username: string): Promise<IUser | null> {
        const user = await UserModel.findOne({ "username": username })
        return user;
    }
    async getUserById(id: string): Promise<IUser | null> {
        //UserModel.findOne({"_id": id});
        const user= await UserModel.findById(id);
        return user;
    }
    async getAllUsers(): Promise<IUser[]> {
        const user= await UserModel.find();
        return user;
    }
    async updateUser(id: string, updateData: Partial<IUser>): Promise<IUser | null> {
        //UserModel.updateOne({_id": id}, {$set: updateData});
        const updatedUser= await UserModel.findByIdAndUpdate(
            id, updateData, {new: true} //return the updated document
        );
        return updatedUser;
    }
    async deleteUser(id: string): Promise<boolean> {
        //UserModel.deleteOne({_id: id});
        const result= await UserModel.findByIdAndDelete(id);
        return result ? true: false;
    }
}