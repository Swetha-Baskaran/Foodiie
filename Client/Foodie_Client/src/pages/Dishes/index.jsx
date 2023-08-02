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
			<Grid
				container
				sx={{
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Grid py={4} item>
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

				<Grid
					container
					px={{xs: 1, md: 5}}
					sx={{justifyContent: "center"}}
					spacing={3}
				>
					<RecipeReviewCard />
				</Grid>
			</Grid>
		</>
	);
};

export default Dishes;
