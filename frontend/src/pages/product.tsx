import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import TableData from '../components/tables/TableData';

interface Book {
  book_id: number;
  book_title: string;
  book_description: string;
  book_release: Date;
  [key: string]: string | number | Date;  // Allow flexible keys
}

const Product: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const headers: Array<string> = ['Id', 'Book Title', 'Description', 'Author', 'Date Release'];

  useEffect(() => {
    axios
      .get('http://localhost:8080/books')
      .then((response) => {
        setBooks(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <Container>
      <TableData headers={headers} data={books} />
    </Container>
  );
};

export default Product;
