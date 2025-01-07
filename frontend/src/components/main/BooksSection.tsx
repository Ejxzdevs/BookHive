import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography, Dialog, DialogContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import LibraryImage from '../../assets/Library.jpg';
import { getAllBooks } from '../../services/bookApi';
import { useEffect, useState } from 'react';
import { Book } from '../../types/bookInterface';
import CloseIcon from '@mui/icons-material/Close';
import SeachBar from '../forms/SeachBar';

const BooksSection = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
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

  const handleOpenModal = (book: Book) => {
    setSelectedBook(book);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
              <Grid size={{ xs: 12, sm: 8, md: 3 }} key={book.book_id} container spacing={2}>
                <Card sx={{ maxWidth: 350 }}>
                  <Box sx={{ paddingX: '15px', paddingY: '5px' }}>
                    <CardMedia sx={{ height: 200, backgroundPosition: 'center' }} image={`http://localhost:8080/${book.image_url}`} title="Book Image" />
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
                    <Button size="small">Request</Button>
                    <Button size="small" onClick={() => handleOpenModal(book)}>View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      {/* Modal for book details */}
      <Dialog open={openModal}>
        <Box className={`flex justify-end items-center`} >
            <Button color='error' onClick={handleCloseModal} sx={{margin: 0}} >
                <CloseIcon/>
            </Button>
        </Box>
        <Box className="pl-[22px]" sx={{ margin: '0' }} >
            <Typography variant="h5" >{selectedBook?.book_title}</Typography>
            <Typography variant="body1" component="div" sx={{  color: 'text.secondary', margin: '0' }}>
                    Date Release: {selectedBook?.book_release
                        ?   (
                    isNaN(new Date(selectedBook.book_release).getTime())
                        ? 'Invalid release date'
                        : new Date(selectedBook.book_release).toLocaleDateString()
                            )
                        : 'No release date'}
            </Typography>
        </Box>
        <DialogContent className='min-w-[300px]  min-h-[800px] '  >
            <Box className="" >
                <img
                className='h-[500px] w-full' 
                src={`http://localhost:8080/${selectedBook?.image_url}`}
                alt={`http://localhost:8080/${selectedBook?.image_url}`}
                />
            </Box>
            <Box className="flex flex-row justify-between items-center gap-5 mt-2 "  >
                <Box>
                <Typography gutterBottom variant="body1" component="div" sx={{ margin: '0' }}>
                    Author: {selectedBook?.author}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', margin: '0' }}>
                    Genre: {selectedBook?.genre}
                </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="body1" sx={{ color: 'text.secondary' , marginTop: '20px'}}>
                    {selectedBook?.book_description}
                </Typography>
            </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default BooksSection;
