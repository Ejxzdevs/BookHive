import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Container, Table, TableBody, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import ViewBook from '../modals/ViewBook';
import { Book } from '../../types/bookInterface';
import { deleteBook as deleteBookApi } from '../../services/bookApi'; // Renaming to avoid naming conflict

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

  const deleteBook = async (id: number) => {
    try {
      const response = await deleteBookApi({id});
      console.log('Book deleted successfully:', response);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <Container className="py-8 overflow-y-auto">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {headers.map((header, index) => {
                return <TableCell align="center" key={index}>{header}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((book) => {
              return (
                <StyledTableRow key={book.book_id}>
                  <StyledTableCell align="center">{book.book_id}</StyledTableCell>
                  <StyledTableCell align="center">{book.book_title}</StyledTableCell>
                  <StyledTableCell align="center">{book.genre}</StyledTableCell>
                  <StyledTableCell align="center">{book.author}</StyledTableCell>
                  <StyledTableCell align="center">
                    {new Date(book.book_release).toLocaleDateString()}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <ViewBook data={[book]} />
                    <Button 
                      onClick={() => deleteBook(book.book_id)} // Pass the book ID correctly
                      variant="outlined" 
                      color="error" 
                      sx={{ padding: 0, textTransform: 'none', width: '60px', height: '30px' }}
                    >
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
