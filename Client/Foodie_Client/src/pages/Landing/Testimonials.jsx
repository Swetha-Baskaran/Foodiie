import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";

export default function RecipeReviewCard() {
	return (
		<Grid
			sx={{
				position: "relative",
				boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
			}}
		>
			<Typography
				color='text.secondary'
				p={4}
				sx={{fontSize: "1.2rem"}}
				pt={4}
			>
				This impressive paella is a perfect party dish and a fun meal to
				cook together with your guests. Add 1 cup of frozen peas along with
				the mussels, if you like.
			</Typography>
		</Grid>
	);
}
