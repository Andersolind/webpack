import request from 'supertest';
import express from 'express';
import router from './router';

const app = new express();
app.use('/', router);

describe('Routes', function () {
  test('responds to /', async () => {
    const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual('Hello World!');
  });

  test('responds to /ping', async () => {
    const res = await request(app).get('/ping');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual('pong');
  });

  test('responds to /build-info', async () => {
    const res = await request(app).get('/build-info');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    const tempResponse = JSON.parse(res.text);
    expect(tempResponse.version).toBeTruthy();
    expect(tempResponse.sha).toBeTruthy();
  });
});
