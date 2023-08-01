import {Grid} from "@mui/material";
import RecipeReviewCard from "../../components/MenuCards";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {useState} from "react";

const Dishes = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Grid py={4} sx={{display: "flex", justifyContent: "center"}}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='disabled tabs example'
				>
					<Tab label='Starters' />
					<Tab label='Main Course' />
					<Tab label='Dessert' />
				</Tabs>
			</Grid>
			<Grid container spacing={7} px={{xs: 3, md: 9}}>
				{[1, 1, 1].map((e, index) => {
					return (
						<Grid item xs={12} sm={6} md={6} lg={4} key={index}>
							<RecipeReviewCard />
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};

export default Dishes;
