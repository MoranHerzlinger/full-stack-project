const {test, expect} = require("@playwright/test");
const {baseUrl} = require('../../constants');

function randomStr() {
    return (Math.random() + 1).toString(36).substring(7);
}

const addBook = async (page, title, author, publicationYear, description) => {
    const addTitle = page.getByTestId(`bookListing-addTitle`).locator('input');
    await addTitle.fill(title);
    const addAuthor = page.getByTestId(`bookListing-addAuthor`).locator('input');
    await addAuthor.fill(author);
    const addPublicationYear = page.getByTestId(`bookListing-addPublicationYear`).locator('input');
    await addPublicationYear.fill(publicationYear.toString());
    const addDescription = page.getByTestId(`bookListing-addDescription`).locator('textarea').first();
    await addDescription.fill(description);

    const submitReviewBtn = page.getByTestId(`bookListing-addBook-submitBtn`);
    await submitReviewBtn.click();
}

test('Book listing - add book to the book list', async ({browser}) => {
    const userId = randomStr();
    const context = await browser.newContext();
    const page = await context.newPage();
    await context.addCookies([{name: "userId", value: userId, url: `${baseUrl.client}`}]);
    await page.goto(baseUrl.client)

    const title = randomStr();
    const author = randomStr();
    const publicationYear = 2020
    const description = randomStr()

    await addBook(page, title, author, publicationYear, description);

    const newBookTitle = page.locator('li').last().locator('span').first()
    await expect(newBookTitle).toHaveText(title)
});