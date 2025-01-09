import HeroSection from "../components/main/HeroSection"
import { Box, Typography } from "@mui/material"
import BlogSection from "../components/main/BlogSection"
import LatestBooks from "../components/main/LatestBooks"
import PopularBooks from "../components/main/PopularBooks"

const enduserHome = () => {
  return (
    <Box >
      <HeroSection/>
      <BlogSection/>
      <Box className="ps-8 m-10" >
        <Typography variant="h3" color="initial">
          Latest Books
        </Typography>
      </Box>
      <LatestBooks/>
      <Box className="ps-8 m-10" >
        <Typography variant="h3" color="initial">
          Popular Books
        </Typography>
      </Box>
        <PopularBooks/>
    </Box>
  )
}

export default enduserHome
