import { Container, Table, TableBody, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { ReportArrProps } from '../../types/reportInterface'
import { deleteReport } from '../../services/reportApi';


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

const ReportData: React.FC<ReportArrProps> = ({ data }) => {

  const delReport = async (id: number) => {
          try {
            const response = await deleteReport({id});
            console.log('Report deleted successfully:', response);
            window.location.reload();
          } catch (error) {
            console.error('Error deleting Report:', error);
          }
        };

  

  
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
                    Report
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
            {data.map((report) => {
              return (
                <StyledTableRow key={report.report_id}>
                  <StyledTableCell align="center">{report.report_id}</StyledTableCell>
                  <StyledTableCell align="center">{report.report_name}</StyledTableCell>
                  <StyledTableCell align="center">
                    {new Date(report.report_date).toLocaleDateString()}
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
                      onClick={ ()=> delReport(report.report_id)}
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

export default ReportData;
