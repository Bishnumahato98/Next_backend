import {z} from "zod";

export const Bookschema=z.object({
    id:z.string().min(1,{message:"Book ID is required"}),
    title:z.string().min(1,{message:"Book ID is required"}),
    date:z.string().optional()
});
export type Book =z.infer<typeof Bookschema>;