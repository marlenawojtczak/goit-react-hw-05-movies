import { fetchReviews } from 'services/fetchData';
import { Loader } from '../../components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewList, ReviewItem } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const reviews = await fetchReviews(movieId);
        setReviews(reviews);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching reviews:', error);
      }
    };
    fetchData();
  }, [movieId]);

  if (!reviews) {
    return null;
  }
  if (!reviews || reviews.length === 0) {
    return <p>No reviews available.</p>;
  }

  return (
    <>
      {isLoading && <Loader />}
      <ReviewList>
        {reviews.map(review => (
          <ReviewItem key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </ReviewItem>
        ))}
      </ReviewList>
    </>
  );
};

export default Reviews;
