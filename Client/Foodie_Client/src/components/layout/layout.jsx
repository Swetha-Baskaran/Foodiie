import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {Link} from "react-router-dom";
import Footer from "../Footer";
import logo from "../../assets/foodie_logo.png";
import ShoppingCart from "../../pages/Cart/ShoppingCart";
import {Avatar} from "@mui/material";
import ProfileMenu from "../ProfileMenu";
import {useSelector} from "react-redux";

const drawerWidth = 240;
const navItems = [
	{
		name: "Food",
		link: "/dishes",
	},
	{
		name: "Contact",
		link: "/contact",
	},
	{
		name: "About",
		link: "/about",
	},
];

function DrawerAppBar(props) {
	const {cartItemCount} = useSelector(store => store.cart);

	// eslint-disable-next-line react/prop-types
	const {window, children} = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(prevState => !prevState);
	};

	function ElevationScroll(props) {
		// eslint-disable-next-line react/prop-types
		const {children, window} = props;
		// Note that you normally won't need to set the window ref as useScrollTrigger
		// will default to window.
		// This is only being set here because the demo is in an iframe.
		const trigger = useScrollTrigger({
			disableHysteresis: true,
			threshold: 0,
			target: window ? window() : undefined,
		});

		return React.cloneElement(children, {
			elevation: trigger ? 4 : 0,
		});
	}

	ElevationScroll.propTypes = {
		children: PropTypes.element.isRequired,
		/**
		 * Injected by the documentation to work in an iframe.
		 * You won't need it on your project.
		 */
		window: PropTypes.func,
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{textAlign: "center"}}>
			<Typography variant='h6' sx={{my: 2}}>
				<img src={logo} alt='foodie' />
			</Typography>
			<Divider />
			<List>
				{navItems.map(item => (
					<ListItem key={item.Link}>
						<Link to={item.link}>
							<ListItemButton>
								<ListItemText primary={item.name} />
							</ListItemButton>
						</Link>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	// profile pic menu
	const [menuPopupOpen, setMenuPopupOpen] = React.useState(false);
	const handleClick = () => {
		setMenuPopupOpen(!menuPopupOpen);
	};

	return (
		<>
			<Box sx={{display: "flex"}}>
				<CssBaseline />
				<ElevationScroll {...props}>
					<AppBar
						component='nav'
						sx={{background: "white", padding: "0 2rem"}}
					>
						<Toolbar>
							<IconButton
								color='inherit'
								aria-label='open drawer'
								edge='start'
								onClick={handleDrawerToggle}
								sx={{display: {md: "none"}}}
							>
								<MenuIcon />
							</IconButton>
							<Typography
								component='div'
								sx={{
									flexGrow: 1,
									display: "flex",
								}}
								pt={1}
							>
								<Link
									to='/'
									style={{
										textDecoration: "none",
										display: "flex",
										justifyContent: "flex-start",
										alignItems: "center",
									}}
								>
									<img
										src={logo}
										alt='foodie'
										style={{width: "70px"}}
									/>
									<Typography
										variant='h6'
										px={2}
										sx={{color: "#ff5331"}}
									>
										Foodie
									</Typography>
								</Link>
							</Typography>
							<IconButton
								size='large'
								aria-label='show 4 new mails'
								color='inherit'
								sx={{display: {md: "none"}}}
							>
								<Badge badgeContent={cartItemCount} color='error'>
									<ShoppingCart sx={{color: "#000"}} />
								</Badge>
							</IconButton>

							<Box sx={{display: {xs: "none", md: "block"}}}>
								{navItems.map(item => (
									<Button key={item.name} sx={{margin: "0 0.5rem"}}>
										<Link
											to={item.link}
											style={{textDecoration: "none", color: "#000"}}
										>
											{item.name}
										</Link>
									</Button>
								))}
								<IconButton
									size='large'
									aria-label='show 4 new mails'
									color='inherit'
								>
									<Badge badgeContent={cartItemCount} color='error'>
										<ShoppingCart sx={{color: "#000"}} />
									</Badge>
								</IconButton>
								{true ? (
									<IconButton
										onClick={handleClick}
										size='small'
										sx={{ml: 2}}
									>
										<Avatar sx={{width: 32, height: 32}}>M</Avatar>
									</IconButton>
								) : (
									<>
										<Link to='/login'>
											<Button sx={{color: "#000", margin: "0.5rem"}}>
												Login
											</Button>
										</Link>
										<Link to='/Signup'>
											<Button
												sx={{
													color: "#fff",
													borderRadius: "7px",
													background: "#ff5331",
												}}
												variant='contained'
											>
												Signup
											</Button>
										</Link>
									</>
								)}
							</Box>
						</Toolbar>
					</AppBar>
				</ElevationScroll>
				<Box component='nav'>
					<Drawer
						container={container}
						variant='temporary'
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: {xs: "block", md: "none"},
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}
					>
						{drawer}
					</Drawer>
				</Box>
				<Box component='main' sx={{p: 3}}>
					<Toolbar />
					{children}
				</Box>
			</Box>
			<Box>
				<Footer />
			</Box>
			{/* popups */}
			{menuPopupOpen && (
				<ProfileMenu
					menuPopupOpen={menuPopupOpen}
					handleClick={handleClick}
				/>
			)}
		</>
	);
}

export default DrawerAppBar;
