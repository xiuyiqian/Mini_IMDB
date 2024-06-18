import { useEffect, useRef } from "react";
import api from "../../api/axiosConfig"
import {useParams} from 'react-router-dom';
import {Container, Row, Col, Button} from 'react-bootstrap';
import ReviewForm from "./ReviewForm";

import React from 'react'

const Review = ({getMovieData,movie,reviews,setReviews}) => {

    const reviewText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(()=>{
        getMovieData(movieId);
    },[])

    const addReview = async (e) =>{
        e.preventDefault();

        const reviewCurrent = reviewText.current;

        try
        {
            const response = await api.post("/api/v1/reviews",{reviewBody:reviewCurrent.value,imdbId:movieId});
            const updatedReviews = [...reviews, {body:reviewCurrent.value}];
            reviewCurrent.value = "";

            setReviews(updatedReviews);
        }
        catch(err)
        {
            console.error(err);
        }
        
    }

  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img src={movie?.poster} alt="" />
            </Col>
            <Col>
                    <Row>
                        <Col>
                            <ReviewForm handleSubmit={addReview} reviewText={reviewText} labelText = "Write a Review?" />  
                        </Col>
                    </Row>

                {
                    reviews?.map((r) => {
                        return(
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                    <Col><Button variant="warning"></Button></Col>
                                </Row>
                                <Row>
                                    <Col><hr /></Col>
                                </Row>                                
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}

export default Review
