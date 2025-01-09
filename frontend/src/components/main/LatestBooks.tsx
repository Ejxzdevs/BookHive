import { Box , Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import SendRequest from "../modals/SendRequest"
import Grid from '@mui/material/Grid2';
import { Book } from '../../types/bookInterface';
import { getAllBooks } from '../../services/bookApi';
import { useState , useEffect } from "react";
import ViewBook from "../modals/ViewBook";

const LatestBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAllBooks();
        setBooks(data);
      } catch (err) {
        console.error('Error fetching books:', err);
      }
    };

    fetchBooks();
  },[]);

 
  return (
    <Box sx={{ padding: '2rem' }}>
          <Grid container spacing={2}>
            {books.slice(0, 3).map((book: Book) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={book.book_id} container spacing={2}>
                <Card sx={{ maxWidth: 330 , Height: 'auto',  boxShadow: 5, paddingY: '10px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingX: '15px', paddingY: '5px' }}>
                    <CardMedia sx={{ height: 180, width: 120 , backgroundPosition: 'center' }} image={`http://localhost:8080/${book.image_url}`} title="Book Image" />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="body1" component="div" sx={{ margin: '0' }}>
                      {book.book_title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: '.5rem' }}>
                      {book.genre}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 5, overflow: 'hidden' }}>
                      {book.book_description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                    <SendRequest data={[book]}/>
                    <ViewBook data={[book]} />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
      </Box>
  )
}

export default LatestBooks

