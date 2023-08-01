import {
	ListItem,
	ListItemText,
	ListItemAvatar,
	Avatar,
	Typography,
	Grid,
	Modal,
	Box,
} from "@mui/material";
import {useState} from "react";
import OrderSummary from "../../components/Modals/OrderSummary";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "white",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function Orders() {
	// model
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<Grid
			container
			sx={{display: "flex", justifyContent: "center"}}
			px={{xs: 2, md: 6}}
			pt={6}
		>
			<Grid
				item
				container
				sx={{bgcolor: "background.paper", display: "flex", margin: "auto"}}
			>
				{[1, 2, 3, 3, 3, 3, 3, 3].map((e, index) => {
					return (
						<ListItem
							key={index}
							alignItems='flex-start'
							sx={{width: {xs: "100%", md: "50%"}, cursor: "pointer"}}
							onClick={handleOpen}
						>
							<ListItemAvatar>
								<Avatar
									alt='Remy Sharp'
									src='/static/images/avatar/1.jpg'
								/>
							</ListItemAvatar>
							<ListItemText
								primary='Brunch this weekend?'
								secondary={
									<>
										<Typography
											sx={{display: "inline"}}
											component='span'
											variant='body2'
											color='text.primary'
										>
											Ali Connors
										</Typography>
										{
											" — I'll be in your neighborhood doing errands this…"
										}
									</>
								}
							/>
						</ListItem>
					);
				})}
			</Grid>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<OrderSummary onClose={handleClose} />
			</Modal>
		</Grid>
	);
}
