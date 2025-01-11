import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle ,Box , TextField , Typography, Input } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewsSchema, NewsFormData } from '../../utils/formSchema'
import { insertNews } from '../../services/newsApi';
import CloseIcon from '@mui/icons-material/Close';

function AddNews() {
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
      setImage(file);
      const imageUrl = URL.createObjectURL(file);
      setPreImage(imageUrl);
    }
  }
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsFormData>({ resolver: zodResolver(NewsSchema),});
    const onSubmit: SubmitHandler<NewsFormData> = async (data) => {
      try {
        // Prevent form submission if image is not provided
        if (!image) {
          console.error("Image is required!");
          return; 
        }

        const response = await insertNews({
          news_title: data.news_title,
          news_content: data.news_content,
          image_url: image,
        });
  
        console.log('News added successfully:', response);

        reset(); 
        setImage(null);
        setPreImage('');
        handleClose();
        window.location.reload();
  
      } catch (error) {
        console.error('Error submitting news', error);
      }
    };

  return (
    <Box>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add News
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box className="flex justify-end">
          <Button className='left-0' onClick={handleClose} color="primary">
            <CloseIcon/>
          </Button>
        </Box>
        <DialogTitle className='text-center'>Public Notice</DialogTitle>
        <DialogContent>
        <form className="p-5 flex flex-col gap-5 w-[450px]" onSubmit={(e) => { e.preventDefault(); handleSubmit(onSubmit)(e); }}>
             <TextField
                    label="Title"
                    fullWidth
                    {...register('news_title')}
                    error={!!errors.news_title}
                    helperText={errors.news_title?.message}
             />
             <TextField
                    label="Content"
                    multiline
                    rows={5}
                    fullWidth
                    {...register('news_content')}
                    error={!!errors.news_content}
                    helperText={errors.news_content?.message}
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

export default AddNews;
