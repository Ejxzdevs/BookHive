import { Dialog , DialogTitle ,  DialogContent , DialogActions , TextField , Button , Box } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { FormProps } from '../../types/bookInterface'


const SendRequest : React.FC<FormProps> = ({ data }) => {
    const [open , setOpen] = useState<boolean>(false);

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

   

  return (
    <Box>
        <Button sx={{ color: '#19B37E'}} onClick={handleOpen} >
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
            <form className="p-5 flex flex-col gap-5 w-[450px]" action="">
                <Box mt={2} display="flex" justifyContent="center">
                <img
                  src={`http://localhost:8080/${data[0].image_url}`}
                  style={{ maxWidth: '100%', maxHeight: '200px' }}
                />
              </Box>
                <TextField
                    label="Full Name"
                    fullWidth
                />
                <TextField
                    label="Email"
                    fullWidth
                />
                <TextField
                    label="Number"
                    fullWidth
                />
                <TextField
                    label="Message(Optional)"
                    multiline
                    rows={5}
                    fullWidth
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
