import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Box, TextField, Typography, Input } from '@mui/material';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewsSchema, NewsFormData } from '../../utils/formSchema';
import { updateNews } from '../../services/newsApi';
import { NewsArrProps  } from '../../types/newsInterface'

const EditNews: React.FC<NewsArrProps> = ({ data }) => {
  const [viewModal, setViewModal] = useState<boolean>(false);
  const openViewModal = () => setViewModal(true);
  const closeViewModal = () => setViewModal(false);
  const [image, setImage] = useState<File | string>('');
  const [preImage, setPreImage] = useState<string | undefined>('');
  const [displayNewsImage, setDisplayNewsImage] = useState<string | undefined>('');

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<NewsFormData>({
    resolver: zodResolver(NewsSchema),
  });

  useEffect(() => {
    if (data && data.length > 0) {
      const news = data[0];

      setValue('news_id', news.news_id);
      setValue('news_title', news.news_title);
      setValue('news_content', news.news_content);

      const imageUrl = `http://localhost:8080/${news.news_image}`;
      setDisplayNewsImage(imageUrl);
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

  const onSubmit: SubmitHandler<NewsFormData> = async (data) => {
    try {
      const response = await updateNews({
        news_title: data.news_title,
        news_content: data.news_content,
        image: image,
        news_id: data.news_id,
      });

      console.log('News updated successfully:', response);
      window.location.reload()
    } catch (error) {
      console.error('Error updating news', error);
    }
  };

  return (
    <Box>
      <Button 
        variant="outlined" 
        color="secondary"
        onClick={openViewModal} 
        sx={{ padding: 0, textTransform: 'none', width: '60px', height: '30px' }}
        >
        Edit
      </Button>
      <Dialog open={viewModal}>
        <Box className="flex justify-end">
          <Button className="left-0" color="primary" onClick={closeViewModal}>
            <CloseIcon />
          </Button>
        </Box>
        <DialogContent>
            <DialogTitle className="text-center">Update</DialogTitle>
            <form
              className="p-5 flex flex-col gap-5 w-[450px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                label="ID"
                fullWidth
                {...register('news_id')}
                sx={{ display : 'none' }}
              />
              <TextField
                label="Title"
                fullWidth
                {...register('news_title')}
                error={!!errors.news_title}
                helperText={errors.news_title?.message}
              />
              <TextField
                label="Content"
                fullWidth
                rows={5}
                multiline
                {...register('news_content')}
                error={!!errors.news_content}
                helperText={errors.news_content?.message}
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
                  src={preImage ? preImage : displayNewsImage}
                  alt={displayNewsImage}
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

export default EditNews;
