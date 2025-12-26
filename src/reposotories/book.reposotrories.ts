import {Book} from "../types/book.types";



export const books: Book[]=[
    {id:"B-1", title:"1986"},
    {id:"B-2", title:"to kill a bird", date: "2012-12-31"},
];

export interface IBookRepository{
    getAllBooks(): Book[];
    getBookById(id:string):Book | undefined;
    createBook (book:Book):Book;
}
export class BookRepository implements IBookRepository{
    getAllBooks(): Book[] {
        return books;
    }
    getBookById(id: string): Book | undefined {
        return books.find(bk=>bk.id===id);
    }
    createBook(newBook: Book): Book {
        books.push(newBook);
        return newBook;
    }
}