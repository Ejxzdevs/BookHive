import React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Container, Table, TableBody, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// Define books interface here
interface Book {
  book_id: number;
  book_title: string;
  book_description: string;
  book_release: Date;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '& td, & th': {
    height: '40px', 
    padding: '8px',
    boxSizing: 'border-box',
  },
}));

interface TableProps {
  headers: string[];
  data: Book[];
}

const TableData: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <Container className="h-screen flex justify-center items-center">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {headers.map((header, index) => {
                return <TableCell key={index}>{header}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((book) => {
              return (
                <StyledTableRow key={book.book_id}>
                  <StyledTableCell component="th" scope="row">
                    {book.book_id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{book.book_title}</StyledTableCell>
                  <StyledTableCell align="right">{book.book_description}</StyledTableCell>
                  <StyledTableCell align="right">{book.book_description}</StyledTableCell>
                  <StyledTableCell align="right">
                    {new Date(book.book_release).toLocaleDateString()}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button variant="contained" color="primary">
                      Edit
                    </Button>
                    <Button variant="outlined" color="secondary">
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TableData;
