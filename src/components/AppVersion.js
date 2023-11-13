import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import "../assets/Styles/AppVersion.css";
import { useDispatch, useSelector } from 'react-redux';
import { setProgressValues } from '../redux/action';
import Head from "./Head";
const AppVersion = () => {
  const dispatch = useDispatch();
  const progressValues = useSelector((state) => state.progressValues);

  const versions = [
    { left: "0.1.5.2", right: "123k" },
    { left: "0.1.5.3", right: "53k" },
    { left: "0.1.5.4", right: "23k" },
    { left: "0.1.5.5", right: "3k" },
    { left: "0.1.5.6", right: "1k" },
  ];

  useEffect(() => {
    // Fetch progress values from Redux or API and set in the Redux store
    dispatch(setProgressValues([80, 60, 35, 45, 15])); // Example values, replace with actual data
  }, [dispatch]);
  return (
    <Box>
      <Head HeadData={"App Version"} />

      <Box style={{ padding: "17px" }}>
        <Typography className="usageText" fontSize= "16px" fontWeight= "500" fontFamily="Arial">App Usage across versions</Typography>
        {versions.map((version, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            marginTop="10px"
            height={30}
          >
            <Typography className="versionText">{version.left}</Typography>
            <LinearProgress
              variant="determinate"
              value={progressValues[index]}
              sx={{
                width: "250px",
                height: "18px",
                ml: 4,
                mr: 5 + index,
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#1Abb9c",
                },
                "&.MuiLinearProgress-root": {
                  backgroundColor: "#f2f7f5",
                },
              }}
            />
            <Typography className="versionRightText">
              {version.right}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AppVersion;