
/*
import React, { useState } from 'react';
import {
  Fade, Box, CircularProgress, Stepper, Step, StepLabel, Button,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import IncidentDetails from './IncidentDetails';
import ComplainantInformation from './ComplainantInformation';
import SuspectInformation from './SuspectInformation';
import Evidence from './Evidence';
import ReviewAndSubmit from './ReviewAndSubmit';
import AdditionalDetails from './AdditionalDetails';
import { decryptToken } from "../authUtils";

const steps = [
  'Complainant Information',
  'Incident Details',
  
  'Suspect Information',
  'Additional Details',
  'Evidence Upload',
  'Review and Submit',
];

const ComplaintMultiForm = () => {
  const navigate = useNavigate();
  const [isStepValid, setStepValid] = useState(false);
  const jwtToken = sessionStorage.getItem('jwt');  
  const token = decryptToken(jwtToken);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    categoryid: 25,
    userid: 'UID400',
    policeid: 'PID400',
    reasonforwithdrawal: null,
    iswithdrawalaccepted: 0,
    iswithdrawn: 0,
    iscomplaintaccepted: 1,
    casestatus: 'Complaint Registered',
    isfirfiled: 0,
    individualdetails: {
      evidenceFiles: [],
    },
    aadhaarUpload: null,
  });
  const [loading, setLoading] = useState(false);

  //const token = "eyJraWQiOiJPMGgyenNCR2lacnlSTzBkNklqdDI1SzdteldpREJKejdhK0lBV2R6XC9yVT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI3OGYxZDNmMC05MGMxLTcwOTMtOWYxZi05OGNlNzc0ZjY0ZTgiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYmlydGhkYXRlIjoiMjAwMi0xMC0yMCIsImdlbmRlciI6Im1hbGUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9RUHVKZk9hRmMiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiNzhmMWQzZjAtOTBjMS03MDkzLTlmMWYtOThjZTc3NGY2NGU4Iiwib3JpZ2luX2p0aSI6IjI1NWRmZmY3LTU2NGQtNDliMy05ZGQ0LWRkZmE5MDAxM2JlZCIsImF1ZCI6IjJtbnYxN3ZvYTdlOHE2YmFubGcwajBxdGgiLCJldmVudF9pZCI6ImY4Mjc2N2QwLTZmNzctNDIwNC1hNjk3LTI4YTI5MjdiNTQ5MiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzMyMzY0NjIyLCJuYW1lIjoiU2hpdmEgUmFtYWtyaXNobmFuIiwicGhvbmVfbnVtYmVyIjoiKzkxODgyNTc5MjI2NSIsImV4cCI6MTczMjQ1MTAyMiwiY3VzdG9tOnJvbGUiOiJ1c2VyIiwiaWF0IjoxNzMyMzY0NjIyLCJqdGkiOiI0ZjdmYmVjNC1hNzViLTRkNWYtOTM3Ny01YzBlY2Q1NDBlNjQiLCJlbWFpbCI6InNoaXZhcmFtYWtyc2hubkBnbWFpbC5jb20ifQ.w460grcF-RPa02LJiiap6YkYnDNeTuQa4fuTBAYMLSHd97NGx2Di1OnfLakI6GxaD7tF0eLJgtKp2_-5kXmy86zYzD8eZqLGiRaCeSbmT-BsHGep4y_hSWHTuHVeJ9SgFxu9lLN5OXF1N608Z3G2vGOH8CuSZtAe0OgAxC9jyb3n9zvgNA8lHUf7jSST7Qo4rfgk_XiaPTTlmcL2U8DicaI-pARd6G0sNmNBJmofOF_dTVQGrCf_oN7kWRnajds6Xgcd7uo8F_FdLh2Z9XZWcRU3SaGqD67vuySmiNkJ0aHkKOlZcnf3Qxxty8EtmfANKrFel6_XizQ_O52k6FJV2A";

  const updateFormData = (input) => {
    setFormData((prev) => ({
      ...prev,
      individualdetails: {
        ...prev.individualdetails,
        ...input,
      },
    }));
  };

  const handleFileChange = (file, isAadhaar) => {
    if (isAadhaar) {
      setFormData((prev) => ({ ...prev, aadhaarUpload: file }));
    } else {
      setFormData((prev) => ({
        ...prev,
        individualdetails: {
          ...prev.individualdetails,
          evidenceFiles: [...prev.individualdetails.evidenceFiles, file],
        },
      }));
    }
  };

  const getPreSignedUrl = async (file, folderName, fileName) => {
    try {
      const response = await axios.post(
        'https://kz6gmd08a6.execute-api.ap-northeast-2.amazonaws.com/dev/uploadvideo',
        {
          body: {
            folderName,
            fileName,
            fileType: file.type,
          },
        }
      );

      console.log("Full API Response:", response);
      const responseBody = JSON.parse(response.data.body);
      console.log("Parsed Response Body:", responseBody);

      const url = responseBody.url;  // Adjust this if the API structure is different
      console.log(`Pre-signed URL: ${url}`);
      return url;
    } catch (error) {
      console.error('Error getting pre-signed URL:', error);
      return null;
    }
  };

  const uploadFileToS3 = async (file, preSignedUrl) => {
    try {
      await axios.put(preSignedUrl, file, {
        headers: { 'Content-Type': file.type },
      });
      console.log(`File ${file.name} uploaded successfully.`);
    } catch (error) {
      console.error(`Error uploading file ${file.name} to S3:`, error);
    }
  };

  const handleFileUploads = async (complaintId) => {
    const folderName = `${complaintId}`;
    try {
      // Upload Aadhaar file if present
      if (formData.aadhaarUpload) {
        const aadhaarUrl = await getPreSignedUrl(formData.aadhaarUpload, folderName, 'aadhaar');
        if (aadhaarUrl) {
          await uploadFileToS3(formData.aadhaarUpload, aadhaarUrl);
        }
      }

      // Upload evidence files if present
      for (let i = 0; i < formData.individualdetails.evidenceFiles.length; i++) {
        const file = formData.individualdetails.evidenceFiles[i];
        const evidenceUrl = await getPreSignedUrl(file, folderName, `evidence_${i + 1}`);
        if (evidenceUrl) {
          await uploadFileToS3(file, evidenceUrl);
        }
      }

      console.log('All files uploaded successfully to S3.');
    } catch (error) {
      console.error('Error during file uploads:', error);
    }
  };



  const handleSubmit = async () => {
    setLoading(true);
    try {
      const apiUrl = 'https://x4xn6amqo2.execute-api.eu-west-2.amazonaws.com/UserComplaints';
      const payload = {
        ...formData,
        individualdetails: JSON.stringify(formData.individualdetails),
      };

      const response = await axios.post(apiUrl, payload, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const responseBody = JSON.parse(response.data.body);
      const complaintId = responseBody.data?.complaintid;

      if (!complaintId) throw new Error('Complaint ID not returned from the server.');

      await handleFileUploads(complaintId);

      alert('Complaint submitted and files uploaded successfully!');

      await sendEmail(false);

      navigate('/user-cases');
    } catch (error) {
      console.error('Error during complaint submission:', error);
      alert('There was an error submitting the complaint.');
    } finally {
      setLoading(false);
    }
  };

  const sendEmail = async (withPdf) => {
    const hardcodedEmail = "priyanagasuga31@gmail.com"; // Replace with your hardcoded email address
  
    const emailApiUrl = withPdf
      ? 'https://8wy1xykpmk.execute-api.us-east-2.amazonaws.com/dev/withPdf'
      : 'https://8wy1xykpmk.execute-api.us-east-2.amazonaws.com/dev/withoutPdf';
  
    const payload = {
      recipient_email: hardcodedEmail,
      subject: 'Complaint Registration Confirmation',
      message_body: `Hello, your complaint has been successfully registered.`,
    };
  
    console.log("Preparing to send email...");
    console.log("API URL:", emailApiUrl);
    console.log("Payload:", payload);
  
    try {
      const response = await axios.post(emailApiUrl, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Email sent successfully:', response.data); // Logs response data on success
    } catch (error) {
      console.error('Error sending email:', error.response ? error.response.data : error.message);
    }
  };
  

  const renderStep = (step) => {
    switch (step) {
      
       
      case 0:
        return <ComplainantInformation {...{ formData, updateFormData, setStepValid }} />;
      case 1:
        return <IncidentDetails {...{ formData, updateFormData, setStepValid }} />;
      case 2:
        return <SuspectInformation {...{ formData, updateFormData, setStepValid }} />;
      case 3:
        return <AdditionalDetails {...{ formData, updateFormData, setStepValid }} />;
      case 4:
        return <Evidence {...{ updateFormData ,setStepValid }} />;
      case 5:
        return <ReviewAndSubmit {...{ formData, setStepValid }} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ maxWidth: '700px', mx: 'auto', my: 4 }}>
      <Stepper activeStep={currentStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ my: 4 }}>
        {loading ? (
          <Fade in={loading}>
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          </Fade>
        ) : (
          renderStep(currentStep)
        )}
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep((prev) => prev - 1)}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            if (currentStep === steps.length - 1) {
              handleSubmit();
            } else {
              setCurrentStep((prev) => prev + 1);
            }
          }}
          disabled={!isStepValid}
        >
          {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
};

export default ComplaintMultiForm;
*/

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import IncidentDetails from './IncidentDetails';
import ComplainantInformation from './ComplainantInformation';
import SuspectInformation from './SuspectInformation';
import Evidence from './Evidence';
import ReviewAndSubmit from './ReviewAndSubmit';
import AdditionalDetails from './AdditionalDetails';
import { decryptToken } from "../authUtils";

