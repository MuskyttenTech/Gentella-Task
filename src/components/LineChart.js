import React, { useState ,useEffect} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, LinearProgress, Button } from "@mui/material";
import { Line } from "react-chartjs-2";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  Chart as Chartjs,
  Title,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import CustomCalendar from "./CustomCalendar";
import { fetchData } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import lineChartStyles  from '../assets/Styles/LineChartStyles.js'


Chartjs.register(
  Title,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);


const LineChart = ({ drawerWidth }) => {

  const dispatch = useDispatch();
  const chartData = useSelector((state) => state.data);
  const campaignNames = useSelector((state) => state.campaignNames);

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
    key: "selection",
  });
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (!chartData || !campaignNames) {
    return <div>Loading...</div>;
  }

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  const initialProgressValues = [80, 60, 35, 45];


  const yaxisOptions = {
    scales: {
      x: {
        CategoryPercentage: 1,
        barPercentage: 1,
      },
      y: {
        ticks: {
          min: 0,
          max: 150,
          stepSize: 10,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      interaction: {
        mode: "index",
      },
    },
  };

  return (
    <Box>
      <Box sx={lineChartStyles.headerContainer}>
        <Box sx={lineChartStyles.graphTitleContainer}>
          <Typography sx={lineChartStyles.graphTitle}>
            Network Activities
          </Typography>
          <Typography sx={lineChartStyles.graphSubtitle}>
            Graph title sub-title
          </Typography>
        </Box>

        <Box sx={lineChartStyles.calendarContainer}>
          <Button onClick={toggleCalendar}>
            <CalendarMonthIcon sx={lineChartStyles.calendarButton} />
            <Typography sx={lineChartStyles.calendarText}>
              October 11, 2023 - November 9, 2023
            </Typography>
          </Button>
        </Box>
      </Box>
      <Grid container sx={lineChartStyles.gridContainer}>
      <Grid item md={12} lg={9} sx={{ height: "280px", paddingRight: "20px" }}>
          <Line
            data={chartData}
            options={{
              ...yaxisOptions,
              responsive: true,
              maintainAspectRatio: false,
            }}
            height={350}
          />
        </Grid>

        <Grid  item md={12} lg={3} sx={lineChartStyles.campaignContainer}>
        <Box sx={lineChartStyles.campaignHeader}>
            <Typography sx={lineChartStyles.campaignTitle}>
              Top Campaign Performance
            </Typography>
          </Box>
          {campaignNames.map((name, index) => (
            <div key={index}>
              <Typography sx={lineChartStyles.campaignName}>{name}</Typography>
              <LinearProgress
                variant="determinate"
                value={initialProgressValues[index]}
                sx={lineChartStyles.linearProgress}
              />
            </div>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default LineChart;
