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
        <Box className="flex justify-between items-end py-3">
          <Typography sx={{marginLeft: 2, fontFamily: 'Inter'}} variant="h5" >
            Request Details
          </Typography>
          <Button color="error" onClick={handleClose}>
            <CloseIcon/>
          </Button>
        </Box>
        <DialogContent className='overflow-hidden' sx={{ padding: 0}} >
        <Box className="ps-4 w-[500px] flex flex-col " sx={{ margin: '0' }} >
            <Typography sx={{fontFamily: 'Inter'}} variant="body2">
              Book: {data[0].book_title}
              </Typography>
            <Typography sx={{fontFamily: 'Inter'}} variant="body2">
              Email: {data[0].request_email}
            </Typography>
            <Typography sx={{fontFamily: 'Inter'}} variant="body2" >
            Date Request:{" "}
            {data[0].request_date
              ? isNaN(new Date(data[0].request_date).getTime())
                ? 'Invalid release date'
                : new Date(data[0].request_date).toLocaleDateString()
              : 'No release date'}
            </Typography>
        </Box>
          <Box className="rounded-sm p-4">
            <img
              className="max-h-[550px] w-full shadow-lg"
              src={`http://localhost:8080/${data[0].image_url}`}
              alt={altText}
            />
          </Box>
          <Box className="px-4 py-5" >
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
        </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ViewRequest;
