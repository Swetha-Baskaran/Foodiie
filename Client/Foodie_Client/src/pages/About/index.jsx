import {Box, Grid, Typography} from "@mui/material";
import food1 from "../../assets/food3.png";
import rahul from "../../assets/rahul.png";
import swetha from "../../assets/swetha.jpg";
import ravi from "../../assets/ravi.png";
import {FacebookRounded, Instagram, LinkedIn} from "@mui/icons-material";

const About = () => {
	return (
		<Grid px={{xs: 3, md: 9}}>
			<Grid
				container
				py={7}
				sx={{display: "flex", justifyContent: "space-evenly"}}
			>
				<Grid item md={4} sx={{borderRadius: "5px"}}>
					<img src={food1} />
				</Grid>
				<Grid item md={8} pl={{md: 9}} pt={{xs: 6, md: 0}}>
					<Typography sx={{fontWeight: "bolder"}} pb={4} variant='h3'>
						About Us
					</Typography>
					<Typography sx={{fontSize: "2rem"}} mb={5}>
						It is a long established factor that a reader will distracted
						by the readable content of a page when looking at its layout
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				py={7}
				sx={{display: "flex", justifyContent: "space-evenly"}}
			>
				<Grid item md={8} pr={{md: 9}} pt={{xs: 6, md: 0}}>
					<Typography sx={{fontWeight: "bolder"}} pb={4} variant='h3'>
						People who loves to eat are always the best people
					</Typography>
					<Typography sx={{fontSize: "2rem"}} mb={5}>
						It is a long established factor that a reader will distracted
						by the readable content of a page when looking at its layout
					</Typography>
				</Grid>
				<Grid item md={4} sx={{borderRadius: "5px"}}>
					<img src={food1} />
				</Grid>
			</Grid>
			<Grid py={5} sx={{textAlign: "center"}}>
				<Typography sx={{fontWeight: "bolder"}} pb={4} variant='h3'>
					Meet Our Team
				</Typography>
				<Typography sx={{fontSize: "2rem"}} mb={8}>
					It is a long established factor that a reader will distracted by
					the readable content of a page when looking at its layout
				</Typography>
				<Grid
					container
					spacing={0}
					sx={{padding: "0 !important", justifyContent: "center"}}
				>
					{[
						{
							name: "Rahul Parmar",
							img: rahul,
						},
						{
							name: "Swetha Baskaran",
							img: swetha,
						},
						{
							name: "Ravi Kumar",
							img: ravi,
						},
					].map((e, index) => {
						return (
							<Box
								item
								xs={12}
								sm={12}
								md={4}
								key={index}
								sx={{
									width: "20rem",
									margin: "1rem 1rem 3rem 1rem",
									height: "30rem",
								}}
							>
								<img
									src={e.img}
									alt={index}
									style={{
										width: "100%",
										height: "70%",
									}}
								/>
								<Grid>
									<Typography pt={1}>{e.name}</Typography>
									<Grid
										sx={{display: "flex", justifyContent: "center"}}
										py={1}
									>
										<FacebookRounded
											sx={{fontSize: "2rem", margin: "0 0.5rem"}}
										/>
										<Instagram
											sx={{fontSize: "2rem", margin: "0 0.5rem"}}
										/>
										<LinkedIn
											sx={{fontSize: "2rem", margin: "0 0.5rem"}}
										/>
									</Grid>
								</Grid>
							</Box>
						);
					})}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default About;
