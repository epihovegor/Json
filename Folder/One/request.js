const request = require('supertest');
const app = 'https://petstore.swagger.io/v2';

async function makeRequest(url, body) {
  return request(app)
    .post(url)
    .send(body);
}

module.exports = makeRequest;
