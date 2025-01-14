import { Box , Typography } from '@mui/material'
import BookIcon from '@mui/icons-material/Book';
import { getAllBooks } from '../../services/bookApi';
import { useEffect, useState } from 'react';
import { Book } from '../../types/bookInterface';

const BookQuantities = () => {
    const [books, setBooks] = useState<Book[]>([]);
    
      useEffect(() => {
        const fetchBooks = async () => {
          try {
            const data : Book[] = await getAllBooks();
            setBooks(data)
          } catch (err) {
            console.error('Error fetching books:', err);
          }
        };
    
        fetchBooks();
      },[]);

    const totalBooks = books.length;

  return (
    <Box className="shadow-md flex flex-row rounded-md border-2 border-[#19B37E] bg-[#FFFFFF] min-h-[120px] w-[270px]" >
        <Box className="flex flex-col justify-center ps-7 w-[50%]" >
            <Typography sx={{fontFamily: 'Inter', fontWeight: 500 , marginLeft: 1}} variant="h5" >
                {totalBooks}
            </Typography>
            <Typography sx={{color: '#19B37E', fontFamily: 'Inter', marginLeft: 1}} variant="body1" >
                Books
            </Typography>
        </Box>
        <Box className="flex items-center justify-center ps-7 w-[50%]" >
            <BookIcon sx={{color: '#19B37E', fontSize: 70 }} />
        </Box>
    </Box>
  )
}

export default BookQuantities
