/*
import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, InputAdornment, MenuItem, Button, Grid } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';

const crimeTypes = [
  'Environmental Violation',
  'Intellectual Property Theft',
  'Counterfeiting',
  'Rioting',
  'Bigamy/Polygamy',
  'Smuggling',
  'Slavery or Forced Labor',
  'Medical Negligence',
  'Others',
];

const IncidentDetails = ({ prevStep, nextStep, updateFormData, formData, setStepValid }) => {
  const individualDetails = formData.individualdetails || {};
  const [errors, setErrors] = useState({}); // Track validation errors
  const [isTouched, setIsTouched] = useState({}); // To track whether the field was touched for the first time

  const handleChange = (field, value) => {
    updateFormData({ [field]: value });
    setIsTouched((prevState) => ({ ...prevState, [field]: true }));
  };

  const validateFields = () => {
    const newErrors = {};
    // Validate Date (must be a valid date)
    if (!individualDetails.incidentDate || isNaN(Date.parse(individualDetails.incidentDate))) {
      newErrors.incidentDate = 'Valid Date of incident is required';
    }
    // Validate Time (must be a valid time)
    if (!individualDetails.incidentTime) {
      newErrors.incidentTime = 'Time of incident is required';
    }
    // Validate Location (must be alphabetic)
    if (!individualDetails.incidentLocation || !/^[a-zA-Z\s]*$/.test(individualDetails.incidentLocation)) {
      newErrors.incidentLocation = 'Location should contain only alphabets and spaces';
    }
    // Validate Nature of crime (must be selected)
    if (!individualDetails.natureOfCrime) {
      newErrors.natureOfCrime = 'Nature of crime is required';
    }
    // Validate Description (should be a non-empty string)
    if (!individualDetails.incidentDescription) {
      newErrors.incidentDescription = 'Description of incident is required';
    }

    setErrors(newErrors);

    // Return whether the form is valid
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setStepValid(validateFields());
  }, [individualDetails, setStepValid]);

  const handleNext = () => {
    if (validateFields()) {
      nextStep();
    }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Incident Details
      </Typography>

      {}
      <Grid container spacing={2}>

        {}
        <Grid item xs={12} md={6}>
          <TextField
            label="Date of Incident"
            type="date"
            value={individualDetails.incidentDate || ''}
            onChange={(e) => handleChange('incidentDate', e.target.value)}
            fullWidth
            margin="normal"
            required
            error={isTouched.incidentDate && !!errors.incidentDate}
            helperText={isTouched.incidentDate && errors.incidentDate}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DateRangeIcon />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        {}
        <Grid item xs={12} md={6}>
          <TextField
            label="Time of Incident"
            type="time"
            value={individualDetails.incidentTime || ''}
            onChange={(e) => handleChange('incidentTime', e.target.value)}
            fullWidth
            margin="normal"
            error={isTouched.incidentTime && !!errors.incidentTime}
            helperText={isTouched.incidentTime && errors.incidentTime}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccessTimeIcon />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        {}
        <Grid item xs={12}>
          <TextField
            label="Location of Incident"
            value={individualDetails.incidentLocation || ''}
            onChange={(e) => handleChange('incidentLocation', e.target.value)}
            fullWidth
            margin="normal"
            required
            error={isTouched.incidentLocation && !!errors.incidentLocation}
            helperText={isTouched.incidentLocation && errors.incidentLocation}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {}
        <Grid item xs={12} md={6}>
          <TextField
            label="Crime Type"
            select
            value={individualDetails.natureOfCrime || ''}
            onChange={(e) => handleChange('natureOfCrime', e.target.value)}
            fullWidth
            margin="normal"
            required
            error={isTouched.natureOfCrime && !!errors.natureOfCrime}
            helperText={isTouched.natureOfCrime && errors.natureOfCrime}
          >
            {crimeTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
        </Grid>


        {}
        <Grid item xs={12}>
          <TextField
            label="Description of Incident"
            value={individualDetails.incidentDescription || ''}
            onChange={(e) => handleChange('incidentDescription', e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
            error={isTouched.incidentDescription && !!errors.incidentDescription}
            helperText={isTouched.incidentDescription && errors.incidentDescription}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        
      </Grid>
    </Box>
  );
};

export default IncidentDetails;
*/

