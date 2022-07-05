import React, { useState } from "react";

import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  FormControl,
  TextareaAutosize,
  Select,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

const themeData = {
  components: {
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-active": {
            color: "#ff0000"
          }
        },
        active: {
          color: "#ff0000"
        },
        text: {
          fill: "black"
        }
      }
    }
  }
};

const theme = createTheme(themeData);

function getSteps() {
  return [
    "step 1",
    "step 2",
    "step 3",
  ];
}


function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            style={{marginTop:"20px", marginBottom: "1rem", color:"#F8444F", borderColor:"#F8444F" , borderWidth:"1px", borderRadius:"5px", padding:"5px"}}
            name="firstName"

          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            name="lastName"
            
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            placeholder="Enter Your Email"
            fullWidth
            margin="normal"
            name="email"
          />
          <TextField
            id="mobile-number"
            label="Mobile Number"
            variant="outlined"
            type="number"
            placeholder="Enter Your Mobile Number"
            fullWidth
            margin="normal"
            name="mobileNumber"
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            placeholder="Enter Your Password"
            fullWidth
            margin="normal"
            name="password"
          />
          <TextField
            id="confirm-password"
            label="Confirm Password"
            variant="outlined"
            type="password"
            placeholder="Enter Your Confirm Password"
            fullWidth
            margin="normal"
            name="Confirm Password"
          />
          {/* radio button */}
          <div>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </div>
        </>
      );

    case 1:
      return (
        <>
          <Typography variant="h6" style={{fontWeight:"500", alignItem:"center", marginLeft:"24rem",color:"#313131", JustifyContent:"center"}} component="div" gutterBottom>
          Please tell us something about your company
          </Typography>

          <TextField
            id="LegalCompanyName"
            label="Legal Company Name"
            variant="outlined"
            placeholder="Enter Your Legal Company Name"
            fullWidth
            margin="normal"
            name="LegalCompanyName"
          />
          <TextField
            id="GSTNumber"
            label="GST Number ( if applicable )"
            variant="outlined"
            placeholder="Enter Your GST Number"
            fullWidth
            margin="normal"
            name="GST Number"
          />
          <TextField
            id="PANNumber"
            label="PAN Number"
            variant="outlined"
            placeholder="Enter Your PAN Number"
            fullWidth
            margin="normal"
            name="PAN Number"
          />
          <TextField
            id="StoreName"
            label="Store Name"
            variant="outlined"
            placeholder="Enter Your Store Name"
            fullWidth
            margin="normal"
            name="Store Name"
          />
           <TextField
            id="Product"
            label="Product"
            variant="outlined"
            placeholder="Enter Your Product Name"
            fullWidth
            margin="normal"
            name="Product"
          />
          <TextareaAutosize
            id="BusinessAdderess"
            label="Business Adderess"
            variant="outlined"
            placeholder="Enter Your Business Adderess"
            fullWidth
            margin="normal"
            name="Business Adderess"
            style={{ width: "100%", height: "100px" }}
          />

         <div style={{display:"flex", flexDirection: "column"}}>
         <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="yes"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
         </div>
            <Typography variant="h6" style={{fontWeight:"500", marginTop:"20px",color:"#313131"}} component="div" gutterBottom>
            If yes provide names
          </Typography>
            <TextareaAutosize
            id="BusinessAdderess"
            label="Business Adderess"
            variant="outlined"
            placeholder="Enter Your Business Adderess"
            fullWidth
            margin="normal"
            name="Business Adderess"
            style={{ width: "100%", height: "50px", marginBottom:"20px" }}
          />
        </>
      );
    case 2:
      return (
        <>
        <Typography variant="h6" style={{fontWeight:"500", alignItem:"center", marginLeft:"24rem",color:"#313131", JustifyContent:"center"}} component="div" gutterBottom>
        Please Enter Your Bank Account Details
          </Typography>

          <TextField
            id="AccountHolderName"
            label="Account Holder Name"
            variant="outlined"
            placeholder="Enter the Account Holder Name"
            fullWidth
            margin="normal"
            name="Account Holder Name"
          />
          <TextField
            id="AccountNumber"
            label="Account Number"
            variant="outlined"
            placeholder="Enter Your Account Number"
            fullWidth
            margin="normal"
            name="Account Number"
          />
          <TextField
            id="BankName"
            label="Bank Name"
            variant="outlined"
            placeholder="Enter Your Bank Name"
            fullWidth
            margin="normal"
            name="Bank Name"
          />
          <TextField
            id="BranchName"
            label="Branch Name"
            variant="outlined"
            placeholder="Enter Your Branch Name"
            fullWidth
            margin="normal"
            name="Branch Name"
          />  
        <div style={{display:"flex", flexDirection: "column"}}>
        
        <FormControl >
        <InputLabel style={{ marginLeft:".5rem"}} id="demo-controlled-open-select-label">Country</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          style={{ width: "100%", marginTop:"30px", marginBottom:"20px", marginLeft:".5rem", borderRadius:"5px", padding:"10px",  color:"#1f1f1f", fontSize:"14px", fontWeight:"500", textAlign:"center", outline:"none", boxShadow:"none", boxSizing:"border-box" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>India</MenuItem>
          <MenuItem value={20}>Pakistan</MenuItem>
          <MenuItem value={30}>United State America</MenuItem>
        </Select> 
      </FormControl>

      <FormControl >
        <InputLabel style={{ marginLeft:".5rem"}} id="demo-controlled-open-select-label">City</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          style={{ width: "100%", marginTop:"30px", marginBottom:"20px", marginLeft:".5rem", borderRadius:"5px", padding:"10px",  color:"#1f1f1f", fontSize:"14px", fontWeight:"500", textAlign:"center", outline:"none", boxShadow:"none", boxSizing:"border-box" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Muzaffarpur</MenuItem>
          <MenuItem value={20}>Palasa</MenuItem>
          <MenuItem value={30}>Paralakhemundi</MenuItem>
        </Select>
      </FormControl>
          </div>
      
        </>
      );
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Stepper alternativeLabel activeStep={activeStep} >
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index} style={{color:"#F8444F"}}>
              <StepLabel  {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
      {activeStep === steps.length ? (
        <Typography variant="h3" align="center" style={{color:"#F8444F"}}>
          Thank You
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <Button
         
            disabled={activeStep === 0}
            onClick={handleBack}
            style={{color:"#F8444F"}}
          >
            back
          </Button>
          {isStepOptional(activeStep) && (
            <Button
      
              variant="contained"
              color="primary"
              onClick={handleSkip}
              style={{backgroundColor:"#F8444F", color:"#fff", marginLeft:"1rem"}}
            >
              skip
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            style={{backgroundColor:"#F8444F", color:"#fff", marginLeft:"1rem"}}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </>
      )}
      </ThemeProvider>
    </div>
    
  );
};

export default LinaerStepper;

