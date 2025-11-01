import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Stepper,
  Step,
  StepLabel,
  IconButton,
  Divider
} from '@mui/material';
// Material-UI icons removed as AttachIcon is no longer used
import Group3Icon from '../assets/icons/Group (3).svg';
import ActiveIndicatorIcon from '../assets/icons/Active indicator.svg';
import Icon6 from '../assets/icons/icon (6).svg';
import '../styles/datastore.css';

const DatastoreRequest = () => {
  const [accessType, setAccessType] = useState('read');
  const [dataStorePath, setDataStorePath] = useState('\\\\datastore\\IS-Team\\IS-Team\\General\\Manoj...');
  const [justification, setJustification] = useState('');

  const steps = ['Employee', 'Manager', 'IT Team'];
  const activeStep = 0;

  const handleAccessTypeChange = (event) => {
    setAccessType(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', {
      accessType,
      dataStorePath,
      justification
    });
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  return (
    <Box className="datastore-container">
      <Card className="datastore1-card">
        <CardContent className="datastore-content">
          {/* Header */}
          <Box className="datastore-header">
            <img src={Group3Icon} alt="Group" className="datastore-icon" />
            <Typography variant="h5" className="datastore-title">
              REQUEST DATASTORE
            </Typography>
          </Box>

          {/* Stepper */}
          <Box className="datastore-stepper">
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel 
                    StepIconComponent={({ active, completed }) => (
                      <Box className={`step-icon ${active ? 'active' : ''} ${completed ? 'completed' : ''}`}>
                        {active && <img src={ActiveIndicatorIcon} alt="Active" className="active-indicator-icon" />}
                      </Box>
                    )}
                  >
                    <Typography className={`step-label ${label === 'IT Team' ? 'it-team' : ''}`}>{label}</Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          {/* Access Type Section */}
          <Box className="form-section">
            <Typography variant="h6" className="section-title">
              Access Type
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                row
                value={accessType}
                onChange={handleAccessTypeChange}
                className="access-type-group"
              >
                <FormControlLabel
                  value="read"
                  control={<Radio className="radio-button" />}
                  label="Read"
                  className="radio-label"
                />
                <FormControlLabel
                  value="readwrite"
                  control={<Radio className="radio-button" />}
                  label="Read/Write"
                  className="radio-label read-write"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          {/* Data Store Path Section */}
          <Box className="form-section datastore-path-section">
            <Typography variant="h6" className="section-title">
              Data Store Path
            </Typography>
            <Box className="path-input-container">
              <TextField
                fullWidth
                value={dataStorePath}
                onChange={(e) => setDataStorePath(e.target.value)}
                variant="outlined"
                className="path-input"
                InputProps={{
                  endAdornment: (
                    <IconButton className="attach-button">
                      <img src={Icon6} alt="Attach" style={{ width: '9.167px', height: '16.667px' }} />
                    </IconButton>
                  ),
                }}
              />
            </Box>
          </Box>

          {/* Justification Section */}
          <Box className="form-section">
            <Typography variant="h6" className="section-title">
              Justification
            </Typography>
            <TextField
              multiline
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
              variant="outlined"
              className="justification-input"
              placeholder="Need Data Store Access"
              InputProps={{
                style: {
                  padding: 0,
                  alignItems: 'flex-start'
                }
              }}
              inputProps={{
                style: {
                  padding: '12px 14px',
                  resize: 'none',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  lineHeight: '1.4'
                }
              }}
            />
          </Box>

          {/* Action Buttons */}
          <Box className="action-buttons">
            <Button
              variant="outlined"
              onClick={handleCancel}
              className="cancel-button"
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              className="submit-button"
            >
              Submit
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DatastoreRequest;