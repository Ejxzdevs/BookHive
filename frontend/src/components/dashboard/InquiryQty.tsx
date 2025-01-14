import { Box , Typography } from '@mui/material'
import BookIcon from '@mui/icons-material/Book';
import { getAllInquiry } from '../../services/contactApi';
import { useEffect, useState } from 'react';
import { Inquiry } from '../../types/inquiryInterface';

const InquiryQuantities = () => {
    const [Inquiry, setInquiry] = useState<Inquiry[]>([]);
    
      useEffect(() => {
        const fetchInquiry = async () => {
          try {
            const data = await getAllInquiry();
            setInquiry(data)
          } catch (err) {
            console.error('Error fetching Inquiry:', err);
          }
        };
    
        fetchInquiry();
      },[]);

    const totalInquiry = Inquiry.length;

  return (
    <Box className="shadow-md flex flex-row rounded-md border-2 border-[#19B37E] bg-[#FFFFFF] min-h-[120px] w-[270px] " >
        <Box className="flex flex-col justify-center ps-7 w-[50%]" >
            <Typography sx={{fontFamily: 'Inter', fontWeight: 500 , marginLeft: 1}} variant="h5" >
                {totalInquiry}
            </Typography>
            <Typography sx={{color: '#19B37E', fontFamily: 'Inter', marginLeft: 1}} variant="body1" >
                Inquiry
            </Typography>
        </Box>
        <Box className="flex items-center justify-center ps-7 w-[50%]" >
            <BookIcon sx={{color: '#19B37E', fontSize: 70 }} />
        </Box>
    </Box>
  )
}

export default InquiryQuantities;
