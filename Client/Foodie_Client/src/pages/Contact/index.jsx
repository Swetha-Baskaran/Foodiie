import {useState} from "react";
import {TextField, Button, Grid} from "@mui/material";

const Contact = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();

		setEmailError(false);
		setPasswordError(false);

		if (email == "") {
			setEmailError(true);
		}
		if (password == "") {
			setPasswordError(true);
		}

		if (email && password) {
			console.log(email, password);
		}
	};

	return (
		<>
			<Grid
				sx={{
					width: {xs: "100%", sm: "95vw"},
					display: "flex",
					justifyContent: "center",
				}}
			>
				<form
					autoComplete='off'
					onSubmit={handleSubmit}
					style={{width: "37rem"}}
				>
					<h2 style={{textAlign: "center", fontSize: "2rem"}}>
						Contact Us
					</h2>
					<TextField
						label='Email'
						onChange={e => setEmail(e.target.value)}
						required
						variant='outlined'
						color='secondary'
						type='email'
						sx={{mb: 3}}
						fullWidth
						value={email}
						error={emailError}
					/>
					<TextField
						label='Password'
						onChange={e => setPassword(e.target.value)}
						required
						variant='outlined'
						color='secondary'
						type='password'
						value={password}
						error={passwordError}
						fullWidth
						sx={{mb: 3}}
					/>
					<TextField
						label='Password'
						onChange={e => setPassword(e.target.value)}
						required
						variant='outlined'
						color='secondary'
						type='text'
						value={password}
						error={passwordError}
						fullWidth
						sx={{mb: 3}}
					/>
					<Button
						variant='outlined'
						color='secondary'
						type='submit'
						sx={{width: "100%"}}
					>
						Send
					</Button>
				</form>
			</Grid>
		</>
	);
};

export default Contact;
