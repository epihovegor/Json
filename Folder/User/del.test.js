const request = require('supertest');
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