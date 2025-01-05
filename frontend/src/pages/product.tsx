import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableData from '../components/tables/TableData';
import Sidebar from '../components/Sidebar';
import { Container, Box  } from "@mui/material"
import Header from '../components/Header';
import AddBook from '../components/modals/AddBook'
interface Book {
  book_id: number;
  book_title: string;
  genre: string;
  author: string;
  book_release: Date;
  [key: string]: string | number | Date;
}

  const Product: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const headers: Array<string> = ['Id', 'Title', 'Genre', 'Author', 'Date Added', 'Action'];

  useEffect(() => {
    axios
      .get('http://localhost:8080/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <Container disableGutters maxWidth={false} className="h-[100vh] flex flex-row p-0 m-0">
      <Sidebar/>
      <Box className="flex flex-grow flex-col  ">
        <Header/>
        <Box className="flex justify-end pt-5 pe-6">
          <AddBook/>
        </Box>
          <TableData headers={headers} data={books} />
      </Box>
    </Container>
  );
};

export default Product;
