import HeroSection from "../components/main/HeroSection"
import { Box, Typography } from "@mui/material"
import BlogSection from "../components/main/BlogSection"
import LatestBooks from "../components/main/LatestBooks"

const enduserHome = () => {
  return (
    <Box >
      <HeroSection/>
      <BlogSection/>
      <Box className="ps-8" >
        <Typography variant="h3" color="initial">
          Latest Books
        </Typography>
      </Box>
      <LatestBooks/>
    </Box>
  )
}

export default enduserHome