import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, MenuItem, Grid } from '@mui/material';

const crimeTypes = [
  'Environmental Violation',
  'Intellectual Property Theft',
  'Counterfeiting',
  'Rioting',
  'Bigamy/Polygamy',
  'Smuggling',
  'Slavery or Forced Labor',
  'Medical Negligence',
  'Others',
];

const IncidentDetails = ({ prevStep, nextStep, updateFormData, formData, setStepValid }) => {
  const individualDetails = formData.individualdetails || {};
  const [errors, setErrors] = useState({}); // Track validation errors
  const [isTouched, setIsTouched] = useState({}); // To track whether the field was touched for the first time

  const handleChange = (field, value) => {
    updateFormData({ [field]: value });
    setIsTouched((prevState) => ({ ...prevState, [field]: true }));
  };

  const validateFields = () => {
    const newErrors = {};
    // Validate Date (must be a valid date)
    if (!individualDetails.incidentDate || isNaN(Date.parse(individualDetails.incidentDate))) {
      newErrors.incidentDate = 'Enter valid date';
    }
    // Validate Time (must be a valid time)
    if (!individualDetails.incidentTime) {
      newErrors.incidentTime = 'Enter incident time';
    }
    // Validate Location (must be alphabetic)
    if (!individualDetails.incidentLocation || !/^[a-zA-Z\s]*$/.test(individualDetails.incidentLocation)) {
      newErrors.incidentLocation = 'Enter Location';
    }
    // Validate Nature of crime (must be selected)
    if (!individualDetails.natureOfCrime) {
      newErrors.natureOfCrime = 'Nature of crime is required';
    }
    // Validate Description (should be a non-empty string)
    if (!individualDetails.incidentDescription) {
      newErrors.incidentDescription = 'Description of incident is required';
    }

    setErrors(newErrors);

    // Return whether the form is valid
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setStepValid(validateFields());
  }, [individualDetails, setStepValid]);

  const handleNext = () => {
    if (validateFields()) {
      nextStep();
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#F0F8FF', // Light Blue background
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: 'auto',
        marginTop: '20px',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Incident Details
      </Typography>

      <Grid container spacing={2}>
        {/* Date of Incident */}
        <Grid item xs={12} md={6}>
          <TextField
            label="Incident Date"
            type="date"
            value={individualDetails.incidentDate || ''}
            onChange={(e) => handleChange('incidentDate', e.target.value)}
            fullWidth
            
           
            error={isTouched.incidentDate && !!errors.incidentDate}
            helperText={isTouched.incidentDate && errors.incidentDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        {/* Time of Incident */}
        <Grid item xs={12} md={6}>
          <TextField
            label="Incident Time"
            type="time"
            value={individualDetails.incidentTime || ''}
            onChange={(e) => handleChange('incidentTime', e.target.value)}
            fullWidth
            margin="normal"
            error={isTouched.incidentTime && !!errors.incidentTime}
            helperText={isTouched.incidentTime && errors.incidentTime}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        {/* Location of Incident */}
        <Grid item xs={12}>
          <TextField
            label="Location of Incident"
            value={individualDetails.incidentLocation || ''}
            onChange={(e) => handleChange('incidentLocation', e.target.value)}
            fullWidth
            margin="normal"
           
            error={isTouched.incidentLocation && !!errors.incidentLocation}
            helperText={isTouched.incidentLocation && errors.incidentLocation}
          />
        </Grid>

        {/* Nature of Crime */}
        <Grid item xs={12} md={6}>
          <TextField
            label="Crime Type"
            select
            value={individualDetails.natureOfCrime || ''}
            onChange={(e) => handleChange('natureOfCrime', e.target.value)}
            fullWidth
            margin="normal"
          
            error={isTouched.natureOfCrime && !!errors.natureOfCrime}
            helperText={isTouched.natureOfCrime && errors.natureOfCrime}
          >
            {crimeTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Description of Incident */}
        <Grid item xs={12}>
          <TextField
            label="Description of Incident"
            value={individualDetails.incidentDescription || ''}
            onChange={(e) => handleChange('incidentDescription', e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            
            error={isTouched.incidentDescription && !!errors.incidentDescription}
            helperText={isTouched.incidentDescription && errors.incidentDescription}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default IncidentDetails;
