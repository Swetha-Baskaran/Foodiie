import {Box, Container, Grid, Typography} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
	return (
		<Box
			sx={{
				width: "100%",
				height: "auto",
				background: "#ff5331",
				color: "white",
			}}
			p={4}
			mt={4}
		>
			<Container maxWidth='lg'>
				<Grid container direction='column' alignItems='center'>
					<Typography variant='h3' py={2}>
						Thank you for choosing our healthier diet
					</Typography>
					<Typography variant='h6'>
						Developed by Swetha Baskaran
					</Typography>
					<Typography>Follow me on</Typography>
					<Grid sx={{display: "flex", justifyContent: "center"}} py={1}>
						<Typography m={1}>
							<InstagramIcon
								sx={{
									fontSize: "2.5rem",
									padding: "0.4rem",
									borderRadius: "50%",
									background: "#ff5331",
									color: "white",
								}}
							/>
						</Typography>
						<Typography m={1}>
							<FacebookIcon
								sx={{
									fontSize: "2.5rem",
									padding: "0.4rem",
									borderRadius: "50%",
									background: "#ff5331",
									color: "white",
								}}
							/>
						</Typography>
						<Typography m={1}>
							<TwitterIcon
								sx={{
									fontSize: "2.5rem",
									padding: "0.4rem",
									borderRadius: "50%",
									background: "#ff5331",
									color: "white",
								}}
							/>
						</Typography>
						<Typography m={1}>
							<LinkedInIcon
								sx={{
									fontSize: "2.5rem",
									padding: "0.4rem",
									borderRadius: "50%",
									background: "#ff5331",
									color: "white",
								}}
							/>
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
