import { Box , Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { getAllRequests } from '../../services/requestApi';
import { useEffect, useState } from 'react';
import { Request } from '../../types/requestInterface';
import { NavLink } from 'react-router-dom';

const RequestQuantities = () => {
    const [requests, setrequests] = useState<Request[]>([]);
    
      useEffect(() => {
        const fetchRequest = async () => {
          try {
            const data = await getAllRequests();
            setrequests(data)
          } catch (err) {
            console.error('Error fetching Request:', err);
          }
        };
    
        fetchRequest();
      },[]);

    const pendingRequests = requests.filter(request => request.request_status === 'Pending')
    const totalRequest = pendingRequests.length;

  return (
    <Box component={NavLink} to="/request" className="shadow-md flex flex-row rounded-md border-2 border-[#19B37E] bg-[#FFFFFF] min-h-[120px] w-[270px]" >
        <Box className="flex flex-col justify-center ps-7 w-[50%]" >
            <Typography sx={{fontFamily: 'Inter', fontWeight: 500 , marginLeft: 1}} variant="h5" >
                {totalRequest}
            </Typography>
            <Typography sx={{color: '#19B37E', fontFamily: 'Inter', marginLeft: 1}} variant="body1" >
                Requests
            </Typography>
        </Box>
        <Box className="flex items-center justify-center ps-7 w-[50%]" >
            <SendIcon sx={{color: '#19B37E', fontSize: 70 }} />
        </Box>
    </Box>
  )
}

export default RequestQuantities;
