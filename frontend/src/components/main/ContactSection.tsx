import { Box, Typography, Button, TextField } from '@mui/material'
import LibraryImage from '../../assets/Library.jpg';

const ContactSection = () => {
  return (
    <Box className="h-auto flex flex-col ">
      <Box className="
      relative bg-cover bg-center py-12 px-20 "
        sx={{
          backgroundImage: `url(${LibraryImage})`,
        }} >

        {/* FOR OVERLAY */}
        <Box className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70"></Box>
        <Box className="relative z-10 text-white h-auto max-w-[800px]">
        <Typography
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } 
                }}>
        Contact Us
        </Typography>
        </Box>
      </Box>
      <Box className="h-auto flex justify-center items-center py-10 sm:h-auto" >
            <form className='flex flex-col gap-5 border border-gray-500 h-auto w-[500px] rounded-md p-5 ' action="">
              <TextField id="name" label="name"/>
              <TextField id="email" label="email" />
              <TextField
                  label="message"
                  name="message"
                  multiline
                  rows={4} 
                  fullWidth
                  required
              />
              <Button type="submit" variant="contained" color="primary" fullWidth >
                Submit
              </Button>
            </form>
      </Box>
    </Box>
  )
}

export default ContactSection
