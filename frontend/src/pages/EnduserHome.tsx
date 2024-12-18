import HeroSection from "../components/main/HeroSection"
import { Box } from "@mui/material"
import BlogSection from "../components/main/BlogSection"

const enduserHome = () => {
  return (
    <Box className="h-auto flex flex-col " >
      <HeroSection/>
      <BlogSection/>
    </Box>
  )
}

export default enduserHome
