# Welcome to your Wix Enter exam

## Prerequisites:
- NPM (version 8 or 9)
- Node (version 18)

## Instructions
- open a terminal and navigate to this project's dir
- run `npm install` (in case of errors check the troubleshooting section of this README)
- run `npm start`
- to check out example tests run `npm test` while your app is running

## Submitting exam instructions
When you're ready to submit your exam:
1. Open the project's directory in your terminal
2. run `rm -rf node_modules`
3. run `rm -rf client/node_modules`
4. run `rm -rf server/node_modules`
5. zip your project's directory
6. email your zip file to `wixenter@wix.com`
   1. You should preferably send this email from the email you used to apply to Wix Enter
   2. The title should be `Wix Enter exam submission - {Your full name}`
   3. The content should include `email: {The email address you used for your application}`

## Troubleshooting
- If your app stops working properly and you see errors in the terminal restart your app by killing the process and running `npm start` again
- Check your browser console for errors
- If `npm install` failes for you check your node version (`node -v`) and your npm version (`npm -v`) to make sure you meet the requirements. If you changed your node or npm versions, delete the `node_modules` dir, and rerun `npm install`

## Requirements:

### Details
1. You have a button for each book on the books listing page to allow users to route to the book details page.
   This page should include the title, author and publication year, as well as the book description and reviews. 
   Currently the reviews only show 1 hardcoded review. You should get it to show the actual reviews of the specific book.

### Reviews
1. Add a functionality to support adding a review for a book, by submitting the review form with fields for reviewer name, content and rating of the book.

2. Add validations on the creation form:
   - ranking should be between 1 to 5.
   - content should not exceed 200 characters.
3. Top reviewer badge - Add a functionality to show the top reviewer badge on the books listing page, only for reviewers who reviewed more than 5 different books.

### Filtering
1. By publication years - selecting a range of publication years, should change the url and show only books that were published during those years. Currently this only works if the publication year is the start year of the selected range. You need to fix this bug
2. By book ranking - clicking on ranking range from a menu dropdown should change the url and show only books with higher average ranking.
   Currently clicking on a dropdown item will redirect but no filtering will occur.
3. Support filtering by both ranking and publication years by url. For example this url should show only books published between 1990 and 2020 with an average rating of at least 3 `http://localhost:3000/?after=1990&before=2020&rating=3`

### Search
1. Implement full word search functionality for books based on the description and the title - meaning, a book should be displayed only if the title and/or the description include the search term as a full word.
2. Bonus - make sure your solution is performant.
