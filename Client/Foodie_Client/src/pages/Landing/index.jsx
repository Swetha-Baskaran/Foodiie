import {Button, Grid, Typography} from "@mui/material";
import bannerImg from "../../assets/banner.png";
import RecipeReviewCard from "../../components/MenuCards";
import TestimonialCard from "./Testimonials";
import food1 from "../../assets/food3.png";
import chef2 from "../../assets/chef2.png";
import chef1 from "../../assets/chef11.png";
import FaqAccordian from "./Faq";
import {Restaurant} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

const SubTitle = ({text}) => {
	return (
		<Typography
			sx={{textAlign: "center", fontWeight: "bolder", fontSize: "3rem"}}
			variant='h3'
			py={2}
		>
			{text}
		</Typography>
	);
};

const Content = ({text}) => {
	return (
		<Typography
			sx={{textAlign: "center", fontSize: "1.5rem"}}
			pb={2}
			md-px={15}
		>
			{text}
		</Typography>
	);
};

const Home = () => {
	const navigate = useNavigate();
	return (
		<>
			<Grid px={{xs: 3, md: 9}}>
				<Grid
					container
					pb={5}
					pt={10}
					sx={{display: "flex", justifyContent: "space-evenly"}}
				>
					<Grid pr={{md: 9}} item md={6}>
						<Typography sx={{fontWeight: "bolder"}} variant='h3'>
							Food you love,
						</Typography>
						<Typography sx={{fontWeight: "bolder"}} pb={2} variant='h3'>
							delivered to you
						</Typography>
						<Typography sx={{fontSize: "2rem"}} mb={8}>
							It is a long established factor that a reader will
							distracted by the readable content of a page when looking
							at its layout
						</Typography>
						<Button
							size='large'
							variant='contained'
							sx={{
								background: "#ff5331",
								borderRadius: "7px",
								padding: "0.8rem 1.6rem",
							}}
							onClick={() => {
								navigate("/dishes");
							}}
						>
							Order Now
						</Button>
					</Grid>
					<Grid sx={{borderRadius: "5px"}} item md={5}>
						<img
							src={chef1}
							style={{width: "100%", transform: "translateY(-90px)"}}
						/>
					</Grid>
				</Grid>
				<Grid py={5}>
					<SubTitle text='why choose us' />
					<Content text='It is a long established factor that a reader will distracted by the readable content of a page when looking at its layout' />
					<Grid
						container
						spacing={0}
						my={2}
						mx={0}
						sx={{display: "flex", justifyContent: "center"}}
					>
						{[1, 2, 3].map((e, index) => {
							return (
								<Grid
									key={index}
									item
									xs={12}
									sm={6}
									md={3.5}
									sx={{
										textAlign: "center",
										background: "#fff",
										boxShadow:
											"rgba(149, 157, 165, 0.2) 0px 8px 24px",
										borderRadius: "10px",
										padding: "2rem !important",
										margin: "1rem",
									}}
								>
									<Restaurant
										sx={{
											fontSize: "3rem",
											borderRadius: "50%",
											background: "#ff5331",
											color: "white",
											padding: "0.7rem",
											margin: "0 0 0.5rem 0",
										}}
									/>
									<Typography variant='h6' sx={{fontWeight: "bolder"}}>
										Best Quality
									</Typography>
									<Typography>
										It is a long established factor that a reader will
										distracted by the readable content of a page when
										looking at its layout
									</Typography>
								</Grid>
							);
						})}
					</Grid>
				</Grid>
				<Grid py={5}>
					<SubTitle text='Our Special Menu' />
					<Content text='It is a long established factor that a reader will distracted by the readable content of a page when looking at its layout' />
					<Grid container spacing={{xs: 3, md: 7}} pt={7}>
						{[1, 1, 1, 1, 1, 1].map((e, index) => {
							return (
								<Grid item xs={12} sm={6} md={6} lg={4} key={index}>
									<RecipeReviewCard />
								</Grid>
							);
						})}
					</Grid>
				</Grid>
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
							People who loves to eat are always the best people
						</Typography>
						<Typography sx={{fontSize: "2rem"}} mb={5}>
							It is a long established factor that a reader will
							distracted by the readable content of a page when looking
							at its layout
						</Typography>
						<Button
							size='large'
							variant='contained'
							sx={{
								background: "#ff5331",
								borderRadius: "7px",
								padding: "0.8rem 1.6rem",
							}}
						>
							Learn more
						</Button>
					</Grid>
				</Grid>
				{/* banner */}
				<Grid sx={{width: "100%"}} py={7}>
					<img alt='banner' src={bannerImg} style={{width: "100%"}} />
				</Grid>
				<Grid py={5}>
					<SubTitle text='Whats the Menu' />
					<Grid container spacing={{xs: 3, md: 7}} pt={9}>
						{[1, 1, 1, 1, 1, 1].map((e, index) => {
							return (
								<Grid item xs={12} sm={6} md={6} lg={4} key={index}>
									<RecipeReviewCard />
								</Grid>
							);
						})}
					</Grid>
				</Grid>
				{/* food lover feedback */}
				<Grid py={7}>
					<SubTitle text='food lovers feedback' />
					<Content text='' />
					<Grid container spacing={{xs: 3, md: 7}} pt={9}>
						{[1, 1, 1].map((e, index) => {
							return (
								<Grid item xs={12} sm={6} md={6} lg={4} key={index}>
									<TestimonialCard />
								</Grid>
							);
						})}
					</Grid>
				</Grid>
				{/* faq */}
				<Grid
					container
					py={7}
					sx={{display: "flex", justifyContent: "space-evenly"}}
				>
					<Grid item lg={4}>
						<img alt='chef1' src={chef2} />
					</Grid>
					<Grid pl={{lg: 9}} item lg={8}>
						<Typography sx={{fontWeight: "bolder"}} pb={4} variant='h3'>
							People who loves to eat are always the best people
						</Typography>
						<Typography sx={{fontSize: "2rem"}} mb={8}>
							It is a long established factor that a reader will
							distracted by the readable content of a page when looking
							at its layout
						</Typography>
						<FaqAccordian />
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Home;
