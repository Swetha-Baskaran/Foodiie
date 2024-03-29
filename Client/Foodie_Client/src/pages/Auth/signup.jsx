import {useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {Link, useNavigate} from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import axios from "axios";

const theme = createTheme();

export default function Signup() {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async event => {
		event.preventDefault();

		// Add validation for password matching
		if (password !== confirmPassword) {
			setError("Passwords do not match.");
			return;
		}

		try {
			const url = "https://foodiie-navy.vercel.app/users/register";
			const userData = {
				username,
				email,
				password,
			};

			const response = await axios.post(url, userData);

			// Assuming the server responds with the newly registered user data
			console.log("Registered user:", response.data);
			navigate("/login");

			// Handle successful registration here, such as redirecting to login page
		} catch (error) {
			console.error("Error registering user:", error.message);
			setError("Error registering user. Please try again.");
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				component='main'
				sx={{height: "100vh"}}
				className='auth'
			>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: "url(https://source.unsplash.com/random)",
						backgroundRepeat: "no-repeat",
						backgroundColor: t =>
							t.palette.mode === "light"
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>
				<Grid
					item
					xs={12}
					sm={8}
					md={5}
					component={Paper}
					elevation={6}
					square
				>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component='h1' variant='h5'>
							Sign Up
						</Typography>
						<Box
							component='form'
							noValidate
							onSubmit={handleSubmit}
							sx={{mt: 1}}
						>
							<TextField
								margin='normal'
								required
								fullWidth
								id='username'
								label='Username'
								name='username'
								autoComplete='username'
								autoFocus
								value={username}
								onChange={e => setUsername(e.target.value)}
							/>
							<TextField
								margin='normal'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<TextField
								margin='normal'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='new-password'
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
							<TextField
								margin='normal'
								required
								fullWidth
								name='confirmPassword'
								label='Confirm Password'
								type='password'
								id='confirmPassword'
								autoComplete='new-password'
								value={confirmPassword}
								onChange={e => setConfirmPassword(e.target.value)}
							/>
							<FormControlLabel
								control={<Checkbox value='remember' color='primary' />}
								label='Remember me'
							/>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								sx={{mt: 3, mb: 2}}
							>
								Sign Up
							</Button>
							{error && <Typography color='error'>{error}</Typography>}
							<Grid container>
								<Grid item xs>
									<Link to='/forgot-password' variant='body2'>
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link to='/login' variant='body2'>
										{"Already have an account? Login"}
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
