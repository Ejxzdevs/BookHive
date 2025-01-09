import { Dialog , DialogTitle ,  DialogContent , DialogActions , TextField , Button , Box } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { FormProps } from '../../types/bookInterface'
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RequestSchema, RequestFormData } from '../../utils/formSchema'
import { insertRequest } from '../../services/requestApi'

const SendRequest : React.FC<FormProps> = ({ data }) => {
    const [open , setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const { register, handleSubmit, formState: { errors }, } = useForm<RequestFormData>({ resolver: zodResolver(RequestSchema),});
      const onSubmit: SubmitHandler<RequestFormData> = async (data) => {
        try {
          console.log("Form submitted with data: ", data);
            const response = await insertRequest({
                  book_id: data.book_id,
                  fullname: data.fullname,
                  request_email: data.request_email,
                  phone_number: data.phone_number,
                  request_message: data.request_message ? data.request_message : ' ' 
            });
          console.log('Request added successfully:',response);
          window.location.reload();
    
        } catch (error) {
          console.error('Error submitting Request:', error);
        }
      };
    

  return (
    <Box>
      <Button 
        variant="outlined" 
          sx={{ 
          color: '#19B37E', 
          borderColor: '#19B37E', 
        '&:hover': {
          borderColor: '#19B37E',
          backgroundColor: 'rgba(25, 179, 126, 0.1)'
          }
            }} 
      onClick={handleOpen}
        >
        Book Request
    </Button>
        <Dialog open={open}>
            <Box className="flex justify-end">
                <Button className='left-0' color="error" onClick={handleClose}>
                    <CloseIcon/>
                </Button>
            </Box>
            <DialogTitle className='text-center' >
                Request for {data[0].book_title}
            </DialogTitle>
            <DialogContent>
            <form className="p-5 flex flex-col gap-5 w-[450px]" 
            onSubmit={handleSubmit(onSubmit)}
            >
                <Box mt={2} display="flex" justifyContent="center">
                <img
                  src={`http://localhost:8080/${data[0].image_url}`}
                  style={{ maxWidth: '100%', maxHeight: '200px' }}
                />
              </Box>
              <TextField
                    label="book id"
                    fullWidth
                    value={data[0].book_id}
                    {...register('book_id')}
                    error={!!errors.book_id}
                    helperText={errors.book_id?.message}
                    sx={{ display: 'none'}}
                />
                <TextField
                    label="Full Name"
                    fullWidth
                    {...register('fullname')}
                    error={!!errors.fullname}
                    helperText={errors.fullname?.message}
                />
                <TextField
                    label="Email"
                    fullWidth
                    {...register('request_email')}
                    error={!!errors.request_email}
                    helperText={errors.request_email?.message}
                />
                <TextField
                    label="Number"
                    fullWidth
                    {...register('phone_number')}
                    error={!!errors.phone_number}
                    helperText={errors.phone_number?.message}
                />
                <TextField
                    label="Message(Optional)"
                    multiline
                    rows={5}
                    fullWidth
                    {...register('request_message')}
                    error={!!errors.request_message}
                    helperText={errors.request_message?.message}
                />
                <DialogActions>
                    <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#19B37E' }} >
                        Send
                    </Button>
                </DialogActions>
            </form>
            </DialogContent>
        </Dialog>
    </Box>
  )
}

export default SendRequest


