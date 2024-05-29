const request = require('supertest');

async function makePostRequest(requestData) {
  const response = await request('https://reqres.in')
    .post('/api/users')
    .send(requestData);
  
  return response;
}

module.exports = makePostRequest;