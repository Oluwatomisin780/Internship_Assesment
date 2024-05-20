import {
  Controller,
  Post,
  Patch,
  Delete,
  Get,
  Param,
  Body,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/createBook.dto';
import { UpdateBook } from './dto/updateBook.dto';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  getAllBooks() {
    const book = this.bookService.getAllBooks();
    return {
      book,
    };
  }

  @Get(':id')
  getSingleBook(@Param('id') id: string) {
    const book = this.bookService.getOneBook(id);
    return book;
  }

  @Post()
  createBooks(@Body() body: CreateBookDto) {
    const book = this.bookService.createBook(body);
    return book;
  }

  @Put()
  updateBookd(@Param('id') id: string, @Body() body: UpdateBook) {
    const book = this.bookService.updaateBooks(id, body);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    const book = this.bookService.deleteBooks(id);
    return book;
  }
}
