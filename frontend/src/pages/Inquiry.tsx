import { Typography , Box, Container } from "@mui/material"
import { useEffect , useState } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import InquiryData from "../components/tables/InquiryData"
import { getAllInquiry } from '../services/contactApi'
import type { Inquiry } from '../types/inquiryInterface'



const Inquiry: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [inquiry , setInquiry ] = useState<Inquiry[]>([]);

    useEffect(() => {
             const fetchNews = async () => {
               try {
                 const data = await getAllInquiry();
                 setInquiry(data);
                 setLoading(false);
               } catch (err) {
                 setError('Error fetching inquiry');
                 setLoading(false);
                 console.error('Error fetching inquiry:', err);
               }
             };
         
             fetchNews();
           }, []);

  return (
    <Container disableGutters maxWidth={false} className="h-[100vh] flex flex-row p-0 m-0">
      <Sidebar />
      <Box className="flex flex-grow flex-col">
        <Header />
        <Box className="flex justify-between items-center pt-5 px-6">
          <Typography sx={{fontFamily: 'Inter' , fontWeight: '500'}} variant="h5" color="initial">
            Inquiry List
          </Typography>
        </Box>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <InquiryData data={inquiry} />}
      </Box>
    </Container>
  )
}

export default Inquiry
