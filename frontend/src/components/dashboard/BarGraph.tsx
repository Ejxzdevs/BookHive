import { Box } from '@mui/material';
import { getAllRequests } from '../../services/requestApi';
import { useEffect, useState } from 'react';
import { Request } from '../../types/requestInterface';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Title, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title, Legend);

const BarGraph = () => {
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const data = await getAllRequests();
        setRequests(data);
      } catch (err) {
        console.error('Error fetching requests:', err);
      }
    };

    fetchRequest();
  }, []);

  // Helper function to extract month from a date
  const getMonthFromDate = (date: Date) => {
    const month = new Date(date).getMonth(); // 0-based, so January is 0, February is 1, etc.
    return month;
  };

  // Count approved requests for each month (Jan to Dec)
  const monthlyApprovedCounts = Array(12).fill(0); // Initialize an array with 12 zeros for each month

  requests.forEach(request => {
    if (request.request_status === 'Approved') {
      const month = getMonthFromDate(request.request_date);
      monthlyApprovedCounts[month] += 1; // Increment the count for the corresponding month
    }
  });

  // Prepare the chart data
  const chartData = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ], // Labels for the months
    datasets: [
      {
        label: 'Request Analysis',
        data: monthlyApprovedCounts,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)', 
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{margin: 0}} className="Inter border-2 border-[#19B37E] overflow-y-auto rounded-sm shadow-md bg-[#FFFFFF]" >
      <Bar data={chartData} />
    </Box>
  );
};

export default BarGraph;
