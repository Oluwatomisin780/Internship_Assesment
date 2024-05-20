import { Injectable, NotFoundException } from '@nestjs/common';
import { Books } from './books.interface';
import { CreateBookDto } from './dto/createBook.dto';
import { v4 as uuidv4 } from 'uuid';
import { UpdateBook } from './dto/updateBook.dto';
@Injectable()
export class BooksService {
  private Books: Books[] = [];

  getAllBooks(): Books[] {
    return this.Books;
  }

  createBook({ title, id, author, year }: CreateBookDto) {
    id = uuidv4();
    const newBook = { title, id, author, year };
    const books = this.Books.push(newBook);
    return newBook;
  }
  getOneBook(id: string): Books {
    const book = this.Books.find((book) => book.id === id);
    if (!book) throw new NotFoundException('book not found');
    return book;
  }

  updaateBooks(id: string, updatedBook: UpdateBook): Books {
    const book = this.Books.find((i) => i.id === id);
    if (!book) throw new NotFoundException('book not found');
    const updateBook = this.Books.findIndex((i) => i.id === id);
    const updated = { id, ...updatedBook };
    this.Books[updateBook] = updated;
    return updated;
  }

  deleteBooks(id: string): void {
    const book = this.Books.find((i) => i.id === id);
    if (!book) throw new NotFoundException('book not found ');
    const deletedBook = this.Books.findIndex((i) => i.id === id);
    this.Books.splice(deletedBook, 1);
  }
}
