# 41.2 API Validation 

## Bookstore

### Step 1: Create

```bash
createdb books
createdb books-test
psql books < data.sql
psql books-test < data.sql

npm install express jsonschema nodemon pg 

```
made a bookSchemaManual.js using [JSONSchemaValidator](http://www.JSONschemaValidator.net)
made a bookSchema.js using [JSONSchema](http://www.JSONschema.net)

At localhost:3000/books you can test GET/POST using example json or similar
```json
{
  "isbn": "0691161518",
  "amazon_url": "http://a.co/eobPtX2",
  "author": "Matthew Lane",
  "language": "english",
  "pages": 264,
  "publisher": "Princeton University Press",
  "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
  "year": 2017
}
```



### Step 2: tests
```bash
npm install --save-dev jest supertest
```
2. created test.js, jest.config.js and added "test":"jest" to package.json
```npm test```








### Notes

```bash
lsof -i  :3000
kill -9 <PID>
```



