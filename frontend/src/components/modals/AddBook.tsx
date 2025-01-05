import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle ,Box , TextField , Typography, Input } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BookSchema, BookFormData } from '../../utils/formSchema'
import { insertBook } from '../../services/bookApi';
import CloseIcon from '@mui/icons-material/Close';

function PopupExample() {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState<File | null>(null)
    const [preImage, setPreImage] = useState<string| undefined>('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (e : React.ChangeEvent<HTMLInputElement>)=>{
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      console.log(file)
      setImage(file);
      const imageUrl = URL.createObjectURL(file);
      setPreImage(imageUrl);
    }
  }
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookFormData>({ resolver: zodResolver(BookSchema),});
    const onSubmit: SubmitHandler<BookFormData> = async (data) => {
      try {
        console.log("Form submitted with data: ", data);

        // Prevent form submission if image is not provided
        if (!image) {
          console.error("Image is required!");
          return; 
        }

        const response = await insertBook({
          book_title: data.book_title,
          book_description: data.book_description,
          genre: data.genre,
          author: data.author,
          image_url: image,
        });
  
        console.log('Inquiry added successfully:', response);

        reset(); 
        setImage(null);
        setPreImage('');
        handleClose();
  
      } catch (error) {
        console.error('Error submitting inquiry:', error);
      }
    };



  return (
    <Box>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Book
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box className="flex justify-end">
          <Button className='left-0' onClick={handleClose} color="primary">
            <CloseIcon/>
          </Button>
        </Box>
        <DialogTitle className='text-center' >New Book</DialogTitle>
        <DialogContent>
          <form className='p-5 flex flex-col gap-5 w-[450px] ' 
            onSubmit={handleSubmit(onSubmit)} 
          >
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
                    label="description"
                    multiline
                    rows={5}
                    fullWidth
                    {...register('book_description')}
                    error={!!errors.book_description}
                    helperText={errors.book_description?.message}
             />
              <Typography variant="body1" className='p-0 m-0'  >Upload Image</Typography>
                <Input
                 className='p-0 m-0' 
                  type="file"
                  inputProps={{ accept: 'image/*' }}
                  fullWidth
                  onChange={handleImage}
                />
                {image && (
                  <Box mt={2} display="flex" justifyContent="center">
                    <img src={preImage} alt="Book Cover Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                  </Box>
                )}<DialogActions>
                    <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#19B37E' }} >
                        Submit
                    </Button>
                </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default PopupExample;
