/*
import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, InputAdornment, MenuItem, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';

const identificationProofTypes = ['Aadhaar', 'Voter ID', 'Passport', 'Others'];

const ComplainantInformation = ({ prevStep, nextStep, updateFormData, formData, setStepValid }) => {
  const individualDetails = formData.individualdetails || {};
  const [errors, setErrors] = useState({}); // Track validation errors

  const handleChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  const validateFields = () => {
    const newErrors = {};

    // Validate Full Name
    if (!individualDetails.fullName) {
      newErrors.fullName = 'Full name is required';
    }

    // Validate Address
    if (!individualDetails.address) {
      newErrors.address = 'Address is required';
    }

    // Validate Phone Number
    if (!individualDetails.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    }

    // Validate Email Address
    if (individualDetails.emailAddress && !/\S+@\S+\.\S+/.test(individualDetails.emailAddress)) {
      newErrors.emailAddress = 'Valid email is required';
    }

    // Validate Identification Proof Type
    if (!individualDetails.identificationProofType) {
      newErrors.identificationProofType = 'Identification proof type is required';
    }

    // Validate Identification Proof Number
    if (!individualDetails.identificationProofNumber) {
      newErrors.identificationProofNumber = 'Identification proof number is required';
    }

    // Validate Gender
    if (!individualDetails.gender) {
      newErrors.gender = 'Gender is required';
    }

    setErrors(newErrors);

    // Return whether the form is valid
    return Object.keys(newErrors).length === 0;
  };

  // Update the parent component with form validity
  useEffect(() => {
    const isValid = validateFields();
    setStepValid(isValid);
  }, [individualDetails, setStepValid]);

  const handleNext = () => {
    if (validateFields()) {
      nextStep();
    }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Complainant Information
      </Typography>

      {}
      <TextField
        label="Full Name"
        value={individualDetails.fullName || ''}
        onChange={(e) => handleChange('fullName', e.target.value)}
        fullWidth
        margin="normal"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />

      {}
      <TextField
        label="Address"
        value={individualDetails.address || ''}
        onChange={(e) => handleChange('address', e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={3}
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HomeIcon />
            </InputAdornment>
          ),
        }}
      />

      {}
      <TextField
        label="Phone Number"
        type="tel"
        value={individualDetails.phoneNumber || ''}
        onChange={(e) => handleChange('phoneNumber', e.target.value)}
        fullWidth
        margin="normal"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
      />

      {}
      <TextField
        label="Email Address"
        type="email"
        value={individualDetails.emailAddress || ''}
        onChange={(e) => handleChange('emailAddress', e.target.value)}
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />

      {}
      <TextField
        label="Identification Proof Type"
        select
        value={individualDetails.identificationProofType || ''}
        onChange={(e) => handleChange('identificationProofType', e.target.value)}
        fullWidth
        margin="normal"
        required
      >
        {identificationProofTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </TextField>

      {}
      <TextField
        label="Identification Proof Number"
        value={individualDetails.identificationProofNumber || ''}
        onChange={(e) => handleChange('identificationProofNumber', e.target.value)}
        fullWidth
        margin="normal"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BadgeIcon />
            </InputAdornment>
          ),
        }}
      />

      {}
      <FormControl component="fieldset" fullWidth margin="normal" required>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          row
          value={individualDetails.gender || ''}
          onChange={(e) => handleChange('gender', e.target.value)}
        >
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
          <FormControlLabel value="Other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default ComplainantInformation;
*/
import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const ComplainantInformation = ({ prevStep, nextStep, updateFormData, formData, setStepValid }) => {
  const individualDetails = formData.individualdetails || {};
  const [errors, setErrors] = useState({}); // Track validation errors

  const handleChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  const validateFields = () => {
    const newErrors = {};

    // Validate Full Name
    if (!individualDetails.complainantName) {
      newErrors.complainantName = 'Enter Complainant Name';
    }

    // Validate Address
    if (!individualDetails.address) {
      newErrors.address = 'Enter Address';
    }

    // Validate Phone Number
    if (!individualDetails.phoneNumber) {
      newErrors.phoneNumber = 'Enter Phone number';
    }

    // Validate Email Address
    if (individualDetails.emailAddress && !/\S+@\S+\.\S+/.test(individualDetails.emailAddress)) {
      newErrors.emailAddress = 'Check email format : example@gmail.com';
    }

    // Validate Aadhaar Number
    if (!individualDetails.aadhaarNumber) {
      newErrors.aadhaarNumber = 'Enter Aadhaar number';
    }

    // Validate PAN Number
    if (!individualDetails.panNumber) {
      newErrors.panNumber = 'Enter PAN number';
    }

    // Validate Gender
    if (!individualDetails.gender) {
      newErrors.gender = 'Select Gender';
    }

    setErrors(newErrors);

    // Return whether the form is valid
    return Object.keys(newErrors).length === 0;
  };

  // Update the parent component with form validity
  useEffect(() => {
    const isValid = validateFields();
    setStepValid(isValid);
  }, [individualDetails, setStepValid]);

  const handlePrev = () => {
    prevStep();
  };

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
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          textAlign: 'center',
          marginBottom: '20px',
          fontWeight: '600',
          color: '#004d99', // Dark blue color for title
        }}
      >
        Complainant Information
      </Typography>

      {/* Full Name */}
      <TextField
        label="Complainant Name"
        value={individualDetails.complainantName || ''}
        onChange={(e) => handleChange('complainantName', e.target.value)}
        fullWidth
        margin="normal"
        required
        sx={{
          marginBottom: '20px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: '#fff',
            '&:hover': {
              borderColor: '#00b3b3', // Hover effect with teal
            },
          },
          '& .MuiInputLabel-root': {
            color: '#004d99', // Blue label color
          },
        }}
      />

      {/* Address */}
      <TextField
        label="Address"
        value={individualDetails.address || ''}
        onChange={(e) => handleChange('address', e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={3}
        
        sx={{
          marginBottom: '20px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: '#fff',
            '&:hover': {
              borderColor: '#00b3b3',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#004d99',
          },
        }}
      />

      {/* Phone Number */}
      <TextField
        label="Phone Number"
        type="tel"
        value={individualDetails.phoneNumber || ''}
        onChange={(e) => handleChange('phoneNumber', e.target.value)}
        fullWidth
        margin="normal"
        required
        sx={{
          marginBottom: '20px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: '#fff',
            '&:hover': {
              borderColor: '#00b3b3',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#004d99',
          },
        }}
      />

      {/* Email Address */}
      <TextField
        label="Email Address"
        type="email"
        value={individualDetails.emailAddress || ''}
        onChange={(e) => handleChange('emailAddress', e.target.value)}
        fullWidth
        required
        margin="normal"
        sx={{
          marginBottom: '20px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: '#fff',
            '&:hover': {
              borderColor: '#00b3b3',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#004d99',
          },
        }}
      />

      {/* Aadhaar Number */}
      <TextField
        label="Aadhaar Number"
        value={individualDetails.aadhaarNumber || ''}
        onChange={(e) => handleChange('aadhaarNumber', e.target.value)}
        fullWidth
        margin="normal"
        required
        error={Boolean(errors.aadhaarNumber)}
        helperText={errors.aadhaarNumber}
        sx={{
          marginBottom: '20px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: '#fff',
            '&:hover': {
              borderColor: '#ff4d4d', // Red color on error
            },
          },
          '& .MuiInputLabel-root': {
            color: '#004d99',
          },
        }}
      />

      {/* PAN Number */}
      <TextField
        label="PAN Number"
        value={individualDetails.panNumber || ''}
        onChange={(e) => handleChange('panNumber', e.target.value)}
        fullWidth
        margin="normal"
       
        error={Boolean(errors.panNumber)}
        helperText={errors.panNumber}
        sx={{
          marginBottom: '20px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: '#fff',
            '&:hover': {
              borderColor: '#ff4d4d',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#004d99',
          },
        }}
      />

      {/* Gender */}
      <FormControl
        component="fieldset"
        fullWidth
        margin="normal"
       
        sx={{
          marginBottom: '20px',
        }}
      >
        <FormLabel component="legend" sx={{ color: '#004d99' }}>Gender</FormLabel>
        <RadioGroup
          row
          value={individualDetails.gender || ''}
          onChange={(e) => handleChange('gender', e.target.value)}
        >
          <FormControlLabel value="Male" control={<Radio sx={{ color: '#004d99' }} />} label="Male" />
          <FormControlLabel value="Female" control={<Radio sx={{ color: '#004d99' }} />} label="Female" />
          <FormControlLabel value="Other" control={<Radio sx={{ color: '#004d99' }} />} label="Other" />
        </RadioGroup>
      </FormControl>

      
    </Box>
  );
};

export default ComplainantInformation;
