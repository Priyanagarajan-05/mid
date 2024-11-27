/*
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const AdditionalDetails = ({ updateFormData, formData }) => {
  const individualDetails = formData.individualdetails || {};  // Ensure the details are correctly accessed

  // Handler for adding a new witness
  const handleAddWitness = () => {
    const newWitness = { name: '', contact: '' };
    updateFormData({
      witnesses: [...(individualDetails.witnesses || []), newWitness],
    });
  };

  // Handler for updating witness details
  const handleWitnessChange = (index, field, value) => {
    const updatedWitnesses = [...(individualDetails.witnesses || [])];
    updatedWitnesses[index] = { ...updatedWitnesses[index], [field]: value };
    updateFormData({ witnesses: updatedWitnesses });
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Additional Information
      </Typography>

      {}
      <TextField
        label="Any Additional Comments or Information"
        value={individualDetails.additionalComments || ''}
        onChange={(e) => updateFormData({ additionalComments: e.target.value })}
        fullWidth
        margin="normal"
        multiline
        rows={4}
        placeholder="Enter any additional comments or information..."
      />

      <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
        Witnesses Information
      </Typography>

      {}
      {(individualDetails.witnesses || []).map((witness, index) => (
        <Box key={index} sx={{ marginBottom: 2 }}>
          <TextField
            label="Witness Name"
            value={witness.name}
            onChange={(e) => handleWitnessChange(index, 'name', e.target.value)}
            fullWidth
            margin="normal"
            required
            placeholder="Enter witness name"
          />
          <TextField
            label="Witness Contact"
            value={witness.contact}
            onChange={(e) => handleWitnessChange(index, 'contact', e.target.value)}
            fullWidth
            margin="normal"
            required
            placeholder="Enter witness contact"
          />
        </Box>
      ))}

      {}
      <Button
        onClick={handleAddWitness}
        variant="outlined"
        sx={{ marginTop: 2 }}
      >
        Add Witness
      </Button>
    </Box>
  );
};

export default AdditionalDetails;
*/

import React from 'react';
import { Box, Typography, TextField, Button, Grid, MenuItem } from '@mui/material';

const witnessTypes = ['Eyewitness', 'Character Witness', 'Expert Witness', 'Other'];

const AdditionalDetails = ({ updateFormData, formData }) => {
  const individualDetails = formData.individualdetails || {}; // Ensure the details are correctly accessed

  // Handler for adding a new witness
  const handleAddWitness = () => {
    const newWitness = { name: '', email: '', witnessType: '' };
    updateFormData({
      witnesses: [...(individualDetails.witnesses || []), newWitness],
    });
  };

  // Handler for updating witness details
  const handleWitnessChange = (index, field, value) => {
    const updatedWitnesses = [...(individualDetails.witnesses || [])];
    updatedWitnesses[index] = { ...updatedWitnesses[index], [field]: value };
    updateFormData({ witnesses: updatedWitnesses });
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
        Additional Information
      </Typography>

      {/* Additional Comments or Information */}
      <TextField
        label="Any Additional Comments or Information"
        value={individualDetails.additionalComments || ''}
        onChange={(e) => updateFormData({ additionalComments: e.target.value })}
        fullWidth
        margin="normal"
        multiline
        rows={4}
        placeholder="Enter any additional comments or information..."
      />

      <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
        Witnesses Information
      </Typography>

      {/* Render list of witnesses */}
      {(individualDetails.witnesses || []).map((witness, index) => (
        <Box key={index} sx={{ marginBottom: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                label="Witness Name"
                value={witness.name}
                onChange={(e) => handleWitnessChange(index, 'name', e.target.value)}
                fullWidth
                margin="normal"
                required
                placeholder="Enter witness name"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Witness Email"
                value={witness.email}
                onChange={(e) => handleWitnessChange(index, 'email', e.target.value)}
                fullWidth
                margin="normal"
                required
                placeholder="Enter witness email"
                type="email"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Witness Type"
                value={witness.witnessType}
                onChange={(e) => handleWitnessChange(index, 'witnessType', e.target.value)}
                fullWidth
                margin="normal"
                select
                required
                placeholder="Select witness type"
              >
                {witnessTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Box>
      ))}

      {/* Button to add new witness */}
      <Button
        onClick={handleAddWitness}
        variant="outlined"
        sx={{ marginTop: 2 }}
      >
        + Add Witness
      </Button>
    </Box>
  );
};

export default AdditionalDetails;
