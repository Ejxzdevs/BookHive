import { Box , Typography } from '@mui/material'
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { getAllNews } from '../../services/newsApi';
import { useEffect, useState } from 'react';
import { News } from '../../types/newsInterface';
import { NavLink } from 'react-router-dom';

const NewQuantities = () => {
    const [news, setNews] = useState<News[]>([]);
    
      useEffect(() => {
        const fetchNews = async () => {
          try {
            const data = await getAllNews();
            setNews(data)
          } catch (err) {
            console.error('Error fetching News:', err);
          }
        };
    
        fetchNews();
      },[]);

    const totalNews = news.length;

  return (
    <Box component={NavLink} to="/news" className="shadow-md flex flex-row rounded-md border-2 border-[#19B37E] bg-[#FFFFFF] min-h-[120px] w-[270px]" >
        <Box className="flex flex-col justify-center ps-7 w-[50%]" >
            <Typography sx={{fontFamily: 'Inter', fontWeight: 500 , marginLeft: 1}} variant="h5" >
                {totalNews}
            </Typography>
            <Typography sx={{color: '#19B37E', fontFamily: 'Inter', marginLeft: 1}} variant="body1" >
                News
            </Typography>
        </Box>
        <Box className="flex items-center justify-center ps-7 w-[50%]" >
            <NewspaperIcon sx={{color: '#19B37E', fontSize: 70 }} />
        </Box>
    </Box>
  )
}

export default NewQuantities;
