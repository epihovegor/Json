const request = require('supertest');
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