import { Box , Typography } from "@mui/material"


const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#19B37E' }}>
        <Typography sx={{ fontWeight: 600}} className="text-center py-5 font-bold" variant="body2" color="white">
            &copy; 2025 Copyright: Ejhay Gofredo. All rights reserved.
        </Typography>
    </Box>
  )
}

export default Footer
