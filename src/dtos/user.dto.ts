import z from "zod"
import { UserSchema } from "../types/user.type"

export const CreateUserDTO=UserSchema.pick(
    {
        firstName:true,
        lastName:true,
        email:true,
        username:true,
        password:true
    }
).extend(
    {
        confirmPassword:z.string().min(6)
    }
).refine(
    (data)=>data.password===data.confirmPassword,
    {
        message:"password do not match",
        path:["confirmPassword"]
    }
)
export type CreateUserDTO=z.infer<typeof CreateUserDTO>;