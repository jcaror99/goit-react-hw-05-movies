import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from './../../services/getReviews';

const Reviews = () => {
  const { moviesId } = useParams();
  const [review, setReview] = useState([]);

  const fetchReview = async moviesId => {
    try {
      const response = await getReviews(moviesId);
      console.log(response);
      setReview(response);
    } catch (error) {
      console.error('Error fetching review:', error);
      throw new Error('Failed to fetch review');
    }
  };

  useEffect(() => {
    fetchReview(moviesId);
  }, [moviesId]);

  return (
    <div>
      <ul>
        {review.map(element => (
          <div key={element.id}>
            <h3>{`Author: ${element.author}`}</h3>
            <li>{element.content}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
