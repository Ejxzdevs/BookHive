import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Container, Box , Table, TableBody, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import ViewBook from '../modals/ViewBook';
import { Book } from '../../types/bookInterface'

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
                  <StyledTableCell align="center" className="space-x-2">
                    <Box>
                        <ViewBook data={[book]}/>
                    </Box>
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
