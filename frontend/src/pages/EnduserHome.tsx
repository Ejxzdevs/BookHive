import HeroSection from "../components/main/HeroSection"
import { Box, Typography } from "@mui/material"
import BlogSection from "../components/main/BlogSection"
import LatestBooks from "../components/main/LatestBooks"
import PopularBooks from "../components/main/PopularBooks"
import News from "./../components/main/NewsSection"

const enduserHome = () => {
  return (
    <Box >
      <HeroSection/>
      <BlogSection/>
      <Box className="ps-8 m-3" >
        <Typography variant="h4" color="initial">
          Public Notice
        </Typography>
      </Box>
      <News/>
      <Box className="ps-8 m-3" >
        <Typography variant="h4" color="initial">
          Latest Books
        </Typography>
      </Box>
      <LatestBooks/>
      <Box className="ps-8 m-3" >
        <Typography variant="h4" color="initial">
          Popular Books
        </Typography>
      </Box>
        <PopularBooks/>
    </Box>
  )
}

export default enduserHome
