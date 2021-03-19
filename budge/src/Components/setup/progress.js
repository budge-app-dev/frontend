import React from 'react';
import {connect, useDispatch} from "react-redux";
import { increment, decrement } from '../actions'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
});

function ProgressMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch()

  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => { 
    dispatch(increment())
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  };

  const handleBack = () => { 
    dispatch(decrement())
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled ={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled ={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
  );
}

export default connect(null, { increment, decrement })(ProgressMobileStepper)