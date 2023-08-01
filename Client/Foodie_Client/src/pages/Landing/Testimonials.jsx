import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";

export default function RecipeReviewCard() {
	return (
		<Card sx={{position: "relative", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
			<Grid
				sx={{
					position: "absolute",
					borderRadius: "50%",
					width: "7rem",
					height: "7rem",
					background: "#ff5331",
					transform: "translate(-15px, -15px)",
					zIndex: "111",
				}}
			></Grid>
			<Typography
				variant='body2'
				color='text.secondary'
				p={4}
				sx={{fontSize: "1.2rem"}}
				pt={11}
			>
				This impressive paella is a perfect party dish and a fun meal to
				cook together with your guests. Add 1 cup of frozen peas along with
				the mussels, if you like.
			</Typography>
		</Card>
	);
}
