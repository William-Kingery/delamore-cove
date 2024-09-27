
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Review.scss";


const Review = ({placeId}) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            const API_KEY = process.env.GOOGLE_KEY;
            const placeId = 'ChIJjQoZOXDLcm0R0u3UNJxTAes';
            try {
                const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
                    params: {place_id: placeId,
                        key: API_KEY
                    }
                });
                console.log(response);
                setReviews(response.data.result.reviews || []);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchReviews();
    }, [placeId]);

    if (loading) return <p>Loading...🫠</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Google Reviews</h1>
            {reviews.map((review, index) => (
                <div key={index}>
                    <h2>{review.author_name}</h2>
                    <p>Rating: {review.rating}</p>
                    <p>{review.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Review;

