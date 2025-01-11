import { Container, Table, TableBody, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import {  NewsArrProps } from '../../types/newsInterface'
import { deleteNews } from '../../services/newsApi';
import ViewNews from '../modals/ViewNews';
import EditNews from '../modals/EditNews';



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

const NewsData: React.FC<NewsArrProps> = ({ data }) => {

   const delNews = async (id: number) => {
        try {
          const response = await deleteNews({id});
          console.log('Request deleted successfully:', response);
          window.location.reload();
        } catch (error) {
          console.error('Error deleting Request:', error);
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
                    Title
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
            {data.map((news) => {
              return (
                <StyledTableRow key={news.news_id}>
                  <StyledTableCell align="center">{news.news_id}</StyledTableCell>
                  <StyledTableCell align="center">{news.news_title}</StyledTableCell>
                  <StyledTableCell align="center">
                    {new Date(news.news_date).toLocaleDateString()}
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
                    <EditNews data={[news]}/>
                    <ViewNews data={[news]}/>
                    <Button 
                      onClick={()=> delNews(news.news_id)}
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

export default NewsData;
