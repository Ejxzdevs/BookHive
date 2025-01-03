import Sidebar from "../components/Sidebar"
import { Container, Box , Typography } from "@mui/material"
const Dashboard = () => {
  return (
    <Container disableGutters maxWidth={false} className="h-[100vh] flex flex-row p-0 m-0">
      <Sidebar/> 
      <Box>
        <Typography variant="body1" color="initial">
          sdsa
        </Typography>
      </Box>
    </Container>
  )
}

export default Dashboard
