import { Container, Table, TableBody, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import {  InquiryArrProps } from '../../types/inquiryInterface'
import { deleteInquiry } from '../../services/contactApi'


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

const InquiryData: React.FC<InquiryArrProps> = ({ data }) => {

  const delInquiry = async (id : number) => {
    try {
       const response = await deleteInquiry(id);
        console.log('News deleted successfully:', response);
        window.location.reload();
    } catch (error) {
      console.log('error while deleting request', error)
    }

  }
  
  return (
    <Container className="py-8 overflow-y-auto">
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
                    Date
                </TableCell>
                <TableCell align="center" >
                    Action
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((inquiry) => {
              return (
                <StyledTableRow key={inquiry.inquiry_id}>
                  <StyledTableCell align="center">{inquiry.inquiry_id}</StyledTableCell>
                  <StyledTableCell align="center">{inquiry.inquiry_email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {new Date(inquiry.inquiry_date).toLocaleDateString()}
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
                    <Button 
                      onClick={() => delInquiry(inquiry.inquiry_id)}
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
  )
}

export default InquiryData;
