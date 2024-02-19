// App.js
import React, {useEffect, useState} from 'react';
import BookListing from './BookListing';
import BookDetails from './BookDetails';
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import axios from "axios";
import {AppBar} from "@mui/material";
import FilterOptions from "./FilterOptions";


const App = () => {
    axios.defaults.withCredentials = true;
    const baseURL = "http://localhost:3080";

    const [userId, setUserId] = useState([]);
    const [books, setBooks] = useState([]);
    const[userReviews, setUserReviews] = useState(0);

    //filter
    const [ratingValue, setRatingValue] = useState(0);
    const [yearValue, setYearValue] = useState([1900, 2023]);
    const [showAllBooks, setShowAllBooks] = useState(false);

    useEffect(() => {
        getUser();
        getBooks();
        getUserCountOfReviews();
    }, []);

    const getBooks = () => {
        axios.get(`${baseURL}/books`)
            .then((response) => setBooks(response.data.Books))
            .catch((error) => console.error(error));
    }

    const postBook = (title, author, publicationYear, description) => {
        axios.post(`${baseURL}/books`, {
            book: {title, author, publicationYear, description}
        }, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        }).then((response) => {
            setBooks([...books, response.data.book])
        }).catch(error => {
            console.log(error)
        });

    }

    const getUser = () => {
        axios.get(`${baseURL}/user`).then((response) => {
            setUserId(response.data.id);
        }).catch(error => {
            console.log(error)
        });
    }

    const getUserCountOfReviews = () => {
        axios.get(`${baseURL}/user/reviewsCount`).then((response) => {
            console.log(response.data);
            setUserReviews(Number(response.data));
            //console.log(response.data);
        }).catch(error => {
            console.log(error)
        });
    }


    // filter
    const handleFilterChange = (publicationYear, rating) => {
        const params = [];
        if (publicationYear) {
            params.push(`after=${publicationYear[0]}&before=${publicationYear[1]}`);
            setYearValue(publicationYear);
        }
        if (rating !== null) {
            params.push(`rating=${rating}`);
            setRatingValue(rating);
        }

        let url = `${baseURL}/books${params ? `?${params.join('&')}` : ``}`;
        axios.get(url)
            .then((response) => {
                setBooks(response.data.Books)
                
            })
            .catch((error) => console.error(error));
    }

    const renderToolBar = () => {
        return (
            <AppBar position="sticky" color='inherit'>
                <FilterOptions
                    handleFilterChange={handleFilterChange}
                    ratingValue={ratingValue}
                    setRatingValue={setRatingValue}
                    yearValue={yearValue}
                    setYearValue={setYearValue}
                    />
            </AppBar>
        );
    }

    return (
        <div className="App">
            {renderToolBar()}
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <BookListing
                                books={books}
                                postBook={postBook}
                                //setUserReviews={setUserReviews}
                                showTopReviewerBadge={ (userReviews > 5) ? true : false 
                                     // need to be changed the condition based on the instructions
                                }/>
                        }
                    />
                    <Route
                        path="/book/:bookId"
                        element={
                            <BookDetails/>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
};

export default App;