const steps = [
  'Complainant Details',
  'Incident Details',
  'Suspect Details',
  'Other Details',
  'Evidences',
 
];

const ComplaintMultiForm = () => {
  const navigate = useNavigate();
  const [isStepValid, setStepValid] = useState(false);
  const jwtToken = sessionStorage.getItem('jwt');
  const token = decryptToken(jwtToken);
  const [currentStep, setCurrentStep] = useState(0);
  const caseAppliedTime = new Date().toISOString();
  const [formData, setFormData] = useState({
    categoryid: 25,
    userid: 'UID400',
    policeid: 'user182', //PID400
    reasonforwithdrawal: null,
    iswithdrawalaccepted: 0,
    iswithdrawn: 0,
    iscomplaintaccepted: 1,
    casestatus: 'Complaint Registered',
    isfirfiled: 0,
    individualdetails: {
      evidenceFiles: [],
    },
    aadhaarUpload: null,
  });
  const [loading, setLoading] = useState(false);

  const updateFormData = (input) => {
    setFormData((prev) => ({
      ...prev,
      individualdetails: {
        ...prev.individualdetails,
        ...input,
        caseappliedtime: prev.individualdetails.caseAppliedTime || new Date().toISOString(),
      },
    }));
  };

  const handleFileChange = (file, isAadhaar) => {
    if (isAadhaar) {
      setFormData((prev) => ({ ...prev, aadhaarUpload: file }));
    } else {
      setFormData((prev) => ({
        ...prev,
        individualdetails: {
          ...prev.individualdetails,
          evidenceFiles: [...prev.individualdetails.evidenceFiles, file],
        },
      }));
    }
  };

  const getPreSignedUrl = async (file, folderName, fileName) => {
    try {
      const response = await axios.post(
        'https://kz6gmd08a6.execute-api.ap-northeast-2.amazonaws.com/dev/uploadvideo',
        {
          body: {
            folderName,
            fileName,
            fileType: file.type,
          },
        }
      );

      const responseBody = JSON.parse(response.data.body);
      const url = responseBody.url;
      return url;
    } catch (error) {
      console.error('Error getting pre-signed URL:', error);
      return null;
    }
  };

  const uploadFileToS3 = async (file, preSignedUrl) => {
    try {
      await axios.put(preSignedUrl, file, {
        headers: { 'Content-Type': file.type },
      });
    } catch (error) {
      console.error(`Error uploading file ${file.name} to S3:`, error);
    }
  };

  const handleFileUploads = async (complaintId) => {
    const folderName = `${complaintId}`;
    try {
      if (formData.aadhaarUpload) {
        const aadhaarUrl = await getPreSignedUrl(formData.aadhaarUpload, folderName, 'aadhaar');
        if (aadhaarUrl) {
          await uploadFileToS3(formData.aadhaarUpload, aadhaarUrl);
        }
      }

      for (let i = 0; i < formData.individualdetails.evidenceFiles.length; i++) {
        const file = formData.individualdetails.evidenceFiles[i];
        const evidenceUrl = await getPreSignedUrl(file, folderName, `evidence_${i + 1}`);
        if (evidenceUrl) {
          await uploadFileToS3(file, evidenceUrl);
        }
      }
    } catch (error) {
      console.error('Error during file uploads:', error);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const jwtToken = sessionStorage.getItem('jwt');  
      const token = decryptToken(jwtToken);
      const apiUrl = 'https://x4xn6amqo2.execute-api.eu-west-2.amazonaws.com/UserComplaints';
      const payload = {
        ...formData,
        individualdetails: JSON.stringify(formData.individualdetails),
      };
 
      const response = await axios.post(apiUrl, payload, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
 
      const responseBody = JSON.parse(response.data.body);
      const complaintId = responseBody.data?.complaintid;
 
      if (!complaintId) throw new Error('Complaint ID not returned from the server.');
 
      await handleFileUploads(complaintId);
 
      alert('Complaint submitted and files uploaded successfully!');
 
      await sendEmail(false);
 
      navigate('/usercases');
    } catch (error) {
      console.error('Error during complaint submission:', error);
      alert('There was an error submitting the complaint.');
    } finally {
      setLoading(false);
    }
  };
 
 
  const sendEmail = async (withPdf) => {
    //const hardcodedEmail = "shivaramakrshnn@gmail.com"; // Replace with your hardcoded email address
 
    const emailApiUrl = withPdf
      ? 'https://8wy1xykpmk.execute-api.us-east-2.amazonaws.com/dev/withPdf'
      : 'https://8wy1xykpmk.execute-api.us-east-2.amazonaws.com/dev/withoutPdf';
 
    const payload = {
      recipient_email: formData.individualdetails.emailAddress,
      subject: 'Complaint Registration Confirmation',
      message_body: `Hello, your complaint has been successfully registered.`,
    };
 
    console.log("Preparing to send email...");
    console.log("API URL:", emailApiUrl);
    console.log("Payload:", payload);
 
    try {
      const jwtToken = sessionStorage.getItem('jwt');  
      const token = decryptToken(jwtToken);
      const response = await axios.post(emailApiUrl, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Email sent successfully:', response.data); // Logs response data on success
    } catch (error) {
      console.error('Error sending email:', error.response ? error.response.data : error.message);
    }
    const whatsappPayload = {
      "to": `+91${formData.individualdetails.phoneNumber}`,
      "message": "You have successfully filed a case on the Other Cases portal of DiGiPo."
    }
    const jwtToken = sessionStorage.getItem('jwt');  
    const token = decryptToken(jwtToken);
    const apiResponse = await axios.post(
      process.env.REACT_APP_WHATSAPP_URL,
      whatsappPayload,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
         },
      }
    );
 
    console.log(apiResponse);
    try{
      const snsPayload = {
        "phone_number": `+91${formData.phone_number}`,
        "message": "You have successfully filed a case on the Other Cases portal of DiGiPo."
      }
 
      const snsApiResponse = await axios.post(
        process.env.REACT_APP_SNS_URL,
        snsPayload,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
           },
        }
      );
 
      console.log(snsApiResponse);
 
    }
    catch (error) {
      console.error("Error sending SMS", error);
  }
  };

  const renderStep = (step) => {
    switch (step) {
      case 0:
        return <ComplainantInformation {...{ formData, updateFormData, setStepValid }} />;
      case 1:
        return <IncidentDetails {...{ formData, updateFormData, setStepValid }} />;
      case 2:
        return <SuspectInformation {...{ formData, updateFormData, setStepValid }} />;
      case 3:
        return <AdditionalDetails {...{ formData, updateFormData, setStepValid }} />;
      case 4:
        return <Evidence {...{ updateFormData ,setStepValid }} />;
   /*   case 5:
        return <ReviewAndSubmit {...{ formData, setStepValid }} />;*/
      default:
        return null;
    }
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <div>
        <ul style={{ display: 'flex', listStyle: 'none', paddingLeft: 0 }}>
          {steps.map((label, index) => (
            <li
              key={label}
              style={{
                flex: 1,
                padding: '10px',
                textAlign: 'center',
                borderBottom: currentStep === index ? '2px solid #000' : '2px solid #ddd',
                fontWeight: currentStep === index ? 'bold' : 'normal',
              }}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ margin: '20px 0' }}>
        {loading ? (
          <div style={{ textAlign: 'center' }}>
            <div className="spinner"></div>
          </div>
        ) : (
          renderStep(currentStep)
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            disabled={loading || currentStep === 0}
            style={{
              padding: '10px 20px',
              backgroundColor: '#f44336',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Back
          </button>
          <button
            onClick={() => {
              if (isStepValid) {
                setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
              }
            }}
            disabled={loading || !isStepValid || currentStep === steps.length - 1}
            style={{
              padding: '10px 20px',
              backgroundColor: '#4caf50',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Next
          </button>
          {currentStep === steps.length - 1 && (
            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                padding: '10px 20px',
                backgroundColor: '#00796b',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplaintMultiForm;




/* ===== 

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ComplaintMultiForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    crimeType: '',
    complainantName: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    victimName: '',
    victimGender: '',
    victimAge: '',
    victimEmail:'',
    suspectName: '',
    suspectKnown: '',
    location: '',
    incidentDate: '',
    incidentTime: '',
    incidentPlace: '',
    incidentDescription: '',
    partiesInvolved: '',
    witnessStatements: '',
    supportingEvidence: '',
    proofVideos: [],
    pan: '',
    adharNumber: '',
    evidenceDescription: '',
    evidenceFiles: [],
    evidenceImages: [],
  });

  const [imageFields, setImageFields] = useState([0]); // Track image upload fields
  const [errors, setErrors] = useState({}); // State for form validation errors
  const [touched, setTouched] = useState({}); // Track touched fields for showing errors
  const steps = ['Personal Details', 'Victim Information', 'Incident Details', 'Suspect Details'];
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Styles
  // Styles
  const containerStyle = {
    display: 'flex',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: '40px auto',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  };

  const formContainerStyle = {
    width: '70%',
    padding: '20px',
  };

  const trackerContainerStyle = {
    width: '30%',
    padding: '20px',
    textAlign: 'center',
    borderLeft: '1px solid #ddd',
  };

  const trackerItemStyle = (isActive, isCompleted) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    backgroundColor: isActive
      ? '#007bff'
      : isCompleted
      ? '#28a745'
      : '#f0f0f0',
    color: isActive || isCompleted ? 'white' : '#333',
    fontWeight: 'bold',
    cursor: 'pointer',
  });

  const iconStyle = {
    marginRight: '10px',
    fontSize: '18px',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    fontSize: '14px',
    marginBottom: '5px',
    display: 'block',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
    marginBottom: '15px',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  };

  const addButtonStyle = {
    padding: '5px 15px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
    fontSize: '14px',
  };

  const addImageField = () => {
    setImageFields((prev) => [...prev, imageFields.length]); // Add a new field
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    setFormData((prevData) => ({
      ...prevData,
      evidenceImages: [...prevData.evidenceImages, ...files],
    }));
  };

  const nextStep = () => {
    // Validate current step before proceeding
    if (validateCurrentStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  // Validation functions
  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^\+?\d{1,4}?\s?(\(?\d{1,4}?\))?[\s.-]?\d{7,10}$/;
    return regex.test(phoneNumber);
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  };

  const validatePAN = (pan) => {
    const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return regex.test(pan);
  };

  const validateAadhaar = (aadhaar) => {
    const regex = /^[0-9]{12}$/;
    return regex.test(aadhaar);
  };

  const validateCurrentStep = () => {
    switch (step) {
      case 1:
        return validateStep1();
      case 2:
        return validateStep2();
      case 3:
        return validateStep3();
      case 4:
        return validateStep4();
      default:
        return true;
    }
  };

  const validateStep1 = () => {
    let errors = {};

    if (formData.crimeType.length > 50 || !formData.crimeType.match(/^[a-zA-Z0-9\s]*$/)) {
      errors.crimeType = 'Crime Type must be alphanumeric and up to 50 characters.';
    }
    if (formData.complainantName.length > 30 || !formData.complainantName.match(/^[a-zA-Z\s]*$/)) {
      errors.complainantName = 'Name must be up to 30 characters and only letters.';
    }
    if (!validatePhoneNumber(formData.phoneNumber) || formData.phoneNumber.length !== 10) {
      errors.phoneNumber = 'Phone Number must be 10 digits long and valid.';
    }
    if (!validateEmail(formData.emailAddress)) {
      errors.emailAddress = 'Check your email format example@gmail.com';
    }
    if (formData.address.length > 50) {
      errors.address = 'Address must be up to 50 characters long.';
    }
    if (!validateAadhaar(formData.adharNumber)) {
      errors.adharNumber = 'Aadhaar Number must be 12 digits.';
    }
    

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep2 = () => {
    let errors = {};
    if (!formData.victimName || formData.victimName.length === 0) {
      errors.victimName = 'Victim Name is required.';
    }
    if (!formData.victimGender || formData.victimGender.length === 0) {
      errors.victimGender = 'Victim Gender is required.';
    }
    if (!formData.victimAge || isNaN(formData.victimAge)) {
      errors.victimAge = 'Victim Age should be a valid number.';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep3 = () => {
    let errors = {};
    if (!formData.incidentDate) {
      errors.incidentDate = 'Date of Incident is required.';
    }
    if (!formData.incidentTime) {
      errors.incidentTime = 'Time of Incident is required.';
    }
    if (!formData.incidentPlace || formData.incidentPlace.length === 0) {
      errors.incidentPlace = 'Place of Incident is required.';
    }
    if (!formData.incidentDescription || formData.incidentDescription.length === 0) {
      errors.incidentDescription = 'Description of Incident is required.';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep4 = () => {
    let errors = {};
    if (!formData.suspectName || formData.suspectName.length === 0) {
      errors.suspectName = 'Suspect Name is required.';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    console.log('Submitting final form data...');
    console.log('Form Data:', formData);

    try {
      const token = 'your_token_here'; // Replace with actual token
      const individualDetails = JSON.stringify({
        crime_type: formData.crimeType,
        complainantName: formData.complainantName,
        victim_name: formData.victimName,
        victim_age: formData.victimAge,
        victim_gender: formData.victimGender,
        victim_email: formData.victimEmail,
        suspect_name: formData.suspectName,
        suspect_known: formData.suspectKnown,
        incident_date: formData.incidentDate,
        time_of_incident: formData.incidentTime,
        location: formData.incidentPlace,
        incident_description: formData.incidentDescription,
        parties_involved: formData.partiesInvolved,
        witness_statements: formData.witnessStatements,
        supporting_evidence: formData.supportingEvidence,
        proof_videos: formData.proofVideos,
        pan: formData.pan,
        adhar_number: formData.adharNumber,
        evidence_description: formData.evidenceDescription,
        caseappliedtime: caseAppliedTime,
      });

      const payload = {
        categoryid: 25,
        userid: 'user0044',
        policeid: 'user144',
        reasonforwithdrawal: null,
        iswithdrawalaccepted: 0,
        iswithdrawn: 0,
        iscomplaintaccepted: 1,
        casestatus: 'under investigation',
        isfirfiled: 0,
        individualdetails: individualDetails,
      };

      const response = await axios.post(
        'https://x4xn6amqo2.execute-api.eu-west-2.amazonaws.com/UserComplaints', 
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Complaint submitted successfully:', response.data);

      alert('Complaint submitted successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error submitting complaint:', error);
      alert('An error occurred during submission.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };
  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>Complaint Form - Step {step} of {steps.length}</h2>
        <div>
          {step === 1 && (
            <div>
              <h3>{steps[0]}</h3>
              <label style={labelStyle}>
                Crime Type:
                <input
                  type="text"
                  name="crimeType"
                  value={formData.crimeType}
                  onChange={handleChange}
                  style={inputStyle}
                  maxLength="50"
                />
                {touched.crimeType && errors.crimeType && (
                  <div style={errorStyle}>{errors.crimeType}</div>
                )}
              </label>
              <label style={labelStyle}>
                Complainant Name:
                <input
                  type="text"
                  name="complainantName"
                  value={formData.complainantName}
                  onChange={handleChange}
                  style={inputStyle}
                  maxLength="30"
                />
                {touched.complainantName && errors.complainantName && (
                  <div style={errorStyle}>{errors.complainantName}</div>
                )}
              </label>
              <label style={labelStyle}>
                Phone Number:
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  style={inputStyle}
                  maxLength="10"
                />
                 {touched.phoneNumber && errors.phoneNumber && (
                  <div style={errorStyle}>{errors.phoneNumber}</div>
                )}
              </label>
              <label style={labelStyle}>
                Email Address:
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  style={inputStyle}
                />
                {touched.emailAddress && errors.emailAddress && (
                  <div style={errorStyle}>{errors.emailAddress}</div>
                )}
              </label>
              <label style={labelStyle}>
                Address:
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  style={inputStyle}
                  maxLength="50"
                />
                 {touched.address && errors.address && (
                  <div style={errorStyle}>{errors.address}</div>
                )}
              </label>
              <label style={labelStyle}>
                Aadhaar Number:
                <input
                  type="text"
                  name="adharNumber"
                  value={formData.adharNumber}
                  onChange={handleChange}
                  style={inputStyle}
                  maxLength="12"
                />
                {touched.adharNumber && errors.adharNumber && (
                  <div style={errorStyle}>{errors.adharNumber}</div>
                )}
              </label>
              <label style={labelStyle}>
                PAN Number:
                <input
                  type="text"
                  name="pan"
                  value={formData.pan}
                  onChange={handleChange}
                  style={inputStyle}
                  maxLength="10"
                />
                {touched.pan && errors.pan && (
                  <div style={errorStyle}>{errors.pan}</div>
                )}
              </label>
              <button onClick={nextStep} style={buttonStyle}>Next</button>
            </div>
          )}

          {}
          {step === 2 && (
  <div>
    <h3>{steps[1]}</h3>
    <label>
      Victim Name:
      <input
        type="text"
        name="victimName"
        value={formData.victimName}
        onChange={handleChange}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
    </label>
    <label style={labelStyle}>
                Victim Gender:
                <select
                  name="victimGender"
                  value={formData.victimGender}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {touched.victimGender && errors.victimGender && (
                  <div style={errorStyle}>{errors.victimGender}</div>
                )}
              </label>
    <label>
      Victim Age:
      <input
        type="text"
        name="victimAge"
        value={formData.victimAge}
        onChange={handleChange}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
    </label>
    <label style={labelStyle}>
                Email Address:
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  style={inputStyle}
                />
                {touched.emailAddress && errors.emailAddress && (
                  <div style={errorStyle}>{errors.emailAddress}</div>
                )}
              </label>
    <button
      onClick={nextStep}
      style={{ padding: '10px 20px', marginTop: '10px', cursor: 'pointer' }}
    >
      Next
    </button>
    <button
      onClick={prevStep}
      style={{ padding: '10px 20px', marginTop: '10px', cursor: 'pointer' }}
    >
      Previous
    </button>
  </div>
)}

{step === 3 && (
  <div>
    <h3>{steps[2]}</h3>
    <label>
      Date of Incident:
      <input
        type="date"
        name="incidentDate"
        value={formData.incidentDate}
        onChange={handleChange}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
    </label>
    <label>
      Time of Incident:
      <input
        type="time"
        name="incidentTime"
        value={formData.incidentTime}
        onChange={handleChange}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
    </label>
    <label>
      Place of Incident:
      <input
        type="text"
        name="incidentPlace"
        value={formData.incidentPlace}
        onChange={handleChange}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
    </label>
    <label>
      Description of Incident:
      <textarea
        name="incidentDescription"
        value={formData.incidentDescription}
        onChange={handleChange}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      ></textarea>
    </label>
    <button
      onClick={nextStep}
      style={{ padding: '10px 20px', marginTop: '10px', cursor: 'pointer' }}
    >
      Next
    </button>
    <button
      onClick={prevStep}
      style={{ padding: '10px 20px', marginTop: '10px', cursor: 'pointer' }}
    >
      Previous
    </button>
  </div>
)}3

  {step === 4 && (
    <div>
      <label style={labelStyle}>Suspect Name</label>
      <input type="text" name="suspectName" value={formData.suspectName} onChange={handleChange} style={inputStyle} />
      <label style={labelStyle}>Do you know the suspect?</label>
      <select name="suspectKnown" value={formData.suspectKnown} onChange={handleChange} style={inputStyle}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <label style={labelStyle}>Evidence Images</label>
      {imageFields.map((fieldIndex) => (
        <div key={fieldIndex}>
          <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, fieldIndex)} style={inputStyle} />
        </div>
      ))}
      <button onClick={addImageField} style={addButtonStyle}>+ Add More</button>
      <div style={buttonContainerStyle}>
        <button onClick={prevStep} style={buttonStyle}>Previous</button>
        <button onClick={handleSubmit} style={buttonStyle} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  )}
        </div>
      </div>
      <div style={trackerContainerStyle}>
        <h4>Steps</h4>
        {steps.map((stepLabel, index) => {
          const isCompleted = index < step - 1;
          const isActive = index === step - 1;
          return (
            <div
              key={index}
              style={trackerItemStyle(isActive, isCompleted)}
              onClick={() => setStep(index + 1)}
            >
              <span style={iconStyle}>
                {isCompleted ? '✔️' : isActive ? '🔄' : '⚪'}
              </span>
              {stepLabel}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ComplaintMultiForm;
*/