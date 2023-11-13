import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import StepConnector from "@mui/material/StepConnector";

export default function VerticalLinearStepper({ steps }) {
  const [activeStep, setActiveStep] = React.useState(0);
   const CustomStepConnector = (props) => (
     <StepConnector
       {...props}
       style={{ height: "22px",Color: "#425668" }} // Adjust this value to control the size of the line
     />
   );
  return (
    <Box
      sx={{
        maxWidth: 400,
        overflow: "hidden",
      }}
    >
      <Stepper
        
        activeStep={activeStep}
        orientation="vertical"
        connector={<CustomStepConnector />}
      >
        {steps.map((step, index) => (
          <Step sx={{ height: 18 }} key={step.label}>
            <StepLabel
              sx={{ height: 10 }}
              icon={
                <FiberManualRecordIcon
                  sx={{ fontSize: 10, marginLeft: 1, color: "#425668" }}
                />
              }
            >
              <Typography
                sx={{
                  color: "#E7E7E7",
                  fontSize: "12px",
                  fontFamily: "Arial",
                  
                }}
              >
                {step.label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}