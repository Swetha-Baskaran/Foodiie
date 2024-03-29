import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";

const steps = ["Set Address", "Select payment option", "Place order"];

export default function OrderConfirmation({handleClose}) {
	const navigate = useNavigate();
	const [activeStep, setActiveStep] = React.useState(0);
	const [completed, setCompleted] = React.useState({});

	const totalSteps = () => {
		return steps.length;
	};

	const completedSteps = () => {
		return Object.keys(completed).length;
	};

	const isLastStep = () => {
		return activeStep === totalSteps() - 1;
	};

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps();
	};

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
				? steps.findIndex((step, i) => !(i in completed))
				: activeStep + 1;
		setActiveStep(newActiveStep);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleStep = step => () => {
		setActiveStep(step);
	};

	const handleComplete = () => {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		handleNext();
	};

	return (
		<Box sx={{width: {xs: "90%", md: "50%"}, background: "white"}} p={5}>
			{allStepsCompleted() ? (
				<Box>
					<h1>order placed successfully</h1>
					<Button
						onClick={() => {
							handleClose();
							navigate("/");
						}}
					>
						back to home
					</Button>
				</Box>
			) : (
				<>
					<Stepper activeStep={activeStep}>
						{steps.map((label, index) => (
							<Step key={label} completed={completed[index]}>
								<StepButton color='inherit' onClick={handleStep(index)}>
									{label}
								</StepButton>
							</Step>
						))}
					</Stepper>
					<div>
						{!allStepsCompleted() && (
							<React.Fragment>
								{/* content */}
								{/* buttons */}
								<Box
									sx={{display: "flex", flexDirection: "row", pt: 2}}
								>
									<Button
										color='inherit'
										disabled={activeStep === 0}
										onClick={handleBack}
										sx={{mr: 1}}
									>
										Back
									</Button>
									<Box sx={{flex: "1 1 auto"}} />
									<Button onClick={handleNext} sx={{mr: 1}}>
										Next
									</Button>
									{activeStep !== steps.length &&
										(completed[activeStep] ? (
											<Typography
												variant='caption'
												sx={{display: "inline-block"}}
											>
												Step {activeStep + 1} already completed
											</Typography>
										) : (
											<Button onClick={handleComplete}>
												{completedSteps() === totalSteps() - 1
													? "Finish"
													: "Complete Step"}
											</Button>
										))}
								</Box>
							</React.Fragment>
						)}
					</div>
				</>
			)}
		</Box>
	);
}
