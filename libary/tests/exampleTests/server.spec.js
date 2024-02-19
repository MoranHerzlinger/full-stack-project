const {test, expect} = require("@playwright/test");
const {baseUrl} = require('../../constants');
const {Books} = require("../../server/model/Books");

function randomStr() {
    return (Math.random() + 1).toString(36).substring(7);
}

test('Server - return all the books with status 200', async ({request}) => {
    const book = await request.get(`${baseUrl.server}/books`);
    expect(book.status()).toBe(200);
    expect(await book.json()).toEqual({Books})
});

test('Server - post book should return 403 if there is no user on the cookie', async ({request}) => {
        const book = await request.post(`${baseUrl.server}/books`);
        expect(book.status()).toBe(403);
    }
);