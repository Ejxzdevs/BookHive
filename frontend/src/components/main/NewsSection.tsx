import { Box, Typography } from "@mui/material"
import { News } from '../../types/newsInterface';
import { getAllNews } from '../../services/newsApi';
import { useState , useEffect } from "react";


const LatestBooks = () => {
    const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getAllNews();
        console.log("dsad",data)
        setNews(data);
      } catch (err) {
        console.error('Error fetching news:', err);
      }
    };

    fetchNews();
  },[]);
  

 
  return (
    <Box className="flex justify-center items-center" sx={{ paddingX: '12rem' , paddingY: '3rem' , backgroundColor: '#F3F5F9' }}>
        {news.slice(-1).map((data) => {
            return (
            <Box>
                <Typography className="inter" variant="h4" key={data.news_id}>
                    {data.news_title}
                </Typography>
                <Typography variant="body1"  sx={{ color: 'text.secondary', margin: '0' }}>
                    Date Posted: {data.news_date
                        ? isNaN(new Date(data.news_date).getTime())
                        ? 'Invalid date'
                        : new Date(data.news_date).toLocaleDateString()
                        : 'No date'}
                </Typography>
                <Typography sx={{marginTop: 5}} component="div"  variant="body2" key={data.news_id}>
                    {data.news_content}
                </Typography>
                <Box sx={{marginTop: 5}} >
                    <img className="h-[500px]" src={`http://localhost:8080/${data.news_image}`} alt={`${data.news_title}`} />
                </Box>
            </Box>
            );
        })}
    </Box>
  )
}

export default LatestBooks

