import { Box , Typography } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { getAllInquiry } from '../../services/contactApi';
import { useEffect, useState } from 'react';
import { Inquiry } from '../../types/inquiryInterface';
import { NavLink } from 'react-router-dom';

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
    <Box component={NavLink} to="/inquiry" className="shadow-md flex flex-row rounded-md border-2 border-[#19B37E] bg-[#FFFFFF] min-h-[120px] w-[270px] " >
        <Box className="flex flex-col justify-center ps-7 w-[50%]" >
            <Typography sx={{fontFamily: 'Inter', fontWeight: 500 , marginLeft: 1}} variant="h5" >
                {totalInquiry}
            </Typography>
            <Typography sx={{color: '#19B37E', fontFamily: 'Inter', marginLeft: 1}} variant="body1" >
                Inquiry
            </Typography>
        </Box>
        <Box className="flex items-center justify-center ps-7 w-[50%]" >
            <HelpOutlineIcon sx={{color: '#19B37E', fontSize: 70 }} />
        </Box>
    </Box>
  )
}

export default InquiryQuantities;
