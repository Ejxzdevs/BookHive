import { Box , Typography } from '@mui/material'
import { getAllReport } from '../../services/reportApi';
import { useEffect, useState } from 'react';
import { Report } from '../../types/reportInterface';
import PieChartIcon from '@mui/icons-material/PieChart';

const ReportQuantities = () => {
    const [Report, setReport] = useState<Report[]>([]);
    
      useEffect(() => {
        const fetchReport = async () => {
          try {
            const data = await getAllReport();
            setReport(data)
          } catch (err) {
            console.error('Error fetching Report:', err);
          }
        };
    
        fetchReport();
      },[]);

    const totalReport = Report.length;

  return (
    <Box className="shadow-md flex flex-row rounded-md border-2 border-[#19B37E] bg-[#FFFFFF] min-h-[120px] w-[270px]" >
        <Box className="flex flex-col justify-center ps-7 w-[50%]" >
            <Typography sx={{fontFamily: 'Inter', fontWeight: 500 , marginLeft: 1}} variant="h5" >
                {totalReport}
            </Typography>
            <Typography sx={{color: '#19B37E', fontFamily: 'Inter', marginLeft: 1}} variant="body1" >
                Report
            </Typography>
        </Box>
        <Box className="flex items-center justify-center ps-7 w-[50%]" >
            <PieChartIcon sx={{color: '#19B37E', fontSize: 70 }} />
        </Box>
    </Box>
  )
}

export default ReportQuantities;
