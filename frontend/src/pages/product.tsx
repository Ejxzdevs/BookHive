import React, { useState, useEffect } from 'react';
import { Container, Box, Typography } from "@mui/material";
import TableData from '../components/tables/TableData';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import AddBook from '../components/modals/AddBook';
import { getAllBooks } from '../services/bookApi';
import { Book } from '../types/bookInterface'

const Product: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const headers: Array<string> = ['Id', 'Title', 'Genre', 'Author', 'Date Added', 'Action'];
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAllBooks();
        setBooks(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching books');
        setLoading(false);
        console.error('Error fetching books:', err);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Container disableGutters maxWidth={false} className="h-[100vh] flex flex-row p-0 m-0">
      <Sidebar />
      <Box className="flex flex-grow flex-col">
        <Header />
        <Box className="flex justify-between items-center pt-5 px-6">
          <Typography sx={{fontFamily: 'Inter' , fontWeight: '500'}} variant="h5" color="initial">
            Book List
          </Typography>
          <AddBook />
        </Box>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <TableData headers={headers} data={books} />}
      </Box>
    </Container>
  );
};

export default Product;
