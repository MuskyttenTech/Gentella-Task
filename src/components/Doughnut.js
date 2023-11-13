// DoughnutChart.js
import React, { useRef, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Chart from "chart.js/auto";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { fetchDoughnutChartData } from "../redux/action";
import '../assets/Styles/DoughnutChart.css'
import Head from "./Head";

const DoughnutChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const dispatch = useDispatch();

  const doughnutChartData = useSelector((state) => state.doughnutChartData);
  const loadingChartData = useSelector((state) => state.loadingChartData);

  useEffect(() => {
    // Fetch data when the component mounts
    dispatch(fetchDoughnutChartData());
  }, [dispatch]);

  useEffect(() => {
    if (!doughnutChartData) {
      // Data is still loading or is null, handle accordingly
      return;
    }

    const myChartRef = chartRef.current.getContext("2d");

    const chartData = {
      labels: doughnutChartData.labels,
      datasets: [
        {
          data: doughnutChartData.data,
          backgroundColor: [
            "rgb(53, 154, 222)",
            "rgb(35,185,154)",
            "rgb(155,87,191)",
            "rgb(191,196,200)",
            "rgb(233,94,79)",
          ],
        },
      ],
    };

    // Destroy existing chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart instance
    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: chartData,
      options: {
        plugins: {
          legend: {
            display: true,
            position: "right",
            onClick: (e, legendItem) => {
              return false;
            },
            labels: {
              pointStyle: "square",
              boxWidth: 15,
              padding: 20,
              fontFamily: " Helvetica Neue, sans-serif",
              // fontSize: "15px",
            },
          },
          tooltip: {
            callbacks: {
              bodyFontFamily: "Helvetica Neue,sans-serif",
              bodyFontSize: 14,
              bodyFontWeight: "900",
              label: (context) => {
                const dataIndex = context.dataIndex;
                const label = chartData.labels[dataIndex];
                const value = chartData.datasets[0].data[dataIndex];
                console.log(label);
                console.log(value);
                return `${label}: ${value}`;
              },
            },
          },
        },
      },
    });

    // Cleanup on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [loadingChartData, doughnutChartData]);

  return (
    <Box>
      <Head HeadData={"Device Usage"} />

      <Box className="chart-box">
        <Box className="chart-section">
          <Box className="chart-info">
            <Typography className="progress-text" variant="h6" component="div"  fontSize= "16px" fontWeight= "500" fontFamily="Arial">
              Top 5
            </Typography>
            <Typography className="progress-text" variant="h6" component="div"  fontSize= "16px" fontWeight= "500" fontFamily="Arial">
              Device
            </Typography>
          </Box>
          <Box >
            <canvas id="myChart" ref={chartRef} style={{ width: "100%" }} />
          </Box>
        </Box>
        <Box className="progress-section">
          <Typography
            className="progress-text progress-title"
            variant="h6"
            gutterBottom
            component="div"
            fontSize= "16px" fontWeight= "500"
            fontFamily="Arial"
          >
            Progress
          </Typography>
          <Box className="progress-grid">
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1.2}
              style={{ padding: "21px 0px 0px 0px " }}
            >
              {["30%", "10%", "20%", "15%", "30%"].map((label, index) => (
                <Grid item key={index} style={{ paddingTop: "4.6px" }}>
                  <Typography
                    sx={{
                      fontSize: 15,
                      fontWeight: "400",
                      paddingRight: "2px",
                      fontFamily:"Arial"
                    }}
                    variant="h6"
                    gutterBottom
                    component="div"
                    color="#73879c"
                  >
                    {label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DoughnutChart;