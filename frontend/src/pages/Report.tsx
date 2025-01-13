import { useState , useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import AddReport from "../components/modals/AddReport";
import ReportData from "../components/tables/ReportData";
import { getAllReport } from "../services/reportApi"
import type { Report } from '../types/reportInterface'

const Product: React.FC = () => {
    const [reports, setReports] = useState<Report[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBooks = async () => {
          try {
            const data = await getAllReport();
            setReports(data);
            setLoading(false);
          } catch (err) {
            setError('Error fetching reports');
            setLoading(false);
            console.error('Error fetching reports:', err);
          }
        };
    
        fetchBooks();
      }, []);


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
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <ReportData data={reports} />}
      </Box>
    </Container>
  );
};

export default Product;
