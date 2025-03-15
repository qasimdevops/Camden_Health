const request = require('supertest');
const { app, server } = require('../app');

describe('GET /', () => {
  it('responds with Welcome to Camden Health System and footer text', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Welcome to Camden Health System');
    expect(response.text).toContain('This application is live by Muhammad Qasim, Sr. DevOps Engineer');
  });

  // Close the server after all tests are done
  afterAll((done) => {
    server.close(done);
  });
});