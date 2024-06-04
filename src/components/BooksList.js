import React, { useState, useEffect } from 'react';
import './BooksList.css';
import apiClient from '../axios';
import { Link } from 'react-router-dom';

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    apiClient.get('/books')
      .then(response => {
        setBooks(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the books:', error);
      });
  }, []);

  const filteredBooks = books.filter(book =>
    book.attributes.Title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Books</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search books"
        />
      </div>
      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.attributes.Title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;

