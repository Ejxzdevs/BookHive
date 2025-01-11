import { Box, Button, Dialog, DialogContent, Typography } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { NewsArrProps } from '../../types/newsInterface'

const ViewNews : React.FC<NewsArrProps> = ({ data }) => {
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!data[0]) return null;

  return (
    
    <Box>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        sx={{ 
          padding: 0, 
          textTransform: 'none', 
          height: '30px' 
        }}
      >
        View
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box className="flex justify-end pe-0 mt-2 ">
          <Button sx={{ padding: 0 , width: 'auto' }}  color="error" onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Box>
        <DialogContent >
        <Box className="flex flex-col gap-1 mb-5">
        <Typography variant="body1">
            Date Posted:{" "}
            {data[0].news_date
              ? isNaN(new Date(data[0].news_date).getTime())
                ? 'Invalid release date'
                : new Date(data[0].news_date).toLocaleDateString()
              : 'No release date'}
          </Typography>
          <Typography sx={{marginBottom: 1 , fontWeight: 600}} variant="body1">{data[0].news_title}</Typography>
          <Typography className='mt-20' variant="caption">{data[0].news_content}</Typography>
        </Box>
          <Box className="flex items-center justify-center mb-10">
            <img
              className="h-[250px] w-full"
              src={`http://localhost:8080/${data[0].news_image}`}
                alt={data[0].news_title}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ViewNews;
