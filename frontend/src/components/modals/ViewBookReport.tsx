import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, Button, Dialog, Box, Typography } from '@mui/material';
import React , { useEffect, useState } from 'react';
import { getAllBooks } from '../../services/bookApi';
import { Book } from '../../types/bookInterface';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../../assets/books.png';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";


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

interface ViewBookReportProps {
    date: Date;
  }

const ViewBookReport: React.FC<ViewBookReportProps> = ({date}) => {
    const [data, setData] = useState<Book[]>([]);
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const fetchBooks = async () => {
          try {
            const data = await getAllBooks();
            setData(data);
          } catch (err) {
            console.error('Error fetching books:', err);
          }
        };
        fetchBooks();
    },[]);

    const totalAvailable = data.filter(item => item.book_status === 'Available').length;
    const totalNotAvailable = data.filter(item => item.book_status === 'Not Available').length;
    const printRef = React.useRef(null);

    const download = async () => {
        const element = printRef.current;
        console.log(element);

        if(!element){
            return null;
        }

        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: 'a4'
          });
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(data, 'PNG' , 0 , 0 , pdfWidth , pdfHeight );
        pdf.save('example.pdf')
    }
  return (
    <Box sx={{ margin: 0 , padding: 0}} >
        <Button
            onClick={handleClickOpen}
            variant="outlined"
            color="primary"
            sx={{ 
            padding: 0, 
            textTransform: 'none', 
            height: '30px' 
                }}
            >
        View
      </Button>
        <Dialog open={open}   sx={{
        '& .MuiDialog-paper': {
          width: '1000px',
          height: '500px',
          maxWidth: 'none',
        },
        '& .MuiDialogContent-root': {
          padding: 0,
        },
      }} >
        <Box className="flex justify-end pe-2">
          <Button color="primary" onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Box>
        <Box ref={printRef} className="py-5" >
        <Box className="flex flex-row items-center gap-1 ms-4 p-0 m-0">
          <img src={Logo} alt="LOGO" className='h-[35px]'/>
          <Typography  
          sx={{ fontFamily: 'Rubik Vinyl',
            color: '#19B37E',
            fontWeight: '500',
            fontSize: '16px'
           }}>
            BookHive
          </Typography>
        </Box>
        <Box className="ps-4" >
        <Typography  sx={{fontFamily: 'Inter' , fontWeight: 600 , marginTop: 2 }} variant="body2" component="div">
            Date Generated: {" "}
            {date
              ? isNaN(new Date(date).getTime())
                ? 'Invalid release date'
                : new Date(date).toLocaleDateString()
              : 'No release date'}
          </Typography>
        </Box>
        <Box className="flex flex-row items-center justify-start gap-5 py-4 px-4">
            <Typography variant="body2" color="initial">
                Book Available: {totalAvailable}
            </Typography>
            <Typography variant="body2" color="initial">
                Book Not Available: {totalNotAvailable}
            </Typography>
            <Typography variant="body2" color="initial">
                Total Book: {totalNotAvailable + totalAvailable}
            </Typography>
        </Box>
      <TableContainer sx={{ paddingX: 2 , boxShadow: 0  }} component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
                <TableCell align="center" >
                    Id
                </TableCell>
                <TableCell align="center" >
                    Title
                </TableCell>
                <TableCell align="center" >
                    Genre
                </TableCell>
                <TableCell align="center" >
                    Author
                </TableCell>
                <TableCell align="center" >
                    Date
                </TableCell>
                <TableCell align="center" >
                    Status
                </TableCell>
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
                  <StyledTableCell align="center">{book.book_status}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
      <Box className="mt-2 flex justify-end pe-5" >
        <Button onClick={download} variant='outlined' color="primary">DOWNLOAD</Button>
      </Box>
    </Dialog>
</Box>
  )
}

export default ViewBookReport


