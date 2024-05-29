const request = require('supertest');

test('Проверка POST запроса', async () => {
  const response = await request('https://petstore.swagger.io/v2')
    .post('/user')
    .send({
      "id": 0,
      "username": "Test_name",
      "firstName": "Name",
      "lastName": "Last",
      "email": "Test1@test.ru",
      "password": 1241,
      "phone": 70000000007,
      "userStatus": 0
    });

  // Проверка кода ответа
  expect(response.statusCode).toBe(200);

  // Проверка времени ответа
  expect(response.status).toBeLessThan(600);

  // Проверка содержимого тела ответа
  expect(response.body).toHaveProperty('code');
  expect(response.body).toHaveProperty('type');
  expect(response.body).toHaveProperty('message');
});