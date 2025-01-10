import { Box, Button, Dialog, DialogContent, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { RequestArrProps } from '../../types/requestInterface'


const ViewRequest : React.FC<RequestArrProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const altText: string | undefined = `${data[0].image_url}`; 

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
      <Dialog open={open} onClose={handleClose} >
        <Box className="flex justify-end mt-1">
          <Button className="left-0" color="error" onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Box>
        <DialogContent className='overflow-hidden' >
        <Box className="w-[500px] flex flex-col gap-1 " sx={{ margin: '0' }} >
            <Typography className='font-bold' variant="body2">Book: {data[0].book_title}</Typography>
            <Typography variant="body2">Email: {data[0].request_email}</Typography>
            <Typography variant="body2" >
            Date Request:{" "}
            {data[0].request_date
              ? isNaN(new Date(data[0].request_date).getTime())
                ? 'Invalid release date'
                : new Date(data[0].request_date).toLocaleDateString()
              : 'No release date'}
            </Typography>
        </Box>
          <Box className="flex items-center justify-center my-5 overflow-hidden">
            <img
              className="h-[250px] w-[200px]"
              src={`http://localhost:8080/${data[0].image_url}`}
              alt={altText}
            />
          </Box>
          <TextField
                className='pointer-events-none'
                 sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'dark', 
                        borderWidth: 1,   
                      },
                      '&:hover fieldset': {
                        borderColor: '#19B37E', 
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#19B37E',
                      },
                    },
                  }}
                label="Message"
                variant="outlined"
                multiline
                rows={5} 
                value={data[0].request_message} 
                fullWidth
             
            />
          <Box className="flex flex-row justify-between items-center gap-5 mt-2">
            <Box>
              <Typography gutterBottom variant="body1" component="div" sx={{ margin: '0' }}>
              
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', margin: '0' }}>
                
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ color: 'text.secondary', marginTop: '20px' }}>
        
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ViewRequest;
