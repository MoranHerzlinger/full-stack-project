// BookListing.js
import React, {useState} from 'react';
import axios from 'axios';
import {Button, Container, Grid, List, ListItem, ListItemText, TextField, Typography,} from '@mui/material';
import {useNavigate} from "react-router-dom";
import TopReviewerBadge from "./TopReviewerBadge";

const BookListing = ({books, postBook, showTopReviewerBadge}) => {
    axios.defaults.withCredentials = true;

    const navigate = useNavigate();
    const [newTitle, setNewTitle] = useState([])
    const [newAuthor, setNewAuthor] = useState([])
    const [newPublicationYear, setNewPublicationYear] = useState([])
    const [newDescription, setNewDescription] = useState([])

    const onViewDetailsClicked = (bookId) => {
        navigate(`/book/${bookId}`)
    }

    return (
        <Container maxWidth="sm">
            <br/>
            <TopReviewerBadge
                showBadge={showTopReviewerBadge}/>
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                data-testid='bookListing-title'>
                Book Listing
            </Typography>
            {books.length === 0 ? (
                <Typography variant="body1" align="center" data-testid='bookListing-noBooksAvailable'>
                    No books available.
                </Typography>
            ) : (
                <List data-testid={'bookListing-list'}>
                    {books.map((book) => (
                        <ListItem key={book.id} disablePadding>
                            <ListItemText
                                primary={book.title}
                                secondary={book.author}
                                data-testid={`bookListing-book-${book.id}`}/>
                            <Button
                                variant="outlined"
                                onClick={() => onViewDetailsClicked(book.id)}
                                data-testid={`bookListing-viewDetailsBtn-${book.id}`}>
                                View Details
                            </Button>
                        </ListItem>
                    ))}
                </List>
            )}
            <Grid item xs={12}>
                <Typography variant="h6" data-testid={`bookListing-addBook-title`}>Add Book</Typography>
                <TextField
                    label="Title"
                    fullWidth
                    margin="normal"
                    onChange={(event) => {
                        setNewTitle(event.target.value);
                    }}
                    data-testid={`bookListing-addTitle`}/>
                <TextField
                    // error
                    label="Author"
                    fullWidth
                    margin="normal"
                    onChange={(event) => {
                        setNewAuthor(event.target.value);
                    }}
                    data-testid={`bookListing-addAuthor`}/>
                <TextField
                    label="Publication Year"
                    fullWidth
                    margin="normal"
                    onChange={(event) => {
                        setNewPublicationYear(event.target.value);
                    }}
                    data-testid={`bookListing-addPublicationYear`}
                />
                <TextField
                    label="Description"
                    fullWidth
                    margin="normal"
                    multiline
                    onChange={(event) => {
                        setNewDescription(event.target.value);
                    }}
                    data-testid={`bookListing-addDescription`}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => postBook(newTitle, newAuthor, newPublicationYear, newDescription)}
                    data-testid={`bookListing-addBook-submitBtn`}>
                    Submit Book
                </Button>
            </Grid>
        </Container>
    );
};

export default BookListing;

