const express = require('express');
const {Books} = require("./model/Books");
const {Reviews} = require("./model/Reviews");
const {Users} = require("./model/Users");
const { v4: uuidv4 } = require("uuid");
const app = express();
app.use(express.json());
const cookieParser = require("cookie-parser");
var bodyParser = require('body-parser')
const cors = require('cors');

const {baseUrl} = require('../constants');

const port = 3080;

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());

const corsOptions = {
    origin: `${baseUrl.client}`,
    credentials: true
}

app.get("/", cors(corsOptions), (req, res) => {
    res.send("Welcome to your Wix Enter exam!");
});

app.get("/user", cors(corsOptions), (req, res) => {
    const userId = req.cookies?.userId || uuidv4();

    res.cookie("userId", userId).send({id: userId});
});


// get user different reviews count
app.get("/user/reviewsCount", cors(corsOptions), (req, res) => {
    
    const userId = req.cookies?.userId;
    if (!userId) {
        res.status(403).end();
        return;
    }
    
    // add user to the users list if it doesn't exist
   
    if (!Users[userId]) {
        Users[userId] = {
            reviews : new Set(),
          }
    }
    
    console.log(Users[userId].reviews.size)
    res.send(Users[userId].reviews.size.toString());
});


// filter
app.get('/books', cors(corsOptions), (req, res) => {
    let booksToReturn = Books;
    const {before} = req.query;
    const {after} = req.query;
    if (after) {
        booksToReturn = booksToReturn.filter((book) => book <= after && book >= before);
    }

    if (req.query.popularity) {
        const popularity = Number(req.query.popularity);
        booksToReturn = booksToReturn.filter(book => Reviews[book.id].rating === popularity)
    }


    res.send({Books: booksToReturn});
});

app.post('/books', cors(corsOptions), (req, res) => {
    const userId = req.cookies?.userId;
    if (!userId) {
        res.status(403).end();
        return;
    }

    const {book} = req.body;
    if (!book) {
        res.status(400).json({message: 'Book is missing'}).end();
        return;
    }

    const {title ,author, publicationYear ,description} = book;
    if (!(title && author && publicationYear && description)) {
        res.status(400).json({message: 'Bad request'}).end();
        return;
    }

    const newBook = {
        title ,author, publicationYear ,description, id: uuidv4()
    }
    Books.push(newBook);
    res.send({book: newBook}).status(200).end()
});



app.get('/books/:bookId', cors(corsOptions), (req, res) => {
    const userId = req.cookies?.userId;
    if (!userId) {
        res.status(403).end();
        return;
    }

    const {bookId} = req.params
    const book = Books.find((book) => book.id === bookId)
    if (!book) {
        res.status(400).json({message: 'Book not found'}).end();
        return;
    }

    res.send({book});
});

//get reviews of the book
app.get('/books/:bookId/review', cors(corsOptions), (req, res) => {
    
    const userId = req.cookies?.userId;
    if (!userId) {
        res.status(403).end();
        return;
    }

    const book = Books.find((book) => book.id === req.params.bookId);  // find the book
   
    if (!book) {
        res.status(400).json({message: 'Book not found'}).end();
        return;
    }
    const reviews = Reviews[book.id];  // get the reviews of the book
    
    //console.log(reviews.length);
    res.send(reviews);

});

//add review to the book
app.post('/addReview/:bookId', cors(corsOptions), (req, res) => { 
    console.log(1);
    const userId = req.cookies?.userId;
    if (!userId) {
        res.status(400).end();
        return;
    }

    const {bookId} = req.params;
    
    const {review} = req.body;

    if (!review) {
        res.status(401).json({message: 'Review is missing'}).end();
        return;
    }

    const {title ,content, rating} = review;
        
    if (!(title && content && rating)) {
        res.status(400).json({message: 'Bad request'}).end();
        return;
    }
    
    const newReview = {
        title ,content, rating
    }

    //check the length of the content
    if (content.length > 200) {
        res.status(400).json({message: 'Bad request'}).end();
        return;
    }
    
     //check the rating 
     if (rating > 5 || rating < 1) {
        res.status(400).json({message: 'Bad request'}).end();
        return;
    }

    //add the review to the reviews array of the book

    Reviews[bookId] = Reviews[bookId] || [];  // if the book doesn't have reviews yet, create an empty array
    
    Reviews[bookId].push(newReview);  // add the review to the reviews array of the book

    console.log(Reviews[bookId]);

    //after sucsees to post, update count of reviews to the user
    
    // if the user doesn't add reviews yet
    if(!Users[userId]){
        Users[userId] = {
          reviews : new Set(),
        }
      }
    // Add the book reviews to the user's reviewes set
    Users[userId].reviews.add(bookId);
    console.log(Users[userId].reviews.size);
    
    res.send({newReview}).status(200).end();
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
