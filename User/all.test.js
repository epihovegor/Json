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

//GET запрос информации о созданом пользователе + тесты
describe('GET запрос информации о созданом пользователе', () => {
    let response;
  
    beforeAll(async () => {
      response = await request('https://petstore.swagger.io')
        .get('/v2/user/Test_name');
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

// DELETE запрос на удаление пользователя
describe('DELETE запрос на удаление пользователя', () => {
    let deleteResponse;

    beforeAll(async () => {
      deleteResponse = await request('https://petstore.swagger.io')
        .delete('/v2/user/Test_name');
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