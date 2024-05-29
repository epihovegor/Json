const makePostRequest = require('./postRequest');
const requestData = require('./requestData');

  let response;

  beforeAll(async () => {
    response = await makePostRequest(requestData);
  });

  test('проверка ожидаемого результата', () => {
    expect(response.body).toMatchObject(requestData);
  });