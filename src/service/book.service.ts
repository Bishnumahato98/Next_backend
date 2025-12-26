import { IBookRepository, BookRepository } from "../reposotories/book.reposotrories";
import {Book } from "../types/book.types";
import { CreateBookDTO } from "../dtos/book.dots";
let bookRepository:IBookRepository=new BookRepository;

export class Bookservice{
    getBooks=():Book[]=>{
        let transformedBooks=
        bookRepository
        .getAllBooks()
        .map(bk=>{
            return {
                ...bk,title:bk.title.toUpperCase()
            }
        })
        return transformedBooks;
    }
    createBook =(bookData: CreateBookDTO): Book=>{
        const newBook:Book={...bookData};
        let existingBook=bookRepository.getBookById(newBook.id);
        if(existingBook){
            throw new Error("Book Is already exists")
        }
        return bookRepository.createBook(newBook);
    }
    
}
