const request = require('supertest');
const userData = require('./userData.json');

let newUserId;

// POST запрос на добавление нового пользователя
const addUserRequest = async () => {
  const requestBody = userData;

  const response = await request('https://petstore.swagger.io')
    .post('/v2/user')
    .send(requestBody);

  // Сохраняем значение message из ответа POST в переменной newUserId
  // newUserId = response.body.message;
  
  return response;
}

// GET запрос информации о созданном пользователе
const getUserInfoRequest = async () => {
  const username = userData.username;

  const response = await request('https://petstore.swagger.io')
    .get(`/v2/user/${username}`);

  // const responseBody = response.body; // Получаем тело ответа

  // // Сравниваем значение username с телом ответа
  // if (username === responseBody.username) {
  //   console.log('Значение username совпадает с телом ответа');
  // } else {
  //   console.log('Значение username не совпадает с телом ответа');
  // }

  return response;
}

module.exports = {
  addUserRequest,
  getUserInfoRequest
};