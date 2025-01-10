import { Box, Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
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
      <Dialog open={open} onClose={handleClose}>
        <Box className="flex justify-end">
          <Button className="left-0" color="primary" onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Box>
        <DialogContent >
        <DialogTitle className="text-center my-0">Book Details</DialogTitle>
        <Box className="mb-10">
          <Typography variant="h5">{data[0].book_title}</Typography>
          <Typography variant="body1" component="div" sx={{ color: 'text.secondary', margin: '0' }}>
            Date Release:{" "}
            {data[0].book_release
              ? isNaN(new Date(data[0].book_release).getTime())
                ? 'Invalid release date'
                : new Date(data[0].book_release).toLocaleDateString()
              : 'No release date'}
          </Typography>
        </Box>
          <Box className="flex items-center justify-center mb-10">
            <img
              className="h-[250px] w-[180px]"
              src={`http://localhost:8080/${data[0].image_url}`}
              alt={data[0].book_title}
            />
          </Box>
          <Box className="flex flex-row justify-between items-center gap-5 mt-2">
            <Box>
              <Typography gutterBottom variant="body1" component="div" sx={{ margin: '0' }}>
                Author: {data[0].author}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', margin: '0' }}>
                Genre: {data[0].genre}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ color: 'text.secondary', marginTop: '20px' }}>
              {data[0].book_description}
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ViewBook;
