import { Container, Table, TableBody, TableContainer, TableHead, TableRow, Paper, Box} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { getAllRequests } from '../../services/requestApi';
import { Request } from '../../types/requestInterface';
import { useEffect, useState } from 'react';

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

const LatestTransaction = () => {

    const [requests, setrequests] = useState<Request[]>([]);
        
          useEffect(() => {
            const fetchRequest = async () => {
              try {
                const data = await getAllRequests();
                setrequests(data)
              } catch (err) {
                console.error('Error fetching Request:', err);
              }
            };
        
            fetchRequest();
          },[]);
    const ApprovedRequest = requests.filter(request => request.request_status === 'Approved').slice(0, 10);
  
  return (
    <Container sx={{margin: 0}} className="Inter border-2 border-[#19B37E] overflow-y-auto rounded-sm shadow-md bg-[#FFFFFF]" disableGutters maxWidth={false}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="customized table">
          <TableHead>
            <TableRow>
                <TableCell align="center" >
                    ID
                </TableCell>
                <TableCell align="center" >
                    Email
                </TableCell>
                <TableCell align="center" >
                    Image
                </TableCell>
                <TableCell align="center" >
                    Book title
                </TableCell>
                <TableCell align="center" >
                    Date
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ApprovedRequest.map((request) => {
              return (
                <StyledTableRow key={request.request_id}>
                  <StyledTableCell align="center">{request.request_id}</StyledTableCell>
                  <StyledTableCell align="center">{request.request_email}</StyledTableCell>
                  <StyledTableCell >
                    <Box className="flex items-center justify-center" >
                    <img
                        className="h-[50px] w-[60px]"
                        src={`http://localhost:8080/${request.image_url}`}
                        alt={request.book_title}
                    />
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align="center">{request.book_title}</StyledTableCell>
                  <StyledTableCell align="center">
                    {new Date(request.request_date).toLocaleDateString()}
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default LatestTransaction;
