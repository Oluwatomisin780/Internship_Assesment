import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { BooksService } from '../src/books/books.service';
describe('AppController (e2e)', () => {
  let app: INestApplication;
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
  it('/books (GET)', () => {
    return request(app.getHttpServer())
      .get('/books')
      .expect(200)
      .expect((res) => {
        expect(res.body.length).toBeGreaterThan(0);
      });
  });

  it('/books/:id (GET)', () => {
    return request(app.getHttpServer())
      .post('/books')
      .send({ name: ' tomi', description: ' tomi  book' })
      .then((res) => {
        const id = res.body.id;
        return request(app.getHttpServer())
          .get(`/books/${id}`)
          .expect(200)
          .expect((res) => {
            expect(res.body.id).toBe(id);
            expect(res.body.name).toBe('tomi');
            expect(res.body.description).toBe('tomi book');
          });
      });
  });
});
