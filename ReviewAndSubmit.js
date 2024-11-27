import React, { useState } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Card,
  CardContent,
  Grid,
  Button,
} from '@mui/material';

const ReviewAndSubmit = ({ handleSubmit, formData }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      // Filter out empty fields before submission (optional).
      const filteredFormData = Object.fromEntries(
        Object.entries(formData).filter(([_, value]) => value !== null && value !== '')
      );

      // Stringify nested objects for submission if necessary.
      const processedData = { ...filteredFormData };
      for (const key in processedData) {
        if (processedData[key] && typeof processedData[key] === 'object') {
          processedData[key] = JSON.stringify(processedData[key]);
        }
      }

      await handleSubmit(processedData);
      setLoading(false);
    } catch (err) {
      setError('Submission failed. Please try again.');
      console.error('Error during submission:', err);
      setLoading(false);
    }
  };

  // Helper function to render card content for a given object
  const renderCardContent = (data) =>
    Object.entries(data).map(([key, value]) => (
      <Typography key={key} variant="body1" sx={{ marginBottom: '8px' }}>
        <strong>{key}:</strong> {typeof value === 'object' && value !== null ? JSON.stringify(value, null, 2) : value}
      </Typography>
    ));

  return (
    <Box
      sx={{
        backgroundColor: '#F0F8FF',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: 'auto',
        marginTop: '20px',
      }}
    >
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        Submit
      </Typography>

      {Object.keys(formData).length === 0 ? (
        <Typography variant="body1" color="textSecondary" align="center">
          No details provided. Please fill in the required fields.
        </Typography>
      ) : (
        <Box sx={{ my: 2 }}>
          {/* Main Form Data */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Complaint Details
              </Typography>
              {renderCardContent(formData)}
            </CardContent>
          </Card>

          {/* Individual Details */}
          {formData.individualDetails && (
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Individual Details
                </Typography>
                {renderCardContent(formData.individualDetails)}
              </CardContent>
            </Card>
          )}
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ my: 2 }}>
          {error}
        </Alert>
      )}

      
    </Box>
  );
};

export default ReviewAndSubmit;
