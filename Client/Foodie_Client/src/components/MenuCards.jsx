import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import food1 from "../assets/food2.png";
import {Button, Grid, Rating} from "@mui/material";
import {useDispatch} from "react-redux";
import {addToCart} from "../redux/slice/cartSlice";

export default function RecipeReviewCard() {
	const dispatch = useDispatch();
	const handleAddToCart = payload => {
		dispatch(addToCart(payload));
	};

	const cardContentArray = [
		{
			title: "Veg Pizza",
			description:
				"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
			rating: 4,
			reviews: 230,
			price: 7.5,
			image: food1,
		},
		{
			title: "Chicken Biryani",
			description:
				"A classic Indian dish consisting of fragrant rice cooked with flavorful spices and tender chicken pieces.",
			rating: 4.5,
			reviews: 350,
			price: 9.99,
			image: food1,
		},
		{
			title: "Pasta Carbonara",
			description:
				"A creamy Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
			rating: 4.2,
			reviews: 180,
			price: 8.75,
			image: food1,
		},
		{
			title: "Sushi Platter",
			description:
				"Assorted sushi rolls including salmon, tuna, avocado, and cucumber.",
			rating: 4.8,
			reviews: 420,
			price: 12.25,
			image: food1,
		},
		{
			title: "Chocolate Brownie",
			description:
				"A delicious dessert made of rich chocolate, walnuts, and a scoop of vanilla ice cream.",
			rating: 4.9,
			reviews: 300,
			price: 5.5,
			image: food1,
		},
		// Add more content objects for additional cards as needed
	];

	return (
		<>
			{cardContentArray.map((content, index) => (
				<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
					<Card
						sx={{
							boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
							borderRadius: "15px",
						}}
					>
						<CardMedia
							component='img'
							image={content.image}
							alt='Paella dish'
							sx={{borderRadius: "15px"}}
						/>
						<CardContent m={2}>
							<Typography
								variant='h5'
								sx={{fontWeight: "bolder"}}
								mb={1}
							>
								{content.title}
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								{content.description.length > 20
									? content.description.slice(0, 60) + "..."
									: content.description}
							</Typography>
							<Grid
								py={2}
								sx={{display: "flex", justifyContent: "space-between"}}
							>
								<Rating
									name='read-only'
									value={content.rating}
									readOnly
								/>
								<Typography>{`(${content.reviews}) Reviews`}</Typography>
							</Grid>
							<Grid
								mt={1}
								sx={{display: "flex", justifyContent: "space-between"}}
							>
								<Typography
									sx={{fontWeight: "bolder", fontSize: "1.5rem"}}
								>
									${content.price}
								</Typography>
								<Grid sx={{justifyContent: "space-between"}}>
									<Button
										variant='contained'
										sx={{
											background: "#ff5331",
											borderRadius: "7px",
											marginRight: "1rem",
										}}
										onClick={() => {
											handleAddToCart({
												img: content.image,
												title: content.title,
												description: content.description,
												price: content.price,
											});
										}}
									>
										Add to Cart
									</Button>
									<Button
										variant='contained'
										sx={{background: "#ff5331", borderRadius: "7px"}}
									>
										Buy
									</Button>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			))}
		</>
	);
}
