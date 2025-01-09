import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import LibraryImage from '../../assets/Library.jpg';
import { getAllBooks } from '../../services/bookApi';
import { useEffect, useState } from 'react';
import { Book } from '../../types/bookInterface';

import SeachBar from '../forms/SeachBar';
import SendRequest from '../modals/SendRequest'
import ViewBook from '../modals/ViewBook';

const BooksSection = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search , setSearch ] = useState<string>('');
  const searchItem = "Seacrh Title , Author or Genre";

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAllBooks();
        setBooks(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching books');
        setLoading(false);
        console.error('Error fetching books:', err);
      }
    };

    fetchBooks();
  },[]);

  const filteredBooks = books.filter((book) =>
    book.book_title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase()) ||
    book.genre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box className="h-auto flex flex-col">
      <Box className="relative bg-cover bg-center py-12 px-20" sx={{ backgroundImage: `url(${LibraryImage})` }}>
        <Box className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70"></Box>
        <Box className="relative z-10 text-white h-auto max-w-[800px]">
          <Typography sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
            Book List
          </Typography>
        </Box>
      </Box>
      <Box sx={{ padding: '2rem' }}>
        <Box className="flex justify-center items-center mb-10" >
            <SeachBar query={search} setQuery={setSearch} placeHolder={searchItem} />
        </Box>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <Grid container spacing={2}>
            {filteredBooks.map((book) => (
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
        )}
      </Box>
    </Box>
  );
};

export default BooksSection;
