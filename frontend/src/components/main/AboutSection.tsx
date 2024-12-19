import { Box , Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import LibraryImage from '../../assets/Library.jpg';
import About from '../../assets/About2.jpg';

const AboutSection = () => {
  return (
    <Box className="h-auto flex flex-col ">
      <Box className="
      relative h-[300px] sm:h-[200px] bg-cover bg-center py-32 px-20 "
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
        About Us
        </Typography>
        </Box>
      </Box>
      <Box className="h-[500px] py-10 sm:h-auto" >
          <Grid className=" h-[100%]" container spacing={2}>
              <Grid className="flex justify-center items-center " size={{ xs: 12, md: 6 }}>
                <img src={About} alt="Blog Image" className="min-w-[200px] w-[400px] h-[340px]  sm:mt-6 shadow-lg rounded-lg" />
              </Grid>
              <Grid className="flex flex-col justify-center items-start p-10 gap-4 " size={{ xs: 12, md: 6 }}>
              <Typography variant="h5">
                    Mission
                  </Typography>
                  <Typography variant="body1">
                      To provide an efficient and user-friendly Library Management System that streamlines operations and enhances resource accessibility for both staff and users. Our system aims to promote seamless interactions and foster an environment of learning and knowledge sharing.
                  </Typography>
                  <Typography variant="h5">
                    Vision
                  </Typography>
                  <Typography variant="body1">
                      To become the leading platform in modernizing library management, ensuring easy access to information and fostering lifelong learning for communities worldwide. We strive to empower libraries with innovative solutions for enhanced user experiences.
                  </Typography>
              </Grid>
          </Grid>
      </Box>
    </Box>
  )
}

export default AboutSection
