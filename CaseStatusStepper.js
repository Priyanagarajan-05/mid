import React from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import VerifiedIcon from '@mui/icons-material/Verified';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

// Custom connector for the steps
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.success.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.grey[300],
    borderRadius: 1,
  },
}));

// Custom icon for each step
const CustomStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: ownerState.completed ? theme.palette.success.main : theme.palette.grey[300],
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  ...(ownerState.active && {
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
}));

// Custom step icon with corresponding icons
function CustomStepIcon(props) {
  const { active, completed, icon } = props;

  const icons = {
    1: <PendingIcon />,
    2: <VerifiedIcon />,
    3: <AssignmentTurnedInIcon />,
    4: <CheckCircleIcon />,
    5: <CloseIcon />,
  };

  return (
    <CustomStepIconRoot ownerState={{ completed, active }}>
      {icons[String(icon)]}
    </CustomStepIconRoot>
  );
}

// Case status steps
const steps = [
  'Registered Complaint',
  'Verification in Progress',
  'Investigation Ongoing',
  'Action Taken',
  'Case Closed',
];

export default function CaseStatusStepper({ activeStep = 0 }) {
  return (
    <Box
  sx={{
    width: '100%',
    mt: 4,
    padding: '20px', // Add padding around the entire stepper to give it some breathing room
    backgroundColor: '#F3F5F7', // Subtle light background to make the stepper pop out
    borderRadius: '12px', // Rounded corners for a smoother look
    boxShadow: '0px 4px 16px rgba(0.9, 0.9, 0, 4.1)', // Soft shadow to elevate the stepper visually
  }}
>
  <Stepper
    alternativeLabel
    activeStep={activeStep}
    connector={<CustomConnector />}
    sx={{
      backgroundColor: 'transparent', // Make sure the background is transparent so it blends well
      padding: '10px 0', // Slight padding to space out the steps more evenly
    }}
  >
    {steps.map((label, index) => (
      <Step key={index}>
        <StepLabel
          StepIconComponent={CustomStepIcon}
          sx={{
            fontWeight: 'bold', // Bold text for better readability
            fontSize: '10px', // Larger font size for labels
            color: activeStep === index ? '#1A73E8' : '#666', // Active step in blue, others in gray
            '& .MuiStepLabel-label': {
              fontSize: '16px', // Consistent font size for the labels
              color: activeStep === index ? '#1A73E8' : '#666', // Active color in blue, inactive in gray
            },
            '& .MuiStepIcon-root': {
              borderRadius: '50%', // Round the step icon for a modern look
              border: `2px solid ${activeStep === index ? '#1A73E8' : '#BDC3C7'}`, // Active step icon border in blue
              backgroundColor: activeStep === index ? '#1A73E8' : '#FFFFFF', // Active step background in blue
              width: '24px', // Define width of the step icon
              height: '24px', // Define height of the step icon
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease', // Smooth transition for step icon state change
            },
            '& .MuiStepIcon-text': {
              color: activeStep === index ? '#fff' : '#BDC3C7', // White text for active steps, light gray for others
              fontWeight: 'bold',
            },
          }}
        >
          {label}
        </StepLabel>
      </Step>
    ))}
  </Stepper>
</Box>
  );
}
