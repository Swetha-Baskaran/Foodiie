import {useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
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

export default function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			const url = "https://foodiie-navy.vercel.app/users/login";
			const response = await axios.post(url, {
				username: "swethab@pec.edu",
				password: "swetha",
			});
			const {token} = response.data;
			console.log("Authentication token:", token);
			localStorage.setItem("jwtToken", token);
			navigate("/");
		} catch (error) {
			console.error("Error logging in:", error.message);
			setError("Invalid credentials. Please try again.");
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
							Login
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
								autoComplete='current-password'
								value={password}
								onChange={e => setPassword(e.target.value)}
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
								Sign In
							</Button>
							{error && <Typography color='error'>{error}</Typography>}
							<Grid container>
								<Grid item xs>
									<Link to='/forgot-password' variant='body2'>
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link to='/signup' variant='body2'>
										{"Don't have an account? Sign Up"}
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
