import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import BuildIcon from "@mui/icons-material/Build";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import "../assets/Styles/CommonHead.css";

const Head = ({HeadData}) => {
  return (
    <Box>
      <Box className="quick-settings">
        <Box className="title-box">
          <Typography fontFamily="Arial" sans-serif
            fontSize="20px"
            color= "#73879c"
            fontWeight="400">
            {HeadData}
          </Typography>
        </Box>
        <Box className="icons-box">
          <KeyboardArrowUpIcon
            sx={{
              fontSize: 25,
              color: "#73879C",
              fontWeight: "900",
              padding: "2px",
            }}
          />
          <BuildIcon className="build-icon" />
          <CloseIcon
            sx={{ fontSize: "20px", color: "#73879C", padding: "2px" }}
          />
        </Box>
      </Box>
      <Divider variant="middle" className="divider" />
    </Box>
  );
};
export default 
Head;