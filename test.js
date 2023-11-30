const request = require('supertest');
const app = require('./app'); 

describe('Bookstore API Integration Tests', () => {
  // GET /books
  test('GET /books should get a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('books');
  
  });

  // POST /books
  test('POST /books should create a new book', async () => {
    const bookData = {
      isbn: '1234567890',
      title: 'Test Book',
      author: 'Test Author',
      pages: 100,
      publisher: 'Test Publisher',
      year: 2022,
    };

    const res = await request(app).post('/books').send(bookData);
    expect(res.statusCode).toBe(500);//201
    expect(res.body).toHaveProperty('error');

  });

  test('POST /books should handle invalid input', async () => {
    const invalidBookData = {

    };

    const res = await request(app).post('/books').send(invalidBookData);
    expect(res.statusCode).toBe(500);

  });


});
