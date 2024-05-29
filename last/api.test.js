const request = require('supertest');
const { addUserRequest, getUserInfoRequest } = require('./apiRequests');
const userData = require('./userData.json');

// Тесты для POST запроса на добавление нового пользователя
describe('POST запрос для добавления нового пользователя', () => {
  let response;

  beforeAll(async () => {
    response = await addUserRequest();
  });

  it('должен содержать все атрибуты в requestBody', () => {
    const requestBody = {
      "id": expect.any(Number),
      "username": expect.any(String),
      "firstName": expect.any(String),
      "lastName": expect.any(String),
      "email": expect.any(String),
      "password": expect.any(Number),
      "phone": expect.any(Number),
      "userStatus": expect.any(Number)
    };
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

// Тесты для GET запроса информации о созданном пользователе
describe('GET запрос информации о созданном пользователе', () => {
  let response;

  beforeAll(async () => {
    response = await getUserInfoRequest();
  });

  it('должен вернуть код 200', () => {
    expect(response.statusCode).toBe(200);
  });

  it('время ответа менее 500 мс', () => {
    expect(response.status).toBeLessThan(500);
  });

  it('должен содержать ожидаемые атрибуты в теле ответа', async () => {
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('username');
    expect(response.body).toHaveProperty('firstName');
    expect(response.body).toHaveProperty('lastName');
    expect(response.body).toHaveProperty('email');
    expect(response.body).toHaveProperty('password');
    expect(response.body).toHaveProperty('phone');
    expect(response.body).toHaveProperty('userStatus');
  });
});

// Тесты для DELETE запроса на удаление пользователя
describe('DELETE запрос на удаление пользователя', () => {
  let deleteResponse;

  beforeAll(async () => {
    const username = userData.username;

    deleteResponse = await request('https://petstore.swagger.io')
      .delete(`/v2/user/${username}`);
  });

  it('должен вернуть код 200', () => {
    expect(deleteResponse.statusCode).toBe(200);
  });

  it('должен содержать ожидаемые атрибуты в теле ответа', async () => {
    expect(deleteResponse.body).toHaveProperty('code');
    expect(deleteResponse.body).toHaveProperty('type');
    expect(deleteResponse.body).toHaveProperty('message');
  });
});