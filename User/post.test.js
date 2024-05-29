const request = require('supertest');
//POST запрос + тесты на добавление нового пользователя
describe('POST запрос для добавление нового пользователя', () => {
  let requestBody;
  let response;

  beforeAll(async () => {
    requestBody = {
      "id": 0,
      "username": "Test_name",
      "firstName": "Name",
      "lastName": "Last",
      "email": "Test1@test.ru",
      "password": 1241,
      "phone": 70000000007,
      "userStatus": 0
    };

    response = await request('https://petstore.swagger.io')
      .post('/v2/user')
      .send(requestBody);
  });

  it('должен содержать все атрибуты в requestBody', () => {
    expect(requestBody).toEqual(expect.objectContaining({
      "id": expect.any(Number),
      "username": expect.any(String),
      "firstName": expect.any(String),
      "lastName": expect.any(String),
      "email": expect.any(String),
      "password": expect.any(Number),
      "phone": expect.any(Number),
      "userStatus": expect.any(Number)
    }));
  });

  it('должен вернуть код 200', async () => {
    expect(response.statusCode).toBe(200);
  });

  it('время ответа менее 500 мс', async () => {
    expect(response.status).toBeLessThan(500);
  });

  it('должен содержать ожидаемые атрибуты в теле ответа', async () => {
    expect(response.body).toHaveProperty('code');
    expect(response.body).toHaveProperty('type');
    expect(response.body).toHaveProperty('message');
  });
});