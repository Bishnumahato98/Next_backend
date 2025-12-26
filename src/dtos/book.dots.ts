import z from "zod";
import { Bookschema } from "../types/book.types";

// DTO =dat transfer objet
export const CreateBookDTO=Bookschema.pick({id:true,title:true});
export type CreateBookDTO=z.infer<typeof CreateBookDTO>