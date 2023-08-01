import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import {useNavigate} from "react-router-dom";

const ProfileMenu = ({menuPopupOpen, handleClick}) => {
	const navigate = useNavigate();
	return (
		<Menu
			anchorEl={menuPopupOpen}
			id='account-menu'
			open={menuPopupOpen}
			onClose={handleClick}
			onClick={handleClick}
			PaperProps={{
				elevation: 100,
				sx: {
					transform: "translateX(-80px) !important",
					filter: "drop-shadow(0px 2px 100px rgba(0,0,0,0.32))",
					mt: 6,
					marginRight: "20rem",
					"& .MuiAvatar-root": {
						width: 32,
						height: 32,
						ml: -0.5,
						mr: 1,
					},
					"&:before": {
						content: '""',
						display: "block",
						position: "absolute",
						top: 0,
						right: 14,
						width: 10,
						height: 10,
						transform: "translateY(-50%) rotate(45deg)",
						zIndex: 10,
					},
				},
			}}
			transformOrigin={{horizontal: "right", vertical: "top"}}
			anchorOrigin={{horizontal: "right", vertical: "top"}}
		>
			<MenuItem
				onClick={() => {
					navigate("/orders");
				}}
			>
				<ListItemIcon>
					<Settings fontSize='small' />
				</ListItemIcon>
				Orders
			</MenuItem>
			<MenuItem
				onClick={() => {
					navigate("/login");
				}}
			>
				<ListItemIcon>
					<Logout fontSize='small' />
				</ListItemIcon>
				Logout
			</MenuItem>
		</Menu>
	);
};

export default ProfileMenu;
