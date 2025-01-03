import { Box , Typography } from "@mui/material"

const Header = () => {
  return (
    <Box className="border-b border-gray-500 h-[60px] flex items-center justify-center"
     sx={{ backgroundColor: '#19B37E'}} >
        <Typography variant="h5" color="initial" className="text-center" >
            LIBRARY MANAGEMENT SYSTEM
        </Typography>
    </Box>
  )
}

export default Header
