import HeroSection from "../components/main/HeroSection"
import { Box } from "@mui/material"
import BlogSection from "../components/main/BlogSection"
import LatestBooks from "../components/main/LatestBooks"

const enduserHome = () => {
  return (
    <Box >
      <HeroSection/>
      <BlogSection/>
      <LatestBooks/>
    </Box>
  )
}

export default enduserHome
