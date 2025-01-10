import { useState , useEffect } from 'react';
import { Container, Box, Typography } from "@mui/material";
import RequestData from '../components/tables/RequestData';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { getAllRequests } from '../services/requestApi';
import type { Request } from '../types/requestInterface'

const Request: React.FC = () => {
     const [loading, setLoading] = useState<boolean>(true);
     const [error, setError] = useState<string | null>(null);
     const [requests , setRequests ] = useState<Request[]>([]);

     useEffect(() => {
         const fetchRequests = async () => {
           try {
             const data = await getAllRequests();
             setRequests(data);
             setLoading(false);
           } catch (err) {
             setError('Error fetching Requests');
             setLoading(false);
             console.error('Error fetching Requests:', err);
           }
         };
     
         fetchRequests();
       }, []);

  return (
    <Container disableGutters maxWidth={false} className="h-[100vh] flex flex-row p-0 m-0">
    <Sidebar />
    <Box className="flex flex-grow flex-col">
      <Header />
      <Box className="flex justify-between items-center pt-5 px-6">
        <Typography sx={{fontFamily: 'Inter' , fontWeight: '500'}} variant="h5" color="initial">
            Request List
        </Typography>
      </Box>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <RequestData  data={requests} />}
    </Box>
  </Container>
  )
}

export default Request
