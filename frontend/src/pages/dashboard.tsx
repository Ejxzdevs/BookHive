import BarGraph from "../components/dashboard/BarGraph"
import BookQuantities from "../components/dashboard/BookQty"
import InquiryQuantities from "../components/dashboard/InquiryQty"
import LatestTransaction from "../components/dashboard/LastestTransaction"
import NewQuantities from "../components/dashboard/NewsQty"
import ReportQuantities from "../components/dashboard/ReportQty"
import RequestQuantities from "../components/dashboard/RequestQty"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { Container, Box , Typography } from "@mui/material"


const Dashboard = () => {
  return (
    <Container className="h-[100vh] flex flex-row p-0 m-0" disableGutters maxWidth={false} >
      <Sidebar/> 
      <Box className="flex flex-grow flex-col">
        <Box>
          <Header />
        </Box>
        <Box className="flex flex-grow flex-col overflow-scroll bg-[#F3F5F9]" >
          <Box className="flex justify-between items-center pt-5 px-6">
            <Typography sx={{fontFamily: 'Inter' , fontWeight: '500'}} variant="h5" color="initial">
              Dashboard 
            </Typography>
          </Box>
          <Box className="flex flex-row items-center gap-8 pt-5 px-6 " >
            <BookQuantities />
            <RequestQuantities />
            <NewQuantities/>
          </Box>
          <Box className="flex flex-row items-center gap-8 pt-5 px-6 " >
            <InquiryQuantities/>
            <ReportQuantities/>
          </Box>
          <Box className="flex flex-row items-center gap-4 pt-5 px-6" sx={{ margin: 0}} >
            <Typography sx={{fontFamily: 'Inter' , fontWeight: '500'}} variant="body1" color="initial">
              BAR GRAPH
            </Typography>
          </Box>
          <Box className="px-6 py-5 ">
            <BarGraph/>
          </Box>
          <Box className="flex flex-row items-center gap-4 pt-5 px-6" sx={{ margin: 0}} >
            <Typography sx={{fontFamily: 'Inter' , fontWeight: '500'}} variant="body1" color="initial">
              Recent Transactions
            </Typography>
         </Box>
          <Box className="px-6 py-5 " >
            <LatestTransaction/>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Dashboard
