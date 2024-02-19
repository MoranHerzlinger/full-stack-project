// BookDetails.js
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from 'axios';
import {Button, Container, Grid, Paper, TextField, Typography, Card, CardContent, Box, Rating} from '@mui/material';

const BookDetails = () => {
    const {bookId} = useParams();
    const navigate = useNavigate();
    const [newReviewer, setNewReviewer] = useState('');
    const [newContent, setNewContent] = useState('');
    const [newRating, setNewRating] = useState(1);
    const [book, setBook] = useState([]);
    const [reviews, setReviews] = useState([]); // reviews
   

    const baseURL = "http://localhost:3080";

    useEffect(() => {
        getBook();
        getReviews();
    },[])

    const getBook = () => {
        axios.get(`${baseURL}/books/${bookId}`)
            .then((response) => setBook(response.data.book))
            .catch((error) => console.error(error));
    }

    // get the reviews of the book
    const getReviews = () => {
        axios.get(`${baseURL}/books/${bookId}/review`)
            .then((response) => {
                setReviews(response.data)
                
            })
            .catch((error) => console.error(error));
    };

    // add a new review
    const handleSubmit = () => {
        console.log(1)
        if(newReviewer === '' || newContent === '' || newRating === '' || newRating < 1 || newRating > 5){
          alert("please fill all the required fields!");
          return;
        }
        axios.post(`${baseURL}/addReview/${bookId}`,
          {
            review:
            {
              title : newReviewer,
              content : newContent,
              rating : newRating
            },
        },{
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            }
          )
          .then((response) => {
            console.log(response.data)
            setReviews(reviews => [...reviews, response.data.newReview]);
          })
          .catch((error) => console.error(error));
          
          // reset the fields
            setNewReviewer('');
            setNewContent('');
            setNewRating(1);
      };

    
    const onBookListBtn = () => {
        navigate('/')
    }

    
    const renderReview = () => {
        return ( 
            <Card>
                {reviews ? 
                reviews.map(review => (
                <CardContent>
                    <Typography variant="h5" component="h2"> 
                       {review.title}
                    </Typography>
                    <Box display="flex" alignItems="center" mb={2} data-testid={'review-rating'}>
                        <Rating value={review.rating}  readOnly/>
                    </Box>
                    <Typography variant="body2" component="p">
                     {review.content}  
                    </Typography>  
                </CardContent>
                 ))
                : ""}
            </Card>
            
        )
    }


    return (
        <Container maxWidth="sm">
            <br/>
            <Typography variant="h4" align="center" gutterBottom data-testid='bookDetails-title'>
                Book Details
            </Typography>
            {book ? (
                <Paper sx={{p: 2}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h6" data-testid={`bookDetails-title-${book.id}`}>Title:</Typography>
                            <Typography variant="body1"
                                        data-testid={`bookDetails-titleContent-${book.id}`}>{book.title}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" data-testid={`bookDetails-author-${book.id}`}>Author:</Typography>
                            <Typography variant="body1"
                                        data-testid={`bookDetails-authorContent-${book.id}`}>{book.author}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" data-testid={`bookDetails-publicationYear-${book.id}`}>Publication
                                Year:</Typography>
                            <Typography variant="body1"
                                        data-testid={`bookDetails-publicationYearContent-${book.id}`}>{book.publicationYear}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6"
                                        data-testid={`bookDetails-description-${book.id}`}>Description:</Typography>
                            <Typography variant="body1"
                                        data-testid={`bookDetails-descriptionContent-${book.id}`}>{book.description}</Typography>
                        </Grid>
                        <Grid item xs={12} data-testid={`bookDetails-reviews`}>
                            <Typography variant="h6" >Reviews:</Typography>
                            {
                                renderReview()
                            }
                            
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" data-testid={`bookDetails-addReview-${book.id}`}>Add
                                Review</Typography>
                            <TextField
                                label="Name"
                                fullWidth
                                margin="normal"
                                onChange={(event) => {
                                    setNewReviewer(event.target.value);
                                }}
                                data-testid={`bookDetails-reviewNameField-${book.id}`}/>
                            <TextField
                                label="Review"
                                fullWidth
                                margin="normal"
                                multiline
                                onChange={(event) => {
                                    setNewContent(event.target.value);
                                }}
                                data-testid={`bookDetails-reviewContentField-${book.id}`}/>
                            <TextField
                                label="Rating"
                                fullWidth
                                margin="normal"
                                type="number"
                                onChange={(event) => {
                                    setNewRating(event.target.value);
                                }}
                                inputProps={{min: 1, max: 5}}
                                data-testid={`bookDetails-reviewRatingField-${book.id}`}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleSubmit()}
                                data-testid={`bookDetails-submitReviewBtn-${book.id}`}>
                                Submit Review
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            ) : (
                <Typography variant="body1" align="center">
                    Loading book details...
                </Typography>
            )}
            <br/>
            <Button variant="contained" color="primary" onClick={onBookListBtn} data-testid='filters-bookListBtn'>
                Book Listing
            </Button>
        </Container>
    );
};

export default BookDetails;

