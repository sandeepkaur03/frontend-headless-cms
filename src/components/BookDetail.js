import React, { useState, useEffect } from 'react';
import apiClient from '../axios';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    apiClient.get(`/books/${id}`)
      .then(response => {
        setBook(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the book:', error);
      });
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{book.attributes.Title}</h1>
      <p><strong>Author:</strong> {book.attributes.Author}</p>
      <p><strong>Year:</strong> {book.attributes.Year}</p>
      <p><strong>Rating:</strong> {book.attributes.Rating}</p>
      <p><strong>Genre:</strong> {book.attributes.Genre}</p>
      {book.attributes.Review.map((reviewPart, index) => (
        <p key={index}>{reviewPart.children.map(child => child.text).join(' ')}</p>
      ))}
    </div>
  );
};

export default BookDetail;
