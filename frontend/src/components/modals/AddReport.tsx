import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle ,Box , FormControl, InputLabel, Select, MenuItem, FormHelperText  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ReportSchema, ReportFormData } from '../../utils/formSchema'
import { insertReport } from '../../services/reportApi';


function AddReport() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { register, handleSubmit, formState: { errors }, reset} = useForm<ReportFormData>({ resolver: zodResolver(ReportSchema),});
      const onSubmit: SubmitHandler<ReportFormData> = async (data) => {
        try {
          console.log("Form submitted with data: ", data);
          // Call the API service to submit the inquiry
          const response = await insertReport({
            report_name: data.report_name,
          });

          reset(); 
          handleClose();
          window.location.reload();
    
          console.log('Inquiry added successfully:', response);
    
        } catch (error) {
          console.error('Error submitting inquiry:', error);
        }
      };



  return (
    <Box>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Report
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box className="flex justify-end">
          <Button className='left-0' onClick={handleClose} color="error">
            <CloseIcon/>
          </Button>
        </Box>
        <DialogTitle className='text-center Inter'>Generate Report</DialogTitle>
        <DialogContent>
        <form className="p-5 flex flex-col gap-5 w-[450px]" onSubmit={handleSubmit(onSubmit)}>
             <FormControl fullWidth>
                <InputLabel id="select-label">Select</InputLabel>
                <Select
                    labelId="select-label"
                    label="Options"
                    {...register('report_name')}
                    >
                    <MenuItem value="books">Books</MenuItem>
                    <MenuItem value="request">Requests</MenuItem>
                    <MenuItem value="inquiries">Inquiries</MenuItem>
                    <MenuItem value="news">News</MenuItem>
                </Select>
                {errors.report_name && (
                    <FormHelperText>{errors.report_name.message}</FormHelperText>
                )}
            </FormControl>
             <DialogActions>
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

export default AddReport;
