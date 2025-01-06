import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Box, TextField, Typography, Input } from '@mui/material';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BookSchema, BookFormData } from '../../utils/formSchema';
import { updateBook } from '../../services/bookApi';
import { FormProps} from '../../types/bookInterface'

const ViewBook: React.FC<FormProps> = ({ data }) => {
  const [viewModal, setViewModal] = useState<boolean>(false);
  const openViewModal = () => setViewModal(true);
  const closeViewModal = () => setViewModal(false);
  const [image, setImage] = useState<File | string>('');
  const [preImage, setPreImage] = useState<string | undefined>('');
  const [displayBookImage, setDisplayBookImage] = useState<string | undefined>('');

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<BookFormData>({
    resolver: zodResolver(BookSchema),
  });

  useEffect(() => {
    if (data && data.length > 0) {
      const book = data[0];

      setValue('id', book.book_id);
      setValue('book_title', book.book_title);
      setValue('genre', book.genre);
      setValue('author', book.author);
      setValue('book_description', book.book_description);

      const imageUrl = `http://localhost:8080/${book.image_url}`;
      setDisplayBookImage(imageUrl);
    }
  },[data, setValue]);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      setImage(file);
      const imageUrl = URL.createObjectURL(file);
      setPreImage(imageUrl);
    }
  }

  const onSubmit: SubmitHandler<BookFormData> = async (data) => {
    try {
      const response = await updateBook({
        book_title: data.book_title,
        book_description: data.book_description,
        genre: data.genre,
        author: data.author,
        image: image,
        id: data.id,
      });

      console.log('Book updated successfully:', response);
      window.location.reload()
    } catch (error) {
      console.error('Error updating book', error);
    }
  };

  return (
    <Box>
      <Button 
        variant="outlined" 
        color="primary" 
        onClick={openViewModal} 
        sx={{ padding: 0, textTransform: 'none', width: '60px', height: '30px' }}
        >
        View
      </Button>
      <Dialog open={viewModal}>
        <Box className="flex justify-end">
          <Button className="left-0" color="primary" onClick={closeViewModal}>
            <CloseIcon />
          </Button>
        </Box>
        <DialogTitle className="text-center">Update Book</DialogTitle>
        <DialogContent>
            <form
              className="p-5 flex flex-col gap-5 w-[450px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                label="Book id"
                fullWidth
                {...register('id')}
                sx={{ display : 'none' }}
              />
              <TextField
                label="Book title"
                fullWidth
                {...register('book_title')}
                error={!!errors.book_title}
                helperText={errors.book_title?.message}
              />
              <TextField
                label="Book Genre"
                fullWidth
                {...register('genre')}
                error={!!errors.genre}
                helperText={errors.genre?.message}
              />
              <TextField
                label="Book Author"
                fullWidth
                {...register('author')}
                error={!!errors.author}
                helperText={errors.author?.message}
              />
              <TextField
                label="Description"
                multiline
                rows={5}
                fullWidth
                {...register('book_description')}
                error={!!errors.book_description}
                helperText={errors.book_description?.message}
              />
              <Typography variant="body1" className="p-0 m-0">
                Upload Image
              </Typography>
              <Input
                className="p-0 m-0"
                type="file"
                inputProps={{ accept: 'image/*' }}
                fullWidth
                onChange={handleImage}
              />
              <Box mt={2} display="flex" justifyContent="center">
                <img
                  src={preImage ? preImage : displayBookImage}
                  alt={displayBookImage}
                  style={{ maxWidth: '100%', maxHeight: '200px' }}
                />
              </Box>
              <DialogActions>
                <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#19B37E' }}>
                  Submit
                </Button>
              </DialogActions>
            </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ViewBook;
