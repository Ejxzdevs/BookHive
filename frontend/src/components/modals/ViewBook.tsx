import { Box, Button, Dialog, DialogContent, Typography } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { FormProps } from '../../types/bookInterface'

const ViewBook : React.FC<FormProps> = ({ data }) => {
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
      <Dialog open={open} >
      <Box className="flex justify-between items-end py-3">
          <Typography sx={{marginLeft: 2, fontFamily: 'Inter'}} variant="h5" >
            Book Details
          </Typography>
          <Button color="error" onClick={handleClose}>
            <CloseIcon   />
          </Button>
        </Box>
        <DialogContent sx={{ padding: 0}} >
        <Box className="ps-4">
          <Typography sx={{fontFamily: 'Inter'}} variant="body2">
            Title: {data[0].book_title}
            </Typography>
          <Typography  sx={{fontFamily: 'Inter'}} variant="body2" component="div">
            Date Added: {" "}
            {data[0].book_release
              ? isNaN(new Date(data[0].book_release).getTime())
                ? 'Invalid release date'
                : new Date(data[0].book_release).toLocaleDateString()
              : 'No release date'}
          </Typography>
        </Box>
        <Box className="rounded-sm p-4 ">
            <img
              className="max-h-[550px] w-full shadow-lg"
              src={`http://localhost:8080/${data[0].image_url}`}
              alt={data[0].book_title}
            />
          </Box>
          <Box className="flex flex-col mt-1 px-4 pb-8">
              <Typography gutterBottom variant="body1" component="div" sx={{ margin: '0' }}>
                Author: {data[0].author}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', margin: '0' }}>
                Genre: {data[0].genre}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', marginTop: '10px' }}>
              {data[0].book_description}
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ViewBook;
