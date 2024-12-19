import { Box , Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import BlogImage from '../../assets/Blog.jpg';


const BlogSection = () => {
  return (
    <Box className="h-auto " sx={{ flexGrow: 1 }}>
    <Grid sx={{ height: '100%'}} container spacing={2}>
      <Grid className="flex justify-center items-center p-10" size={{ xs: 12, md: 6 }}>
          <img src={BlogImage} alt="Blog Image" className="min-w-[300px] min-h-[200px] max-h-[270px] sm:mt-6 shadow-md rounded" />
      </Grid>
      <Grid className="flex flex-col justify-center items-center gap-4 p-10 " size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" color="initial">
              The Role of Cataloging in Library Management Systems  
          </Typography>
          <Typography  variant="body2" color="initial">
              Cataloging is one of the key features of a Library Management System. The system organizes books and other resources by categories, such as author, genre, or subject, and assigns unique identifiers like ISBN codes. This allows both staff and users to quickly locate resources using search filters or keywords. Effective cataloging not only makes library resources easier to find but also helps libraries manage their inventory efficiently. An LMS ensures that items are classified consistently and updated when necessary
          </Typography>
      </Grid>
    </Grid>
  </Box>
  )
}

export default BlogSection
