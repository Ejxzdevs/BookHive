import React , {useState , useEffect } from 'react';
import axios from 'axios';
import { Container , Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography , Button } from '@mui/material';

interface books {
  book_id: number
  book_title: string
  book_description: string
  book_release: Date
}
const Product : React.FC= () => {

  const [books, setBooks] = useState<books[]>([]);

  useEffect(() => {
    // Fetch books from the API
    axios.get('http://localhost:8080/books')
      .then((response) => {
        setBooks(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);


  return (
    <Container >
      <Box>
        <Typography variant="body1" color="initial">
          Hello
        </Typography>
      </Box>
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Book Title</TableCell>
            <TableCell>Book Title</TableCell>
            <TableCell>Book Description</TableCell>
            <TableCell>Book Author</TableCell>
            <TableCell>Book Release</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      {books.map((book)=>{
        return (
            <TableRow key={book.book_id}>
              <TableCell className='' >{book.book_id}</TableCell>
              <TableCell className='' >{book.book_title}</TableCell>
              <TableCell>{book.book_description}</TableCell>
              <TableCell>{book.book_description}</TableCell>
              <TableCell>{new Date(book.book_release).toLocaleDateString()}</TableCell>
              <TableCell>
                    <Button variant="contained" color="primary" >edit</Button>
                    <Button variant="outlined" color="secondary" >delete</Button>
            </TableCell>
          </TableRow>
        )
      })}
       </TableBody>
      </Table>
    </TableContainer>
    </Container>
  )
}

export default Product
