/*
import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, InputAdornment, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Tooltip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';

const AccusedInformation = ({ updateFormData, formData, setStepValid }) => {
  const individualDetails = formData.individualdetails || {};
  const [errors, setErrors] = useState({}); // Track validation errors

  const handleChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  const validateFields = () => {
    const newErrors = {};

    if (!individualDetails.accusedName) {
      newErrors.accusedName = 'Suspect Name';
    }

    if (!individualDetails.accusedLocation) {
      newErrors.accusedLocation = 'Suspect location is required';
    }

    if (!individualDetails.relation) {
      newErrors.relation = 'Suspect Details';
    }

    // Validate Gender
    if (!individualDetails.accusedgender) {
      newErrors.accusedgender = 'Gender is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setStepValid(validateFields());
  }, [individualDetails, setStepValid]);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Suspect Details (if known)
      </Typography>

      {}
      <Grid container spacing={2}>
        {}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Tooltip title="Please enter the full name of the accused" arrow>
              <TextField
                label="Suspect Name"
                value={individualDetails.accusedName || ''}
                onChange={(e) => handleChange('accusedName', e.target.value)}
                margin="normal"
                
                helperText={errors.accusedName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Tooltip>
          </FormControl>
        </Grid>

        {}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Suspect Address"
              value={individualDetails.accusedLocation || ''}
              onChange={(e) => handleChange('accusedLocation', e.target.value)}
              margin="normal"
              multiline
              rows={3}
              
              helperText={errors.accusedLocation}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HomeIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Grid>

        {}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Tooltip title="Suspect Details and Physical Appearance" arrow>
              <TextField
                label="Suspect Details and Physical Appearance"
                value={individualDetails.relation || ''}
                onChange={(e) => handleChange('relation', e.target.value)}
                margin="normal"
                multiline
                rows={3}
                required
                helperText={errors.relation}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DescriptionIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Tooltip>
          </FormControl>
        </Grid>

        {}
        <Grid item xs={12}>
          <FormControl component="fieldset" fullWidth margin="normal" required>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              value={individualDetails.accusedgender || ''}
              onChange={(e) => handleChange('accusedgender', e.target.value)}
            >
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
              <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccusedInformation;
*/

import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Tooltip } from '@mui/material';

const AccusedInformation = ({ updateFormData, formData, setStepValid }) => {
  const individualDetails = formData.individualdetails || {};
  const [errors, setErrors] = useState({}); // Track validation errors

  const handleChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  const validateFields = () => {
    const newErrors = {};

    if (!individualDetails.accusedName) {
      newErrors.accusedName = 'Suspect Name is required';
    }

    if (!individualDetails.accusedLocation) {
      newErrors.accusedLocation = 'Suspect location is required';
    }

    if (!individualDetails.relation) {
      newErrors.relation = 'Details and Physical Appearance are required';
    }

    if (!individualDetails.accusedgender) {
      newErrors.accusedgender = 'Gender is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setStepValid(validateFields());
  }, [individualDetails, setStepValid]);

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
        Suspect Details (if known)
      </Typography>

      <Grid container spacing={2}>
        {/* Suspect Name */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Tooltip title="Please enter the full name of the accused" arrow>
              <TextField
                label="Suspect Name"
                value={individualDetails.accusedName || ''}
                onChange={(e) => handleChange('accusedName', e.target.value)}
                margin="normal"
                helperText={errors.accusedName}
                error={!!errors.accusedName}
                style={{ backgroundColor: '#ffffff', borderRadius: '5px' }}
              />
            </Tooltip>
          </FormControl>
        </Grid>

        {/* Suspect Address/Location */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Suspect Address"
              value={individualDetails.accusedLocation || ''}
              onChange={(e) => handleChange('accusedLocation', e.target.value)}
              margin="normal"
              multiline
              rows={3}
              helperText={errors.accusedLocation}
              error={!!errors.accusedLocation}
              style={{ backgroundColor: '#ffffff', borderRadius: '5px' }}
            />
          </FormControl>
        </Grid>

        {/* Details or Relation */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Tooltip title="Suspect Details and Physical Appearance" arrow>
              <TextField
                label="Suspect Details and Physical Appearance"
                value={individualDetails.relation || ''}
                onChange={(e) => handleChange('relation', e.target.value)}
                margin="normal"
                multiline
                rows={3}
                helperText={errors.relation}
                error={!!errors.relation}
                style={{ backgroundColor: '#ffffff', borderRadius: '5px' }}
              />
            </Tooltip>
          </FormControl>
        </Grid>

        {/* Gender selection */}
        <Grid item xs={12}>
          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              value={individualDetails.accusedgender || ''}
              onChange={(e) => handleChange('accusedgender', e.target.value)}
            >
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
              <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
            {errors.accusedgender && (
              <Typography color="error" variant="caption">
                {errors.accusedgender}
              </Typography>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccusedInformation;
