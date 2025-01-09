import { Container, Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import {  RequestArrProps} from '../../types/requestInterface'

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

const RequestData: React.FC<RequestArrProps> = ({ data }) => {
  return (
    <Container className="py-8 overflow-y-auto">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="customized table">
          <TableHead>
            <TableRow>
                <TableCell align="center" >
                    Request ID
                </TableCell>
                <TableCell align="center" >
                    Fullname
                </TableCell>
                <TableCell align="center" >
                    Email
                </TableCell>
                <TableCell align="center" >
                    Phone Number
                </TableCell>
                <TableCell align="center" >
                    Date
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((request) => {
              return (
                <StyledTableRow key={request.request_id}>
                  <StyledTableCell align="center">{request.request_id}</StyledTableCell>
                  <StyledTableCell align="center">{request.fullname}</StyledTableCell>
                  <StyledTableCell align="center">{request.request_email}</StyledTableCell>
                  <StyledTableCell align="center">{request.phone_number}</StyledTableCell>
                  <StyledTableCell align="center">
                    {new Date(request.request_date).toLocaleDateString()}
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

export default RequestData
