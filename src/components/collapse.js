import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function VerticalLinearStepper({ steps,isOpen }) {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <Box sx={{ maxWidth: 200, overflow: "hidden" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
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
                  fontFamily: "Helvetica Neue",
                  marginBottom: isOpen ? "4px" : "0", 
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