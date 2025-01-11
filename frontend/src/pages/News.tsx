import { Typography , Box, Container } from "@mui/material"
import { useEffect , useState } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import AddNews from "../components/modals/AddNews"
import NewsData from "../components/tables/NewsData"
import { getAllNews } from "../services/newsApi"
import type { News } from '../types/newsInterface'



const News: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [news , setNews ] = useState<News[]>([]);

    useEffect(() => {
             const fetchNews = async () => {
               try {
                 const data = await getAllNews();
                 setNews(data);
                 setLoading(false);
               } catch (err) {
                 setError('Error fetching News');
                 setLoading(false);
                 console.error('Error fetching News:', err);
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
            News List
          </Typography>
          <AddNews />
        </Box>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <NewsData  data={news} />}
      </Box>
    </Container>
  )
}

export default News
