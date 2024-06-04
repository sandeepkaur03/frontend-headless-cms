import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksList from './components/BooksList';
import BookDetail from './components/BookDetail';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<BooksList />} />
      <Route path="/book/:id" element={<BookDetail />} />
    </Routes>
  </Router>
);

export default AppRouter;
