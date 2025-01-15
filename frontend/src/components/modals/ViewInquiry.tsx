import { Box, Button, Dialog, DialogContent, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { InquiryArrProps } from '../../types/inquiryInterface'
import { updateInquiryStatus } from '../../services/contactApi'


const ViewInquiry : React.FC<InquiryArrProps> = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = async () => {
    setOpen(true);
     try {
            const response = await updateInquiryStatus(data[0].inquiry_id);
            console.log('Inquiry updated successfully:', response);
          } catch (error) {
            console.error('Error updating Inquiry:', error);
          }
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
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
        <DialogContent sx={{ paddingX: 2 , paddingY: 1 }} className='overflow-hidden border-2 border-[#19B37E]'>
        <Box className="w-[500px] flex flex-col mt-2 mb-4 Inter " >
            <Typography sx={{ margin: 0, fontWeight: 500}} variant="caption">
                Email: {data[0].inquiry_email}
            </Typography>
            <Typography sx={{ margin: 0, fontWeight: 500}} variant="caption" >
            Date: {" "}
            {data[0].inquiry_date
              ? isNaN(new Date(data[0].inquiry_date).getTime())
                ? 'Invalid release date'
                : new Date(data[0].inquiry_date).toLocaleDateString()
              : 'No release date'}
            </Typography>
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
                      '& .MuiInputBase-input': {
                        fontSize: '14px', 
                        fontFamily: 'Inter',
                        color: 'text.secondary'
                     },
                    },
                  }}
                label="Message"
                variant="outlined"
                multiline
                rows={5} 
                value={data[0].inquiry_message} 
                fullWidth
                
             
            />
              <Box className="flex justify-end mt-2">
                <Button variant='outlined' color="error" onClick={handleClose}>
                    Close
                </Button>
            </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ViewInquiry;
