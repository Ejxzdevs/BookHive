import { Container, Box, Typography } from "@mui/material";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import AddReport from "../components/modals/AddReport";

const Product: React.FC = () => {


  return (
    <Container disableGutters maxWidth={false} className="h-[100vh] flex flex-row p-0 m-0">
      <Sidebar />
      <Box className="flex flex-grow flex-col">
        <Header />
        <Box className="flex justify-between items-center pt-5 px-6">
          <Typography sx={{fontFamily: 'Inter' , fontWeight: '500'}} variant="h5" color="initial">
            Report List
          </Typography>
          <AddReport/>
        </Box>
      </Box>
    </Container>
  );
};

export default Product;
