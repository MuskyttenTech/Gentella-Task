import React from "react";
import "../App.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import BuildIcon from "@mui/icons-material/Build";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuIcon from "@mui/icons-material/Menu";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SpeedometerComponent from "./SpeedometerComponent";
import '../assets/Styles/QuickSettings.css'
import Head from './Head'


const iconList = [
  CalendarTodayIcon,
  MenuIcon,
  TrendingUpIcon,
  BarChartIcon,
  TrendingUpIcon,
  BarChartIcon,
  TrendingUpIcon,
];

const QuickSettings = () => {
  return (
    <Box>
      <Head HeadData="Quick Settings" />

      <Divider variant="middle" className="divider" />

      <Box className="list-container">
        <List className="list">
          {[
            "Settings",
            "Subscription",
            "Auto Renewal",
            "Achievements",
            "Auto Renewal",
            "Achievements",
            "Logout",
          ].map((text, index) => (
            <ListItem key={text} disablePadding className="list-item">              
              <ListItemIcon >
                {React.createElement(iconList[index % iconList.length], {
                  className: "list-item-icon",
                })}
              </ListItemIcon>
              <Box >
                <Typography className="list-item-text"  fontSize= "13px" fontWeight= "500" fontFamily="Arial"> {text} </Typography>
              </Box>
            </ListItem>
          ))}
        </List>

        <Box className="additional-box">
        
          <Typography className="profile-completion-text" fontFamily="Arial">
            Profile Completion
          </Typography>
          <SpeedometerComponent />
          <Box className="speedometer-box">
            <Typography className="percentage-text" fontFamily="Arial">3,200%</Typography>
            <Typography className="percentage-text" fontFamily="Arial">100%</Typography>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default QuickSettings;
