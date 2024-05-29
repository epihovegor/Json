const makeRequest = require('./request');
const expectedResponse = require('./expectedResult');

test('Проверка отправки POST-запроса', async () => {
  const requestBody = [{
    "id": 0,
    "username": "TestUser",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "phone": "string",
    "userStatus": 0
  }];

  const response = await makeRequest('/user/createWithList', requestBody);

  expect(response.status).toBe(expectedResponse.code);
  expect(response.body).toEqual(expectedResponse.data);
});

